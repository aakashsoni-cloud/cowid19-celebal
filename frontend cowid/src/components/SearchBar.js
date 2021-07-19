import { React, useState } from "react";
import "../App.css";
import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";

const SearchBar = () => {

    const  aa = {
      "andaman and nicobar" : "AN",
       "andhra pradesh" : "AP",
       "arunachal pradesh" : "AR",
       "assam" : "AS",
       "bihar" : "BR",
       "chandigarh" : "CH",
       "chhattisgarh" : "CT",
       "dadra and nagar haveli" : "DN",
       "daman and diu" : "DD",
       "delhi" : "DL",
       "goa" : "GA",
       "gujarat" : "GJ",
       "haryana" : "HR",
       "himachal Pradesh" : "HP",
       "jammu and kashmir" : "JK",
       "jharkhand" : "JH",
       "karnataka" : "KA",
       "kerala" : "KL",
       "ladakh" : "LA",
       "lakshadweep" : "LD",
       "madhya Pradesh" : "MP",
       "maharashtra" : "MH",
       "manipur" : "MN",
       "meghalaya" : "ML",
       "mizoram" : "MZ",
       "magaland" : "NL",
       "odisha" : "OR",
       "puducherry" : "PY",
       "punjab" : "PB",
       "rajasthan" : "RJ",
       "sikkim" : "SK",
       "tamil nadu" : "TN",
       "telangana" : "TG",
       "tripura" : "TR",
       "uttar pradesh" : "UP",
       "uttarakhand" : "UT",
       "west bengal" : "WB",
    };

  const [input, setInput] = useState();
  const [data, setData] = useState("");
  const [isShow, setBox] = useState({ 1: 'Confirmed', 2: 'Active', 3: 'Recovered', 4: 'Deceased', 5: 'Vaccinated1', 6: 'Vaccinated2' });
  const [isTrue, setisTrue] = useState(false);
  // var allData = {}
  const handleChange = (e) => {
    console.log();
    setInput(aa[e.currentTarget.value.toLowerCase()]);
  }

  const handleClick = (e) => {
    // e.preventDefault();
    axios.get(`http://localhost:8080/${input}`)
      .then(res => {
        // console.log(res.data)
        setisTrue(true);
        setData(res.data)
      })
      .catch(err => console.log(err))
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center searchwrapper mx-auto">
        
        <div className="mx-auto py-10" >
          <h4 className="md:auto my-10 text-center">City Covid Cases</h4>
          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input
              className="rounded-l-full py-6 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              // value={this.state.}
              onChange={handleChange}
              placeholder="search city"
            ></input>
            <div className="pr-2" >
              <button
                onClick={handleClick}
                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
              >
                <SearchIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/*cards*/}
        {isTrue && <div class="flex flex-wrap justify-center">
          <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52" >
            <h4 class="text-center text-red-500 px-2 pt-3"> Confirmed </h4>
            <h3 class="text-center text-red-500 pt-2">{data.confirmed}</h3>
          </div>

          <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
            <h4 class="text-center text-blue-500 px-2 pt-3">Active </h4>
            <h3 class="text-center text-blue-500 pt-2">{data.confirmed - (data.deceased + data.recovered)}</h3>
          </div>

          <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl w-full py-2 m-10 overflow-hidden sm:w-52">
            <h4 class="text-center text-green-500 px-2 pt-3">Recovered </h4>
            <h3 class="text-center text-green-500 pt-2">{data.recovered}</h3>
          </div>

          <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
            <h4 class="text-center text-white px-2 pt-3">Deceased</h4>
            <h3 class="text-center text-white pt-2">{data.deceased}</h3>
          </div>

          <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
            <h4 class="text-center text-yellow-500 px-2 pt-3">Vaccinated 1</h4>
            <h3 class="text-center text-yellow-500 pt-2">{data.vaccinated1}</h3>
          </div>

          <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl w-full py-2  m-10 overflow-hidden sm:w-52">
            <h4 class="text-center text-yellow-600 px-2 pt-3">Vaccinated 2</h4>
            <h3 class="text-center text-yellow-600 pt-2">{data.vaccinated2}</h3>
          </div>
        </div>}
        
      </div>
    </>
  );
};

export default SearchBar;
