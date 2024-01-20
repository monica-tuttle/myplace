// Card.js
import React from "react";
import Image from "next/image";

const Card = ({ imageSrc, title, description }) => (
  <div className="w-full p-2 flex flex-wrap rounded shadow-lg">
    <Image
      className="w-full h-60"
      src={imageSrc}
      width={200}
      height={200}
      alt={title}
    />
    <button className="bg-green-100 hover:bg-green-300 hover:text-purple-600 w-full mt-1 rounded">
      <div className="m-auto p-2">
        <div className="text-xl text-center font-bold">{title}</div>
        <p className="text-base text-center text-gray-700">{description}</p>
      </div>
    </button>
    <div className="m-auto"></div>
  </div>
);
export default Card;
