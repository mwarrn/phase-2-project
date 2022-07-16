import React from "react";
import { Header, Image, List, Divider, Container } from "semantic-ui-react";
import reactLogo from "../images/react.svg";
import semanticUiLogo from "../images/semanticui.png";
import chartJsLogo from "../images/chartjs.svg";

function About() {

  return (
  <>
    <Header as="h1">About</Header>
    <p>
      This application was built for Amazon Fresh Online Site Leadership (Site Lead, Area Managers, and Assistant Managers) to
      track performance and identify any potential trends using a collection of data entered by Assistant Managers at the end of
      shift. This data is currently available through other third-party tools, but the heavy overhead involved in accessing such
      data often makes it difficult for Site Leadership to make quick, effective, and accurate decisions. This data also conflicts
      at times with data collected day of from AFTLite Labor Summary and other dashboards. Identifying performance trends is crucial
      for meeting and exceeding customer facing metrics (Late SLAM and Late Batch) to maintain an excellent customer experience. 
      Tracking these metrics also helps Site Leadership deep-dive any potential challenges and barriers Outbound Assistant Managers 
      may be encountering with running a successful shift.
    </p>
    <Header as="h2">Roadmap (coming soon! 😎)</Header>
    <List bulleted>
      <List.Item>Ability to update a shift entry's values</List.Item>
      <List.Item>Data validation when adding/updating shift values</List.Item>
      <List.Item>Success/failed alert message to Add Shift and Update Shifts based on validity of submission</List.Item>
      <List.Item>Highlight cell values based on performance (e.g. green if exceeding rate, red if failing to meet rate)</List.Item>
      <List.Item>Ability to filter relevant rows by ascending/descending (and make Date the default pre-sorted column)</List.Item>
      <List.Item>Additional data visualization (more visualization types for each metric)</List.Item>
      <List.Item>User authentication to prevent data from being viewed or changed without permission</List.Item>
      <List.Item>Additional shift metrics (requires consultation with Site Leadership)</List.Item>
      <List.Item>Display average of each metric at the bottom of column of the Shifts table</List.Item>
    </List>
    <Divider />
    <Container textAlign="center">
    <Image src={reactLogo} size="tiny" inline circular spaced="right" bordered />
    <Image src={semanticUiLogo} size="tiny" inline circular spaced="right" bordered />
    <Image src={chartJsLogo} size="tiny" inline circular bordered /><br /><br />
    <p>Built with React, Semantic UI React, and react-chartjs-2.</p>
    <p>Michael Warren (mwarrn@) (2022)</p>
    </Container>
  </>
  );
}

export default About;