"use client";
import Menu from "@/components/Menu";
import React from "react";

function Contact() {
  return (
    <div className="bg-green-50">
      <main className="bg-green-50 grid grid-flow-col w-3/4">
        <Menu />
        <div>
          <h2 className="text-center mt-16 mb-10 text-lg">Contact Me</h2>

          <form className="grid grid-cols-1 mt-4 text-lg">
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
        </div>
      </main>
    </div>
  );
}

export default Contact;
