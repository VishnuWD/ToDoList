import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    lists: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.lists.push({
                id: nanoid(),
                text: action.payload
            });
        },
        remove: (state, action) => {
            state.lists = state.lists.filter(list => list.id !== action.payload)
        }
    }
});

export default todoSlice.reducer;
export const { add, remove } = todoSlice.actions;
