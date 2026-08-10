import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name: "wishList",
    initialState:{
        items:[]
    },
    reducers:{
        addWishlistItem:(state, action)=>{
            state.items.push(action.payload)
        },
        removeWishlistItem:(state, action)=>{
            state.items = state.items.filter(
            (item) => item.id !== action.payload
        )
        }

    }
})

export const { addWishlistItem, removeWishlistItem } = wishListSlice.actions
export default wishListSlice.reducer