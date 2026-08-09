import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "category",
    initialState:{
        category:[]
    },
    reducers:{
        addCategory:(state, action)=>{
            state.category = action.payload
        },
    }
})

export const { addCategory } = categorySlice.actions
export default categorySlice.reducer