import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./inputBgColorSlice";

const store2=configureStore({
    reducer:{
        mycolor:myreducer
    }
})

export default store2;