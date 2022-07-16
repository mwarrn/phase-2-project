import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,

  BarElement,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Segment, Loader } from "semantic-ui-react";

ChartJS.register(
  BarElement,
);


const UphBarChart = () => {
    const [chartData, setChartData] = useState({});
    const [haveData, setHaveData] = useState(false);
  
    useEffect(() => {
      const fetchShifts = async () => {
        const res = await fetch("http://localhost:3000/shifts")
        const data = await res.json()
        console.log(data)
        setChartData({
          labels: data?.map((x) => x.date),
          datasets: [
            {
              label: "Adj. UPH",
              data: data?.map((x) => x.uph),
              backgroundColor: [
                "#ffbb11",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ]
            }
          ]
        })
        setHaveData(true);
      };
      fetchShifts();
    }, []);
  
    const options = {
      maintainAspectRatio: false,
      scales: {
      },
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    }
    if (!haveData) { 
      return (
        <Segment>
          <Loader active content="Loading" inline="centered" />
        </Segment>
      )
    } else {
        return (
            <div>
            <Bar
                data={chartData}
                height={400}
                options={options}
            />
            </div>
        )
    }  
}
export default UphBarChart