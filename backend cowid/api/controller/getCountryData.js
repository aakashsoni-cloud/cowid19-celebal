const fetch = require('node-fetch');

exports.getCountryData = (req, res, next) => {
   fetch("https://api.covid19india.org/v4/min/timeseries.min.json")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
	let a={};
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2)-1;
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	Object.keys(body).forEach(function(key) {
  		a[key] = body[key]["dates"][year+"-"+month+"-"+date]
	})
	res.json(a)
	})
.catch(err => console.log(err))
}

