import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : true
}

export const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState,
    reducers : {
        toggleSideBar : (state) =>{
            state.isOpen = (!state.isOpen)
        }   
    }
})

export const {toggleSideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer