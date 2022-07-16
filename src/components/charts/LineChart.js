import React, { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Segment, Loader } from "semantic-ui-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  ); 

const LineChart = () => {
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
            label: "Late SLAM",
            data: data?.map((x) => x.lateSlam),
            backgroundColor: [
              "#ffbb11",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ]
          }, 
          {
            label: "Late Batch",
            data: data?.map((x) => x.lateBatch),
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
            <Line
                data={chartData}
                height={400}
                options={options}
            />
            </div>
        )
    }
}

export default LineChart;
