// import "./App.css"; 
// import React from "react"; 
import Tours from "./component/Tours";
import data from "./data";
import React,{ useState } from "react"; 
const App = () => {
  const[tours,setTours]=useState(data);
  function removeTour(id){
         const newTours=tours.filter(tour=>tour.id!==id);
         setTours(newTours);    
  }

  if (tours.length===0){
    return(
      <div className="h-[100vh] flex flex-col justify-center items-center">
            <h2 className="text-[1.5rem] font-bold">No Tours Left</h2>
            <button className="mt-[18px] py-[10px] px-[80px] border-[1px] border-white border-solid hover:bg-white text-black transition-all duration-[0.2s] bg-[#f0f0f0]" onClick={()=>setTours(data)}>
              Refresh
            </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
