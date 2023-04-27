import Card from "./card";
function Tours({tours,removeTour}){
    return(
    <div className="flex justify-center items-center flex-col"> 

      <div>
        <h2 className="border-dashed border-[7px] border-[#0111A0] text-[3rem] m-[6vh] py-[1vh] px-[5vw] rounded-[20px] font-bold">Plan With Moni</h2>
      </div>

      <div className="flex justify-center flex-wrap mx-w-[1300px] my-0 mx-auto">
        {tours.map( (tour) => {
            return <Card {...tour} removeTour={removeTour}></Card>
        })
        }
      </div>

     </div>
    );
}
export default Tours;