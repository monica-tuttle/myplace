"use client";
import Menu from "@/components/Menu";
import React from "react";

function Contact() {
  return (
    <div>
      <Menu />
      <main className="bg-green-50 h-screen">
        <form className="m-auto md:ml-80 md:pr-32 w-3/4 grid text-lg">
          <h2 className="text-center pt-24 md:pt-20 text-lg">Contact Me</h2>
          <label htmlFor="name">Name:</label>
          <input
            className="bg-green-200 p-2 rounded md text-lg mt-3 mb-3"
            type="text"
            id="name"
            name="name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="bg-green-200 p-2 rounded md text-lg mt-3 mb-3"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            className="bg-green-200 p-2 rounded md text-lg mt-3 mb-3"
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>
          <button
            className="bg-purple-500 p-4 hover:bg-purple-200 cursor-pointer rounded md text-lg mt-10 mb-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
