import React, { useState, useEffect } from "react";
import { Table, Header, Popup, Icon } from "semantic-ui-react";
import DeleteShift from "./DeleteShift.js";

function ListShifts() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    getShifts();
  }, []);

  const getShifts = () => {
    fetch("http://localhost:3000/shifts",  {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((data) => setShifts(data));
  }

  return (
    <>
    <Header as="h1">Shifts</Header>
      <Table celled striped compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>
              Adj. UPH &nbsp;
              <Popup content="The overall units per hour (UPH) processed by the site in consideration of all process paths (such as indirect, outbound, removals, ICQA, and support)." trigger={<Icon name="help circle" corner="top right" size="small" />} />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Pack Rate &nbsp;
              <Popup content="The average amount of units packed per hour by all associates." trigger={<Icon name="help circle" corner="top right" size="small" />} />
            </Table.HeaderCell>
            <Table.HeaderCell>
              CYS Rate &nbsp;
              <Popup content="The expected amount of units packed per hour by all associates." trigger={<Icon name="help circle" corner="top right" size="small" />} />
            </Table.HeaderCell>
            <Table.HeaderCell>
              OB Indirect Rate &nbsp;
              <Popup content="The measurement of outbound indirect labor with units packed and hours planned." trigger={<Icon name="help circle" corner="top right" size="small" />} />
            </Table.HeaderCell>
            <Table.HeaderCell>
              OB to CYS &nbsp;
              <Popup content="The comparison of shift performance to planned productivity." trigger={<Icon name="help circle" corner="top right" size="small" />} />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Late SLAM &nbsp;
              <Popup content="The percentage of packages that were not scanned and labelled with the applied manifest within the required time." trigger={<Icon name="help circle" corner="top right" size="small" />} />
            </Table.HeaderCell>
            <Table.HeaderCell>
              Late Batch &nbsp;
              <Popup content="The percentage of routes that were not scanned and completed for delivery partner pickup within the Plan Pickup Start Time (PPST)." trigger={<Icon name="help circle" corner="top right" size="small"  />} />
            </Table.HeaderCell>
            {/*<Table.HeaderCell>Update</Table.HeaderCell>*/}
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
      {shifts.map((shift, i) => (
          <Table.Row key={i}>
            <Table.Cell>{shift.date}</Table.Cell>
            <Table.Cell>{shift.uph}</Table.Cell>
            <Table.Cell>{shift.packRate}</Table.Cell>
            <Table.Cell>{shift.cysRate}</Table.Cell>
            <Table.Cell>{shift.indirectRate}</Table.Cell>
            <Table.Cell>{shift.percentToCys}</Table.Cell>
            <Table.Cell>{shift.lateSlam}</Table.Cell>
            <Table.Cell>{shift.lateBatch}</Table.Cell>
            <Table.Cell><DeleteShift shiftId={shift.id} shifts={shifts} setShifts={setShifts} /></Table.Cell>
          </Table.Row>
      ))}
        </Table.Body>
      </Table>
      </>
  );
}

export default ListShifts;