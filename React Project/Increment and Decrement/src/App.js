import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-10 bg-[#344151] flex-col">
       <div className="text-[#0398d4] text-2xl font-medium">Increment & Decrement</div>

       <div className="flex bg-white justify-center gap-12 rounded-sm py-3 text-[25px] text-[#344151]">
         <button onClick={decreaseHandler} className="border-r-2 text-center w-20 text-5xl border-[#bfbfbf]">-</button>
         <div className="font-bold  text-5xl gap-12">{count}</div>
         <button onClick={increaseHandler} className="border-l-2 text-center w-20 text-5xl border-[#bfbfbf]">+</button>
       </div>

       <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>

    </div>
  );
}

export default App;
