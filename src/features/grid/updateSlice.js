import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
    name: 'update',
    initialState: {
        value: {text: ""}
    },
    reducers: {
        updateValue: (state, action) => {
            console.log("Action: " + action);

            state.value = action.payload;
        }
    }
});

export const {updateValue} = updateSlice.actions;
export default updateSlice.reducer;