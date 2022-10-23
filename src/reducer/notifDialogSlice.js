import { createSlice } from "@reduxjs/toolkit";

const NotifDialogSlice = createSlice({
    name: 'NotifDialogSlice',
    initialState: {
        show: false
    },
    reducers: {
        changeStatus: (state, { payload }) => {
            state.show = payload
        }
    }
})

export const { changeStatus } = NotifDialogSlice.actions
export default NotifDialogSlice.reducer