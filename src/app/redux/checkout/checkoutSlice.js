import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkoutItems: [],
    cartItems: [],
};

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        addToCheckout: (state, action) => {
            const checkout = {
                text: action.payload,
            };
            state.checkoutItems.push(checkout);
        },
        addToShip: (state, action) => {
            const allCheckout = {
                text: action.payload,
            };
            state.cartItems.push(allCheckout);
        },
        emptyCheckout: (state) => {
            state.checkoutItems = [];
        },
    },
});

export const { addToCheckout, addToShip, emptyCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
