import { React, useState, useEffect } from "react";
import BarChartApex from "react-apexcharts";
import axios from "axios";

function BarChart() {
  const [data, setData] = useState(" ");
  const [isLoading, loadData] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        if (res === undefined) {
          loadData(false);
        }
        setData(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    
    // var k = data.data.data.regional[0].loc
    // console.log(k);
    // var states = Object.entries(data)
    var location = [];
    var total = [];
    isLoading && data?.data?.data?.regional.forEach(element => {
        location.push(element.loc);
    });
    
    console.log(location);

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
            location.map(data => {
                  return data
              })
      ],
    },
  };
  return (
    <div id="chart">
      <BarChartApex options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default BarChart;
