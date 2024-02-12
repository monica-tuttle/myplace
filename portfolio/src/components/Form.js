"use client";
import { useState } from 'react';

export default function Form() {

  // Sample form data
const initialFormData = {
  name: "",
  email: "",
  message: "",
};

// useState Hook being used here to handle change in state between initial form data to updated form data
const [formData, setFormData] = useState(initialFormData)
function onSubmit(Data) {
  console.log(Data);
}

// Function to handle form submission
function onSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  console.log(formData); // Log form data to the console
}

 // Function to handle input changes and update form data state
 function handleInputChange(event) {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
}

  return (
    <form className="m-auto md:ml-80 md:pr-32 w-3/4 grid text-lg" onSubmit={onSubmit}>
      <h2 className="text-center pt-24 md:pt-20 text-lg">Contact Me</h2>
      <label htmlFor="name">Name:</label>
      <input
        className="bg-green-200 p-2 rounded md text-lg mt-3 mb-3"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        
      />
      <label htmlFor="email">Email:</label>
      <input
        className="bg-green-200 p-2 rounded md text-lg mt-3 mb-3"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        className="bg-green-200 p-2 rounded md text-lg mt-3 mb-3"
        id="message"
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="bg-purple-500 p-4 hover:bg-purple-200 cursor-pointer rounded md text-lg mt-10 mb-3"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
