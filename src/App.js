import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar.js";
import AddShift from "./components/AddShift.js";
import ListShifts from "./components/ListShifts.js";
import VisualizeShifts from "./components/VisualizeShifts.js";
import About from "./components/About.js";

function App() {
  return (
    <>
      <Container>
      <Navbar />
        <Routes>
          <Route path="/" element={<ListShifts />} />
          <Route path="/add" element={<AddShift />} />
          <Route path="/trends" element={<VisualizeShifts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
