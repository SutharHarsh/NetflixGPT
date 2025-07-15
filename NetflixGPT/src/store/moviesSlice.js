import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieInfo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addMovieInfo } = moviesSlice.actions;
export default moviesSlice.reducer;