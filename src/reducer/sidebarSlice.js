import { createSlice } from "@reduxjs/toolkit"

const SidebarSlice = createSlice({
    name: 'SidebarSlice',
    initialState: {
        location: 'dashboard',
        currentIndex: 0
    },
    reducers: {
        onButtonClick: (state, action) => {
            state.location = action.payload.location
            state.currentIndex = action.payload.index
        }
    } 
})

export const { onButtonClick } = SidebarSlice.actions
export default SidebarSlice.reducer