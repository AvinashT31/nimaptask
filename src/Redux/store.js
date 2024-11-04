import { configureStore } from "@reduxjs/toolkit";
import homestoreReducer from './Slice/homestoreSlice';
import topratedReducer from "./Slice/topratedSlice"
import upcomingstoreReducer from "./Slice/upcomingstoreSlice"

export const store = configureStore({
    reducer: {
        movie: homestoreReducer,
        topmovie: topratedReducer,
        upcomingmovie: upcomingstoreReducer
    }
})