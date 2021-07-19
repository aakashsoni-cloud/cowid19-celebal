import Chart from 'react-apexcharts'
import { React, Component, useState, useEffect } from 'react'
import axios from 'axios';

function Datavisual() {
    
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

    var t = data?.data?.data?.summary?.total;
    var ac = data?.data?.data?.summary?.total;
    var d = data?.data?.data?.summary?.deaths;
    var r = data?.data?.data?.summary?.discharged;
    
    const series = [ t, ac, d, r];
    const options = {
        chart: {
            width: 380,
            type: 'polarArea'
        },
        labels: ['Confirmed', 'Active', 'Deaths', 'Recovered',],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            // monochrome: {
            //     enabled: true,
            //     shadeTo: 'dark',
            //     shadeIntensity: 0.6
            // }
        }
    };

        return (
         <div id="chart">
                <Chart options={options} series={series} type="polarArea" width={500} />
            </div>)
}

export default Datavisual;