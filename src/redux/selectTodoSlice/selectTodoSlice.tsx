import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISelectTodoState {
    id_selected: string;
    name?: string;
}

const initialState: ISelectTodoState = {
    id_selected: '',
    name: ''
};

const selectTodoSlice = createSlice({
    name: 'select',
    initialState: initialState,
    reducers: {
        // Usuário logado
        selected: (state, action: PayloadAction<{ select: string, name?: string }>) => {
            state.id_selected = action.payload.select;
            state.name = action.payload.name;
        },
        // Usuário não logado
        notSelected: (state) => {
            state.id_selected = initialState.id_selected;
            state.name = initialState.name;
        }
    }
})

export const { selected, notSelected } = selectTodoSlice.actions;
export default selectTodoSlice.reducer;