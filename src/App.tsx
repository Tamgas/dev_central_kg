import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Vacancy from "./components/Vacancy";
import Event from "./components/Event";
import Videoo from "./components/Videoo";
import Organizasii from "./components/Organizasii";
import Soobshestvo from "./components/Soobshestvo";
import DetailVacancy from "./components/DetailVacancy";
import DetailOrganization from "./components/DetailOrganization";
import DetailEvents from "./components/DetailEvents";
import DetailVideoo from "./components/DetailVideoo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/events" element={<Event />} />
        <Route path="/meetups" element={<Videoo />} />
        <Route path="/organizations" element={<Organizasii />} />
        <Route path="/community" element={<Soobshestvo />} />
        <Route path="/detailVacancy" element={<DetailVacancy />} />
        <Route path="/detailO" element={<DetailOrganization />} />
        <Route path="/detailEvents" element={<DetailEvents />} />
        <Route path="/detailVideoo" element={<DetailVideoo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
