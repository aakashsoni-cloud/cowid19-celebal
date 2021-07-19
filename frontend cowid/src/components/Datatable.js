import React, { useEffect, useState } from "react";
import axios from 'axios'
import * as ReactBootStrap from "react-bootstrap";

function codeToName(e) {
  var aa = {
    "AN": "Andaman and Nicobar",
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CH": "Chandigarh",
    "CT": "Chhattisgarh",
    "DN": "Dadra and Nagar Haveli",
    "DD": "Daman and Diu",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "LA": "Ladakh",
    "LD": "Lakshadweep",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Odisha",
    "PY": "Puducherry",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TG": "Telangana",
    "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UT": "Uttarakhand",
    "WB": "West Bengal",
    "TT": "TT"
  };
  return aa[e];
};

function Datatable() {

  const [dt, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  //toddos
  // const States = 


  if (dt !== undefined) {

    var arr = Object.entries(dt).map((k, index) => {
      return <tr key={index}>
        <td>{codeToName(k[0])}</td>
        <td>{k[1].total.recovered}</td>
        <td>{k[1].total.confirmed - (k[1].total.deceased + k[1].total.recovered)}</td>
        <td>{k[1].total.deceased}</td>
        <td>{k[1].total.confirmed}</td>
      </tr>
    })
  }
  return (
    <div>
      <ReactBootStrap.Table
        striped
        bordered
        hover
        size="sm"
        class="flex justify-evenly"
      >
        <thead>
          <tr>
            <th>State/UT</th>
            <th>Recovered</th>
            <th>Active</th>
            <th>Deceased</th>
            <th>Confirmed</th>
          </tr>
        </thead>
        <tbody>
          {arr}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Datatable;
