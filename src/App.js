
import { useState } from "react";
import Hero from "./home-page/hero_page";
import { Routes ,Route } from "react-router-dom";
import Profil from "./profil-page/profil-page";
import Keahlian from "./spektrum-keahlian/keahlian";
import Kerjasama from "./kerjasama/kerjasama";
import Ppdb from "./PPDB-form/ppdb";

function App() {

  return (
   <div className="flex flex-col ">
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Profil-page" element={<Profil/>}/>
      <Route path="/Spektrum-keahlian" element={<Keahlian/>}/>
      <Route path="/Kerjasama" element={<Kerjasama/>}/>
      <Route path="/PPDB" element={<Ppdb/>}/>
    </Routes>
    </div>
  );
}

export default App;
