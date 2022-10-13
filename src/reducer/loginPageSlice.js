import { createSlice } from "@reduxjs/toolkit"

const LoginPageSlice = createSlice({
    name: 'LoginPageSlice',
    initialState: {
        pos: 'login'
    },
    reducers: {
        changePos: (state, { payload }) => {
            state.pos = payload
        }
    }
})

export const { changePos } = LoginPageSlice.actions
export default LoginPageSlice.reducer