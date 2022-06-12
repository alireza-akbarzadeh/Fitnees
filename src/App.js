// react router dom
import { Route, Routes } from "react-router-dom";
// @mui
import { Box } from "@mui/material";
// pages
import { ExerciseDetails, Home } from "./Pages";
// components
import { Navbar, Footer } from "./components";
// styles
import "./App.css";

function App() {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1480px" } }} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
