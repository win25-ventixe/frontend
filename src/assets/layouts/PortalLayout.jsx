import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { NavLink, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard";

const PortalLayout = () => {
  return (
    <div className="main">
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      <NavLink to="/event-details">
        <EventCard />
      </NavLink>
      {/* <Outlet /> */}
    </div>
  );
};

export default PortalLayout;
