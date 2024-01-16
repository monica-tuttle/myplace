// Card.js
import React from "react";

const Card = ({ imageSrc, title, description }) => (
  <div className="max-w-lg overflow-hidden rounded shadow-lg">
    <img className="w-full" src={imageSrc} alt={title} />
    <div>
      <div className="text-xl font-bold">{title}</div>
      <p className="text-base text-gray-700">{description}</p>
    </div>
    <div className="bg-gray-100">
      <button className="font-bold text-white bg-purple-500 rounded hover:bg-purple-700">
        Click Me
      </button>
    </div>
  </div>
);

export default Card;

