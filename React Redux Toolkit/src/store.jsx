import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice"

const store = configureStore({
    reducer:{
        mycounter:counterReducer
    }
})
export default store;