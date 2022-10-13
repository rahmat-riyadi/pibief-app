import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import sidebarSlice from "./sidebarSlice"
import loginPageSlice from "./loginPageSlice"

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        sidebarReducer: sidebarSlice,
        loginPageReducer: loginPageSlice
    }
})
