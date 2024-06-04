import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import IUser from "../../models/User";

interface ILoginState {
    loggedIn: boolean;
    user: IUser;
}

const initialState: ILoginState = {
    loggedIn: false,
    user: {} as IUser,
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        // Usuário logado
        loggedIn: (state, action: PayloadAction<{ user: IUser }>) => {
            state.loggedIn = true;
            state.user = action.payload.user;
        },
        // Usuário não logado
        noLoggedIn: (state) => {
            state.loggedIn = false;
            state.user = {} as IUser;
        }
    }
})

export const { loggedIn, noLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;