import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../helper/axios"

export const authentication = createAsyncThunk('userSlice/authentication', async ({ email, password }, thunkAPI) => {
    
    try {
        const response = await axios.post('/login', { email, password })
        localStorage.setItem('token', response.data.responseData.access_token)
        localStorage.setItem('auth', true)
        return response
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
    
})

const UserSlice = createSlice({
    name: 'userSLice',
    initialState: {
        name: '',
        isAuth: false,
        isLoading: false
    },
    extraReducers: (builder) => {

        builder.addCase(authentication.fulfilled , (state, { payload }) => {
            state.name = 'admin'
            state.isAuth = true
            state.isLoading = false
        })

        builder.addCase(authentication.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(authentication.rejected, (state, action) => {
            state.isAuth = false
            state.isLoading = false
        })

    }
})

export default UserSlice.reducer