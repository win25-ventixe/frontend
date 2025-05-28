import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./assets/components/Header";
import EventDetails from "./assets/pages/EventDetails";
import Nav from "./assets/components/Nav";
import Footer from "./assets/components/Footer";
import Events from "./assets/pages/Events";
import Bookings from "./assets/pages/Bookings";
import Invoices from "./assets/pages/Invoices";

function App() {
  return (
    <div className="portal-wrapper">
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events/booking/:id" element={<Bookings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
