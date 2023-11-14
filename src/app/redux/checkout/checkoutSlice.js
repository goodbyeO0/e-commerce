"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkoutItems: [],
}

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        addToCheckout: (state, action) => {
            const checkout = {
                text: action.payload,
            }
            state.checkoutItems.push(checkout);
        }
    }
})



export const { addToCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;