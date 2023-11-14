"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartCounterReducer from "../redux/cart/cartSlice";
import checkoutProduct from "../redux/checkout/checkoutSlice"

export const store = configureStore({

    reducer: {
        cart: cartCounterReducer,
        checkout: checkoutProduct,
    }

})