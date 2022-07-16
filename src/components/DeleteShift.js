import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

function DeleteShift( { shiftId, shifts, setShifts } ) {
  const [open, setOpen] = useState(false);

  function deleteShift(shiftId) {
    fetch(`http://localhost:3000/shifts/${shiftId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then(() => console.log(`${shiftId} has been deleted`));

    const updatedShifts = shifts.filter((shift) => shift.id !== shiftId);
    setShifts(updatedShifts);
    setOpen(false);
  }

  return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button basic circular icon button color="red"><Icon name="delete" /></Button>}
    >
    <Modal.Header>Delete Shift</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Are you sure you want to delete this shift entry?</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color="black" onClick={() => setOpen(false)}>
        No
      </Button>
      <Button
        content="Yes"
        labelPosition="right"
        icon="checkmark"
        onClick={() => deleteShift(shiftId)}
        positive
      />
    </Modal.Actions>
  </Modal>
  );
}

export default DeleteShift;