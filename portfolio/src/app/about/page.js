"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";

function About() {
  return (
    <>
      <Sidebar />
      <div className="ml-80 mt-10 justify-end">
        <h2>About Me</h2>
        <p className="text-blue-500 mr-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque dignissim enim sit amet venenatis urna. Adipiscing elit
          pellentesque habitant morbi tristique senectus et netus. Amet volutpat
          consequat mauris nunc congue. Id interdum velit laoreet id donec
          ultrices tincidunt arcu non. Nunc sed augue lacus viverra vitae congue
          eu consequat ac. Est lorem ipsum dolor sit amet consectetur adipiscing
          elit. Morbi tristique senectus et netus et. Ipsum a arcu cursus vitae
          congue mauris rhoncus. Sed sed risus pretium quam. Neque viverra justo
          nec ultrices dui sapien eget mi. Vitae sapien pellentesque habitant
          morbi tristique. Tellus molestie nunc non blandit massa enim. Ut enim
          blandit volutpat maecenas volutpat blandit aliquam. Neque viverra
          justo nec ultrices dui sapien eget. Eros in cursus turpis massa
          tincidunt dui ut. Natoque penatibus et magnis dis parturient. Maecenas
          ultricies mi eget mauris pharetra et.
        </p>
        <button>Click me!</button>
      </div>
    </>
  );
}

export default About;
