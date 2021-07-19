import React ,{useEffect,useState} from "react";
import Datatable from "../components/Datatable";
import Dataset from "../visualise/Dataset";
import Barchart from '../visualise/Citybarchart';
import axios from 'axios';

function Dashboard() {

  const [data, setData] = useState(" ");
  const [isLoading, loadData] = useState(true);
  useEffect(() => {
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
      .then(res => {
        if (res === undefined) {
          loadData(false)
        }
        setData(res);
        console.log(res);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  

  return (
    <> <div class="bg-grey-100 back">
      <h2 className="md:auto pt-5 text-center">India Covid Cases</h2>
      <div class="flex flex-wrap justify-center">  
        <div class="flex flex-col bg-white rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
          <h4 class="text-center text-red-500 px-2 pt-3"> Confirmed </h4>
           <h3 class="text-center text-red-500 pt-2">{isLoading && data?.data?.data?.summary?.total}</h3> 
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
          <h4 class="text-center text-blue-500 px-2 pt-3"> Active </h4>
          <h3 class="text-center text-blue-500 pt-2">{isLoading && data?.data?.data?.summary?.total-(isLoading && data?.data?.data?.summary?.discharged+ isLoading && data?.data?.data?.summary?.deaths)}</h3>
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-xl w-full py-2 m-10 overflow-hidden sm:w-52">
          <h4 class="text-center text-green-500 px-2 pt-3"> Recovered </h4>
          <h3 class="text-center text-green-500 pt-2">{isLoading && data?.data?.data?.summary?.discharged}</h3>
        </div>
        <div class="flex flex-col bg-white rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
          <h4 class="text-center text-grey-500 px-2 pt-3"> Deceased </h4>
          <h3 class="text-center text-grey-500 pt-2">{isLoading &&  data?.data?.data?.summary?.deaths}</h3>
        </div>
      </div>

      <div className="px-1">
        <div className="">
          <div className="justify-center flex flex-wrap xl:col-start-1 bbg-white rounded-xl xl:col-end-4">
            <div className="bg-white rounded-xl pl-4 m-3 py-8 px-8 mb-14">
              <Datatable />
            </div>
            <div className="bg-white rounded-xl m-3 mb-14">
              <Dataset />
            </div>
            {/* <div className="col-span-4 bg-white rounded-xl m-3 px-4 mb-14">
              <Barchart />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
