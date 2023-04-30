import Card from "./Card";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Testimonial= (props)=>{
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
     function leftShiftHandler(){
        // if(index-1<0){
        //     setIndex(reviews.length-1);
        // }
        // else{
        //     setIndex(index-1);
        // }
        setIndex((index-1+reviews.length) % reviews.length)
     }

     function rightShiftHandler(){
        // if(index+1>=reviews.length){
        //     setIndex(0);
        // }
        // else{
        //     setIndex(index+1);
        // }
        setIndex((index+1) % reviews.length);
     }

     function surpriseHandler(){
        let randIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randIndex);
     }
    return(
       <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center rounded-md mt-10 p-10 transition-all duration-700 shadow-md hover:shadow-xl ">
       <Card reviews={reviews[index]}/>

       <div className="text-3xl flex mt-10 gap-3 text-violet-400 font-bold justify-center">
      <button onClick={leftShiftHandler} className="cursor-pointer hover:text-violet-500">
        <FaChevronLeft/>
      </button>
      <button onClick={rightShiftHandler} className="cursor-pointer hover:text-violet-500">
         <FaChevronRight/>
      </button>
      </div>

       <div className="mt-5">
        <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 py-2 px-10 rounded-md font-bold text-white text-lg ">
            Surprise Me
        </button>
       </div>

       </div>
    );
}
export default Testimonial;