import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Footer from "./Footer";
import Vacansii from "./components/Vacansii";
import Meropriatia from "./components/Meropriatia";
import { Route, Routes } from "react-router-dom";
import Videoo from "./components/Videoo";
import Organizasii from "./components/Organizasii";
import Soobshestvo from "./components/Soobshestvo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Vacansii />} />
        <Route path="/events" element={<Meropriatia />} />
        <Route path="/meetups" element={<Videoo/>}/>
        <Route path="/organizations" element={<Organizasii/>}/>
        <Route path="/community" element={<Soobshestvo/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
