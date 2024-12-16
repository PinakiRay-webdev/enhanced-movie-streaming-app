import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    season : 1,
}

export const SeasonSlice = createSlice({
    name : 'currentSeason',
    initialState,
    reducers : {
        setCurrentSeason : (state , action) =>{
            state.season = action.payload;
        },

        resetSeason : (state) =>{
            state.season = 1;
        }
    }
})

export const {setCurrentSeason , resetSeason} = SeasonSlice.actions;
export default SeasonSlice.reducer