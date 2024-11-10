
// React Redux Toolkit

// 05 Nov

// Counter Program Using Redux Toolkit
// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./CounterSlice";
// function App() {
//   const mycount = useSelector((state)=>state.mycounter.cnt);
//   const dispatch = useDispatch();
//   return (
//     <>
//     <center>
//     <h1>Counter App</h1>
//     <h1>{mycount}</h1>
//     <button onClick={()=>{dispatch(increment())}}>Increment</button>
   
//     <button onClick={()=>{dispatch(decrement())}}> Decrement</button>
//     </center>
//     </>
//   )
// }
// export default App



// 06 Nov
// Color change using redux toolkit

// import { useSelector,useDispatch } from "react-redux";
// import { colorChange } from "./bgcolorSlice";

// const App=()=>{
//   const myclr = useSelector((state)=>state.mycolor.bgclr);
//   const dispatch = useDispatch();
//   return(
//     <>
//     <center>
//     <h1>This is my Color Change App</h1>
//     <button onClick={()=>{dispatch(colorChange())}}>CLick</button>
//     <div style={{width:"300px",height:"200px",backgroundColor:myclr}}></div>
//     </center>
//     </>
//   )

// }
// export default App;






// 07 Nov
// Redux Toolkit by global with  payload

import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./bgcolorSlice";
import { useState } from "react";

const App=()=>{
  const[color,setColor]= useState("");
  const bgclr = useSelector((state)=>state.mycolor.bgcolor)
  const dispatch = useDispatch();
  return(
    <>
    <center>
    <h1>This is my Color Change App</h1>
    Enter Color : <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
    <button onClick={()=>{dispatch(colorChange(color))}}>CLick</button>
    <br /><br />
    <div style={{width:"300px",height:"200px",backgroundColor:bgclr}}></div>
    </center>
    </>
  )

}
export default App;




