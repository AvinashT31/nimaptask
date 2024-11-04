import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    topmovie: null,
}

export const topratedSlice = createSlice({
    name: 'topmovie',
    initialState,
    reducers: {
        adddata: (state, action) => {
            state.topmovie = action.payload
            // console.log(state.topmovie, "check data")
        }
    }
})

export const { adddata } = topratedSlice.actions;
export default topratedSlice.reducer