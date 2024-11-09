
// React Redux Toolkit

// 05 Nov

// Counter Program Using Redux Toolkit
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";
function App() {
  const mycount = useSelector((state)=>state.mycounter.cnt);
  const dispatch = useDispatch();
  return (
    <>
    <center>
    <h1>Counter App</h1>
    <h1>{mycount}</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
   
    <button onClick={()=>{dispatch(decrement())}}> Decrement</button>
    </center>
    </>
  )
}
export default App

