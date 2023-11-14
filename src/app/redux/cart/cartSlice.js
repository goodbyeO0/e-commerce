"use client";

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const { id, text } = action.payload;
            const cart = {
                id,
                text
            }
            state.carts.push(cart)
        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer