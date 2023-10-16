import "../App.css";
import axios from "axios";
import { useState } from "react";

function Input() {
  const [eventInput, setEventInput] = useState({
    yourName: "",
    eventTitle: "",
    date: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventInput({ ...eventInput, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(eventInput);

      const res = await axios.post("http://localhost:4000/events", eventInput, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        console.log("Resource updated successfully");
        setEventInput({
          yourName: "",
          eventTitle: "",
          date: "",
          description: "",
        });
      } else {
        console.error("Failed to update resource");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="yourName">Your Name:</label>
        <input
          type="text"
          id="yourName"
          name="yourName"
          value={eventInput.yourName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="eventTitle">Event Title:</label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          value={eventInput.eventTitle}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={eventInput.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={eventInput.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default Input;
