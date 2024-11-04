import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    upcomingmovie: null,
}

export const upcomingstoreSlice = createSlice({
    name: 'upcomingmovie',
    initialState,
    reducers: {
        adddata: (state, action) => {
            state.upcomingmovie = action.payload
            // console.log(state.topmovie, "check data")
        }
    }
})

export const { adddata } = upcomingstoreSlice.actions;
export default upcomingstoreSlice.reducer