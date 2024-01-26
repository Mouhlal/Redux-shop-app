import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Contact/Header";
import Home from "./Contact/Composants/Home";
import ListerC from "./Contact/Composants/ListerC";
import AddContact from "./Contact/Composants/AddContact";
import ModifierContact from "./Contact/Composants/ModifierContact";
import ChercherContact from "./Contact/Composants/ChercherContact";

export default function AppContatc() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ListerC />} />
        <Route path="/newcontact" element={<AddContact />} />
        <Route path="/update/:id" element={<ModifierContact />} />
        <Route path="/SearchContact" element={<ChercherContact />} />
      </Routes>
    </div>
  );
}
