import { configureStore } from '@reduxjs/toolkit'
import  sidebarReducer  from '../Slice/sideBarSlice'
export const store = configureStore({
  reducer: {
    sidebar : sidebarReducer
  },
})

