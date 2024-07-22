import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Meropriatia from "./components/Meropriatia";
import Videoo from "./components/Videoo";
import Organizasii from "./components/Organizasii";
import Soobshestvo from "./components/Soobshestvo";
import DetailVacancy from "./components/DetailVacancy";
import { Vacancies } from "./components/Vacancy/Vacancies";
import DetailOrganization from "./components/DetailOrganization";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/vacancy" element={<Vacancies />} />
        <Route path="/events" element={<Meropriatia />} />
        <Route path="/meetups" element={<Videoo />} />
        <Route path="/organizations" element={<Organizasii />} />
        <Route path="/community" element={<Soobshestvo />} />
        <Route path="/detailVacancy" element={<DetailVacancy />} />
        <Route path="/detailO" element={<DetailOrganization />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
