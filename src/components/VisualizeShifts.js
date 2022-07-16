import React from "react";
import { Header, Divider } from "semantic-ui-react";
import LineChart from "./charts/LineChart.js";
import UphBarChart from "./charts/UphBarChart.js";

function VisualizeShifts() {

  return (
    <>
    <Header as="h1">Performance Trends</Header>
    <LineChart />
    <Divider />
    <UphBarChart />
    </>
  );
}

export default VisualizeShifts;