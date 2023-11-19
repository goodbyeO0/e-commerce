"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkoutItems: [],
}

export const checkoutSlice = createSlice({
    name: "Addcheckout",
    initialState,
    reducers: {
        addToCheckout: (state, action) => {
            const checkout = {
                text: action.payload,
            }
            state.checkoutItems.push(checkout);
        },
        emptyCheckout: (state) => {
            state.checkoutItems = [];
        },
    },

})



export const { addToCheckout, emptyCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;