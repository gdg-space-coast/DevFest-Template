import React from "react";
import { FaGlobe, FaLinkedin, FaMeetup, FaTwitter } from "react-icons/fa";
import devfestFlorida2024 from "../assets/2024/devfest-florida-2024.svg";
import gdg from "../assets/2024/gdg.svg";
import CityBanner from "../components/city-banner.js";

const Home = () => (
  <main class="flex flex-col h-screen max-h-screen">
    <section class="flex flex-row h-32 justify-center">
      <img src={gdg} alt="Google Developer Groups" class="w-1/4" />
      <img src={devfestFlorida2024} alt="DevFest Florida 2024" class="w-1/4" />
    </section>
    <section class="flex flex-col xl:flex-row grow">
      <CityBanner
        id="orlando"
        color="bg-sky-400"
        alt="DevFest CFL"
        location="Seminole State College, Sanford/Lake Mary Campus"
        date="September 28th, 2024"
        gdgWebsite="https://gdg.community.dev/gdg-central-florida/"
        twitter="GDGCentralFL"
        linkedIn="https://www.linkedin.com/company/google-developers-group-central-florida/"
        meetup="https://www.meetup.com/gdg-central-florida/"
        chapterName="Central Florida"
      >
        <ul className="flex flex-row space-y-0 space-x-4 text-xl my-4 w-100 place-items-center justify-center">
          <li className="m-0">Space Coast</li>
          <li className="m-0">
            <a
              href="https://gdg.community.dev/gdg-space-coast/"
              aria-label={`GDG Space Coast Website`}
            >
              <FaGlobe />
            </a>
          </li>
          <li className="m-0">
            <a
              href={"https://www.twitter.com/gdgspacecoast"}
              aria-label={`Follow GDG Space Coast on Twitter`}
            >
              <FaTwitter />
            </a>
          </li>
          <li className="m-0">
            <a
              href="https://www.linkedin.com/company/gdgspacecoast/"
              aria-label={`Follow GDG Space Coast on LinkedIn`}
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="m-0">
            <a
              href="https://www.meetup.com/gdg-space-coast/"
              aria-label={`Follow GDG Space Coast on Meetup`}
            >
              <FaMeetup />
            </a>
          </li>
        </ul>
        <a
          href="https://sessionize.com/devfest-florida-orlando-2024"
          target="_blank"
          rel="noreferrer"
        >
          <span class="bg-sky-100 text-sky-800 text-2xl font-large me-2 px-2.5 py-0.5 rounded-full dark:bg-sky-900 dark:text-sky-300">
            Call for Speakers Open!
          </span>
        </a>
        <ul className="flex flex-row space-y-0 space-x-4 text-xl my-4 w-100 place-items-center justify-center">
          <li className="m-0">
            <a href="https://2023-orlando.devfestflorida.com/">
              DevFest CFL 2023
            </a>
          </li>
        </ul>
      </CityBanner>

      <CityBanner
        id="tampa"
        color="bg-green-400"
        url="https://2023-tampa.devfestflorida.com"
        alt="DevFest Tampa"
        date="TBD"
        gdgWebsite="https://gdg.community.dev/gdg-tampa-bay/"
        twitter="GDGSuncoast"
        linkedIn="https://www.linkedin.com/company/gdgsuncoast/"
        meetup="https://www.meetup.com/gdgtampabay/"
        chapterName="Tampa"
      >
        <ul className="flex flex-row space-y-0 space-x-4 text-xl my-4 w-100 place-items-center justify-center">
          <li className="m-0">
            <a href="https://2023-tampa.devfestflorida.com/">
              DevFest Tampa 2023
            </a>
          </li>
        </ul>
      </CityBanner>
      <CityBanner
        id="miami"
        color="bg-rose-400"
        url="https://2023-miami.devfestflorida.com"
        alt="DevFest Miami"
        date="TBD"
        gdgWebsite="https://gdg.community.dev/gdg-miami/"
        twitter="GDGMiami"
        linkedIn="https://www.linkedin.com/company/gdg-miami/"
        meetup="https://www.meetup.com/gdgmiami/"
        chapterName="Miami"
      >
        <ul className="flex flex-row space-y-0 space-x-4 text-xl my-4 w-100 place-items-center justify-center">
          <li className="m-0">
            <a href="https://2023-miami.devfestflorida.com/">
              DevFest Miami 2023
            </a>
            <li className="m-0">
              <a href="https://2022.devfestflorida.com/">DevFest Miami 2022</a>
            </li>
          </li>
        </ul>
      </CityBanner>
    </section>
  </main>
);

export default Home;
