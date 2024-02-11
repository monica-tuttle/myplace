'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";

export default function Menu() {
  return (
    <main>
      <nav className="w-full md:w-64 md:h-screen absolute bg-green-200">
        <ul className="w-full ml-3 mt-2 md:m-auto grid grid-cols-2 md:grid-cols-1 text-left md:text-center">
          <li className="mt-3 mb-4">MONICA TUTTLE</li>
          <li className="text-right mr-5 md:hidden">
              <Dropdown />
          </li>
          <li>
            <Image
              src="/images/profile_pic.jpeg"
              alt="profile picture"
              width={150}
              height={100}
              className="m-auto mb-5 hidden md:block rounded-md"
            />
          </li>
          <li className="mt-1 hidden md:block">
            <Link href="projects" className="hover:text-purple-600">
              PROJECTS
            </Link>
            <ul className="mx-12 my-4 text-left list-disc">
              <li>  Protective Services</li>
              <li>  211 Reporting</li>
              <li>  Recruitment App</li>
              <li>  Pothole Reporting</li>
              <li>  Connect Four</li>
              <li>  Refuge Restrooms</li>
              <li>  Employee Attrition</li>
              <li>  Inflation Forecasting</li>
            </ul>
          </li>
          <li className="hidden md:block">
            <Link href="about" className="hover:text-purple-600">ABOUT</Link>
          </li>
          <li className="mt-1 hidden md:block">
            <Link href="contact" className="hover:text-purple-600">CONTACT</Link>
          </li>
        </ul>
        <div className="m-auto w-2/3 grid grid-cols-3">
          <button>
            <Link href="https://gitlab.com/monica.tuttle16" target="_blank">
              <Image
                src="/images/gitlab-logo-600.svg"
                alt="GitLab Logo"
                width={55}
                height={50}
                className="mt-0.5 hidden md:block"
              />
            </Link>
          </button>
          <button className="w-8 h-8 mx-2 mt-3 hidden md:block">
            <Link
              href="https://www.linkedin.com/in/monica-tuttle/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z" />
              </svg>
            </Link>
          </button>
          <button className="mt-0.5 ml-0.5 hidden md:block">
            <Link
              href="https://github.com/monica-tuttle/coding_portfolio"
              target="_blank"
            >
              <Image
                src="/images/github-mark.png"
                alt="GitHub Logo"
                width={30}
                height={25}
              />
            </Link>
          </button>
        </div>
      </nav>
    </main>
  );
}
