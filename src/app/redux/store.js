"use client";

import { configureStore } from "@reduxjs/toolkit";
import checkoutProduct from "../redux/checkout/checkoutSlice"

export const store = configureStore({

    reducer: {
        checkout: checkoutProduct,
    }

})