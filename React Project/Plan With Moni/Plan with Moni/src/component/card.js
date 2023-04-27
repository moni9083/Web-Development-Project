import { useState } from "react";

function Card({ id, name, info, image, price ,removeTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore?info:`${info.substring(0, 200)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="w-[400px] m-[1rem] p-[1rem] h-max flex flex-col rounded-[10px] items-center shadow-md">
      <img src={image} alt="" className="w-[380px] object-cover aspect-square"></img>

      <div className="my-[20px] mx-[5px]">
        <div className="tour-details">
          <h4 className="text-[1.3rem] text-[#1faa59] font-bold">₹ {price}</h4>
          <h4 className="text-[1.5rem] font-bold">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="text-[#12b0e8] cursor-pointer" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="mt-[18px] py-[10px] px-[80px] cursor-pointer text-black rounded-[10px] text-[18px] font-bold bg-[#b4161b21] border-[1px] border-[#b4161b] border-solid hover:bg-[#FF0000] hover:text-white transition-all duration-[0.2s]" onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  );
}
export default Card;
