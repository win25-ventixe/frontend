import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [formData, setFormData] = useState({
    eventID: id,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: "",
    ticketQuantity: 1,
  });

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await fetch(
        `https://cloudservices-bookingservice-fne3feg3hkaedcg8.swedencentral-01.azurewebsites.net/api/events/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch event");

      const data = await res.json();
      setEvent(data.result);
    } catch (err) {
      console.error(err);
    }
  };

  /*   const postBooking = async () => {
    try {
      const res = await fetch(
        //URI måste bytas utan närjag gjort en ny bookingService likt eventservice
        `https://cloudservices-eventservice-fne3feg3hkaedcg8.swedencentral-01.azurewebsites.net/api/events/${id}`,
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        console.error("Booking failed");
      } else {
        console.log("Booking successfull");
        navigate("/");
      }
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        //URI måste bytas utan närjag gjort en ny bookingService likt eventservice
        `https://cloudservices-bookingservice-hwa2dkb4d9euekeh.swedencentral-01.azurewebsites.net/api/bookings`,
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        console.error("Booking failed");
      } else {
        console.log("Booking successfull");
        navigate("/");
      }
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  };

  return (
    <div className="booking-wrapper">
      <h1>Book Event - {id}</h1>
      <div>
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label></label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />{" "}
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />{" "}
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              name="streetName"
              value={formData.streetName}
              onChange={handleChange}
              placeholder="Street Name"
              required
            />{" "}
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              required
            />{" "}
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />{" "}
          </div>
          <button type="submit">Book now</button>
        </form>
      </div>
    </div>
  );
};

export default Bookings;
