import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const res = await fetch(
      "https://cloudservices-eventservice-fne3feg3hkaedcg8.swedencentral-01.azurewebsites.net/api/events"
    );
    if (res.ok) {
      const response = await res.json();
      setEvents(response.result);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="main">
      {events.map((event) => (
        <EventCard key={event.id} item={event} />
      ))}
      {/* <Outlet /> */}
    </div>
  );
};

export default Events;

//        <Link to="/event-details">
