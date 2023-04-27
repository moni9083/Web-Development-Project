import "./App.css";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState([]);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);
  
    async function fetchData(){
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourses(output.data);
      }
      catch(error){
           toast.error("something went wrong");
      }
      setLoading(false);
    }
    
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
      <Navbar />
      </div>

      <div className="bg-bgDark2">
          <div className="my-4">
             <Filter filterData={filterData} setCategory={setCategory} category={category}/>
          </div>

          <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
               {loading? (<Spinner/>):(<Cards courses={courses} category={category}/>)}
          </div>
      </div>

     

    </div>
  );
}

export default App;
