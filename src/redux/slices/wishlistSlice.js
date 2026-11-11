import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],  //give immutable data type.since array is immutable we give here
    reducers:{
        //add to wishlist-this action dispatched by view component-product
        addToWishlist:(state,action)=>
        {
            state.push(action.payload)
        },
        //remove from wishlist-wishlist component dispatches action-product id
       removeWishlistItem:(state,action)=>
       {
        return state.filter(item=>item.id!=action.payload) //return needed because we change entire array
       }
    }
})

   export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
   export default wishlistSlice.reducer
   