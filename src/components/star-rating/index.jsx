import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < rating ? "#ffc107" : "#e4e5e9"}
          size={30}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
