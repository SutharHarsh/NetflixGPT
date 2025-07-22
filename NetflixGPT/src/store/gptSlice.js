import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        suggestedMovies: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSuggestedMovies: (state, action) => {
            const {movieNames, geminiResult} = action.payload;
            state.suggestedMovies = geminiResult;
            state.movieNames = movieNames;
        }
    },
});

export const { toggleGptSearchView, addSuggestedMovies } = gptSlice.actions;

export default gptSlice.reducer;