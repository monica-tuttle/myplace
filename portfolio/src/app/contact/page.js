"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Contact() {
  return (
    <>
    <main className="bg-green-50">
      <Sidebar />
      <div className="w-1/2 m-auto">
        <h2 className="text-center">Contact Me</h2>
    
        <form className="bg-green-50 grid grid-cols-1 text-center h-screen">
          <label htmlFor="name">Name:</label>
          <input className="bg-green-500" type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input className="bg-green-500" type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea className="bg-green-500" id="message" name="message" required></textarea>

          <button className="bg-purple-500 hover:bg-purple-200 cursor-pointer" type="submit">Submit</button>
        </form>
      </div>
      </main>
    </>
  );
}

export default Contact;
