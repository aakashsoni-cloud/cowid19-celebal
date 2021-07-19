const fetch = require('node-fetch');

exports.getStateData = (req, res, next) => {
   const region = req.params.loc
   fetch("https://api.covid19india.org/v4/min/timeseries.min.json")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
	    let date_ob = new Date();
	    let date = ("0" + date_ob.getDate()).slice(-2)-1;
	    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	    let year = date_ob.getFullYear();
     	res.json(body[region]["dates"][year+"-"+month+"-"+date].total)
    })
}




// const fetch = require("node-fetch");
// require("dotenv").config();

// exports.getStateData = (req, res, next) => {
//   const regional = req.params.loc;
//   fetch("https://api.covid19india.org/v4/min/timeseries.min.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((body) => {
//       var stateCode = Object.keys(body);
//       var wholeData = [];
//       // console.log(countKey);
//       // console.log(stateCode);
//       const dataArray = [];
//       stateCode.map((s) => {
//         if (s === regional) {
//           const cityKey = s.split(',', 2);
         
//           const Metadata = body[regional].dates;
//           const data = Object.values(Metadata);
//           var countKey = data.length;
//           // wholeData.push(cityKey);
//           // wholeData.push(Metadata);
//           wholeData.push(data);
          
//           const refineData = wholeData.filter(val => { return val !== null; });
//           for (let i = 0; i < countKey; i++){
//           dataArray.push(refineData[0][i]);
//           }
//           res.send(dataArray);
          
//         }
//       });
     
//       // let d = data.map((x) => {
//       //   // console.log(x);
//       //   wholeData.push();
//       // })
//       // const v = Object.values(body);
//       // const value = Object.entries(key);
//       // const value = Object.entries(key);
//               // res.send(key[key.length - 1]);
//       // res.send(key);
//       // res.send(value);
//       // const d = new Date();
//       // res.send(data.flatMap((k, i) => {
//       //  console.log(d[k]);
//       // }));
//       // res.send(cities);
//       // res.send(data);
//       // res.send(d);
//       // console.log(wholeData);
      
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
