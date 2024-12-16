import { configureStore } from '@reduxjs/toolkit'
import  sidebarReducer  from '../Slice/sideBarSlice'
import  SeasonReducer  from '../Slice/SeasonSlice'
export const store = configureStore({
  reducer: {
    sidebar : sidebarReducer,
    currentSeason : SeasonReducer
  },
})

