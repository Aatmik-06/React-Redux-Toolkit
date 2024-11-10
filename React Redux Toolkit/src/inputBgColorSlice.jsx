import { createSlice } from "@reduxjs/toolkit";
const inputBgColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        colorChange:(state,actions)=>{
            state.bgcolor =actions.payload;
        }
    }
})

export const {colorChange}= inputBgColorSlice.actions;
export default inputBgColorSlice.reducer;