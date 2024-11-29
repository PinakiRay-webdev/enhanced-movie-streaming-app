import { configureStore } from '@reduxjs/toolkit'
import  sidebarReducer  from '../Slice/sideBarSlice'
import  preferenceReducer  from '../Slice/preferenceSlice'
export const store = configureStore({
  reducer: {
    sidebar : sidebarReducer,
    list : preferenceReducer
  },
})

