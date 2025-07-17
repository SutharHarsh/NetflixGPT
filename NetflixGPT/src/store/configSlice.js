import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        langName: "en"
    },
    reducers: {
        changeLangName: (state, action) => {
            state.langName = action.payload;
        }
    }
})

export const { changeLangName } = configSlice.actions;
export default configSlice.reducer;