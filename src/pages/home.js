import React from "react";
import devfestFlorida2024 from "../assets/2024/devfest-florida-2024.svg";
import gdg from "../assets/2024/gdg.svg";
import CityBanner from "../components/city-banner.js";

const Home = () => (
  <main class="flex flex-col h-screen max-h-screen">
    <section class="flex flex-row">
      <img src={gdg} alt="Google Developer Groups" class="w-1/2" />
      <img src={devfestFlorida2024} alt="DevFest Florida 2024" class="w-1/2" />
    </section>
    <section class="flex flex-col xl:flex-row justify-items-center grow">
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
      />
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
      />
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
      />
    </section>
  </main>
);

export default Home;
