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
            const cart = {
                text: action.payload,
            }
            state.carts.push(cart)
        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer