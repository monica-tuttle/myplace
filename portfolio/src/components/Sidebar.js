import React from "react";
import ReactSidebar from "react-sidebar";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  return (
    <ReactSidebar
      sidebar={
        <div className="p-5 bg-green-100 text-center h-screen lg: hidden">
          <ul>
            <li>
              <Image
                src="/images/profile_pic.jpeg"
                alt="profile picture"
                width={200}
                height={150}
              />
            </li>
            <Link href="/">MONICA TUTTLE</Link>
            <li>
              <Link href="projects">PROJECTS</Link>
              <ul>
                <li>Connect Four</li>
                <li>Pothole Patrol</li>
                <li>Swipe-n-Hire</li>
                <li>Data Viz in R</li>
                <li>Time Series Forecasting in Python</li>
                <li>Refuge Restrooms</li>
                <li>Data Storytelling in Tableau</li>
              </ul>
            </li>
            <li>
              <Link href="about">ABOUT</Link>
            </li>
            <li>
              <Link href="contact">CONTACT</Link>
            </li>
          </ul>
          <div className="w-1/2 grid grid-cols-3">
            <Image
              src="/images/gitlab-logo-600.svg"
              alt="GitLab Logo"
              width={55}
              height={50}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 block m-auto"
            >
              <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z" />
            </svg>
            <Image
              src="/images/github-mark.png"
              alt="GitHub Logo"
              width={40}
              height={25}
            />
          </div>
        </div>
      }
      docked={true}
    >
      <div></div>
    </ReactSidebar>
  );
}

export default Sidebar;
