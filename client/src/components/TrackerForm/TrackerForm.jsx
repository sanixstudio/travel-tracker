import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const TrackerForm = ({ onAddTracker, setFormIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!title || !description || !rating) {
      alert("Please fill in all fields");
      return;
    }

    // Create tracker object
    const tracker = {
      title,
      description,
      rating,
    };

    // Call onAddTracker function with tracker object
    // onAddTracker(tracker);

    // Reset form
    setTitle("");
    setDescription("");
    setRating("");
  };

  return (
    <form className="tracker-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">-- Select rating --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="tracker-form-btn">
        <button className="btn" type="submit">
          Add Tracker
        </button>
        <button
          className="btn"
          type="submit"
          onClick={() => setFormIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

// TrackerForm.propTypes = {
//   onAddTracker: PropTypes.func.isRequired,
// };

export default TrackerForm;
