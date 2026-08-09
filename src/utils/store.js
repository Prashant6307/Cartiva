import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
import categorySlice from "./categorySlice"


const store = configureStore({
    reducer:{
        cart: cartSlice,
        products: productSlice,
        category: categorySlice

    }
})

export default store