import { configureStore } from "@reduxjs/toolkit";

import timeReducer from "./time"

export const store = configureStore({
    reducer : {
        cookMeals: timeReducer
    }
})