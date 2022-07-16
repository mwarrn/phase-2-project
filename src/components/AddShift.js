import React, { useState } from "react";
import { Form, Header } from "semantic-ui-react";

function AddShift() {
  const [date, setDate] = useState("");
  const [uph, setUph] = useState(0);
  const [packRate, setPackRate] = useState(0);
  const [cysRate, setCysRate] = useState(0);
  const [indirectRate, setIndirectRate] = useState(0);
  const [percentToCys, setPercentToCys] = useState(0);
  const [lateSlam, setLateSlam] = useState(0);
  const [lateBatch, setLateBatch] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const data = { date, uph, packRate, cysRate, indirectRate, percentToCys, lateSlam, lateBatch };
    fetch("http://localhost:3000/shifts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      response.json()
      .then((result) => {
        console.warn("result", result);
      });
    });
    setDate("");
    setUph(0);
    setPackRate(0);
    setCysRate(0);
    setIndirectRate(0);
    setPercentToCys(0);
    setLateSlam(0);
    setLateBatch(0);
  }

  return (
    <>
    <Header as="h1">Add a New Shift</Header>
    <Form>
      <Form.Field>
        <Form.Input label="Date" type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="Adj. UPH" type="text" name="uph" value={uph} onChange={(e)=>{setUph(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="Pack Rate" type="text" name="packRate" value={packRate} onChange={(e)=>{setPackRate(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="CYS Rate" type="text" name="cysRate" value={cysRate} onChange={(e)=>{setCysRate(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="Outbound Indirect Rate" type="text" name="indirectRate" value={indirectRate} onChange={(e)=>{setIndirectRate(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="% to CYS (OB)" type="text" name="percentToCys" value={percentToCys} onChange={(e)=>{setPercentToCys(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="Late SLAM" type="text" name="lateSlam" value={lateSlam} onChange={(e)=>{setLateSlam(e.target.value)}} />
      </Form.Field>
      <Form.Field>
        <Form.Input label="Late Batch" type="text" name="lateBatch" value={lateBatch} onChange={(e)=>{setLateBatch(e.target.value)}} />
      </Form.Field>
      <Form.Button primary type="submit" onClick={handleSubmit} content="Add Shift" />
    </Form>
    </>
  );
}

export default AddShift;