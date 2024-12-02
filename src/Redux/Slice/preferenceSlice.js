import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc , collection } from "firebase/firestore";
import { db } from "../../utils/Firebase/firebase";

export const addToWishList = createAsyncThunk('addToWishList' , async(show) =>{
    try {
        const list = await addDoc(collection(db , 'wishlists') , show);
        const wishlist = {id : list.id , show}
        return wishlist;
    } catch (error) {
        console.log(error.message)
    }
})

const initialState = {
    lists : [],
    isLoading : false,
    isError : false
}


export const preferenceSlice = createSlice({
    name : 'list',
    initialState,
    extraReducers : (builder) =>{
        builder
            .addCase(addToWishList.pending , (state) =>{
                state.isLoading = true,
                state.isError = false
            })
            .addCase(addToWishList.fulfilled , (state , action) =>{
                state.isLoading = false,
                state.lists = [...state.lists , action.payload]
                state.isError = false
            })
            .addCase(addToWishList.rejected , (state , action) =>{
                state.isLoading = false
                state.isError = false
                console.log(action.error.message)
            });
    }
})

export default preferenceSlice.reducer