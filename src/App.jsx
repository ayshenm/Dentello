import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FixedComponent from './Componenents/FixedComponent';
import HomePage from './Componenents/Pages/HomePage';
import BookAppointment from "./Componenents/Pages/BookAppointment";
import Information from "./Componenents/Pages/Information";
import CosmeticTeeth from "./Componenents/Pages/CosmeticTeeth";
import LiveAdvisory from "./Componenents/Pages/LiveAdvisory";
import AligmentTeeth from "./Componenents/Pages/AligmentTeeth";
import OralHygiene from "./Componenents/Pages/OralHygiene";
import CavityInspection from "./Componenents/Pages/CavityInspection";
import RootCanal from "./Componenents/Pages/RootCanal";

import AboutPage from "./Componenents/Pages/AboutPage";
import ReadMore from "./Componenents/Pages/ReadMore";
import News from "./Componenents/Pages/News";
import OutTeam from "./Componenents/Pages/OutTeam";
import Project from "./Componenents/Pages/Project";
import SectionTwo from "./Componenents/HomePage/SectionTwo";
import SectionSix from "./Componenents/HomePage/SectionSix";
import SectionSeven from "./Componenents/HomePage/SectionSeven";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<FixedComponent />}>
          <Route index={true} path="/" element={<HomePage />} />
          <Route  path="/about" element={<AboutPage />} />
          <Route  path="/service" element={<SectionTwo />} />
          <Route  path="/menu" element={<SectionSix />} />
          <Route  path="/contact2" element={<SectionSeven />} />
          <Route  path="/book" element={<BookAppointment />} />
          <Route  path="/info" element={<Information />} />
          <Route  path="/root" element={<RootCanal/>} />
          <Route  path="/cosmetic" element={<CosmeticTeeth />} />
          <Route  path="/advisory" element={<LiveAdvisory />} />
          <Route  path="/aligment" element={<AligmentTeeth />} />
          <Route  path="/hygiene" element={<OralHygiene />} />
          <Route  path="/cavity" element={<CavityInspection />} />
          <Route  path="/news" element={<News />} />
          <Route  path="/readmore" element={<ReadMore />} />
          <Route  path="/ourteam" element={<OutTeam />} />
          <Route  path="/project" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
 