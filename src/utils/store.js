import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
import categorySlice from "./categorySlice"
import wishListSlice from "./wishListSlice"


const store = configureStore({
    reducer:{
        cart: cartSlice,
        products: productSlice,
        category: categorySlice,
        wishList: wishListSlice
    }
})

export default store