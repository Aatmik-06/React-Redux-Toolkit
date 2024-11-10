import { createSlice } from "@reduxjs/toolkit";
const bgcolorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgclr:"yellow"
    },
    reducers:{
        colorChange:(state)=>{
        state.bgclr="red";
        }
    }
})
export const {colorChange}= bgcolorSlice.actions;
export default bgcolorSlice.reducer;