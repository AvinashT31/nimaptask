import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movie: null,
}

export const homstoreSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        adddata: (state, action) => {
            state.movie = action.payload
            // console.log(state.movie, "check data")
        }
    }
})

export const { adddata } = homstoreSlice.actions;
export default homstoreSlice.reducer