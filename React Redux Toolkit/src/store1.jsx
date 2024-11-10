import { configureStore } from "@reduxjs/toolkit";
import changeReducer from './bgcolorSlice'
const Store1=configureStore({
    reducer:{
        mycolor:changeReducer
    }
})
export default Store1;