import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice/loginSlice";
import selectTodoSlice from "./selectTodoSlice/selectTodoSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
        selected: selectTodoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;