import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header, Segment, Image } from "semantic-ui-react";
import logo from "../images/fresh.png";

function Navbar() {
    
  return (
    <>
    <Segment clearing color="green">
      <Header as="h1" floated="left">Outbound Shift Performance Tracker</Header>
      <Image src={logo} size="tiny" floated="right"/>
    </Segment>
    <Menu>
      <Menu.Item as={ Link } to="/">View Shifts</Menu.Item>
      <Menu.Item as={ Link } to="/add">Add Shift</Menu.Item>
      <Menu.Item as={ Link } to="/trends">Performance Trends</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={ Link } to="/about">About</Menu.Item>
      </Menu.Menu>
    </Menu>
    </>
  );
}

export default Navbar;