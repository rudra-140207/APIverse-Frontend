import React from "react";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Docs from "./components/Docs";
import Login from "./components/Login";
import Demo from "./components/Demo";
import Landing from "./components/Landing";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/docs" element={<Docs/>} />
        <Route path="/demo" element={<Demo/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
