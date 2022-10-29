import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Ekibimiz from "./components/pages/Ekibimiz";
import Iletisim from "./components/pages/Iletisim";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/ekibimiz" exact element={<Ekibimiz />} />
          <Route path="/iletisim" exact element={<Iletisim />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
