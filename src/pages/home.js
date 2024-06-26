import React from "react";
import devfestOrlando from "../assets/2023/DevFest-2023-Logo.Central-Florida.png";
import devfestMiami from "../assets/2023/DevFest-2023-Logo.Miami.png";
import devfestTampa from "../assets/2023/DevFest-2023-Logo.Tampa.png";
import devfestFlorida2024 from "../assets/2024/devfest-florida-2024.svg";
import CityBanner from "../components/city-banner.js";

const Home = () => (
  <div>
    <img
      id="sticky-parallax-header"
      src={devfestFlorida2024}
      alt="DevFest Florida 2024"
    />
    <main class="flex flex-col">
      <div>
        <CityBanner
          id="orlando"
          color="bg-sky-400"
          url="https://2023-orlando.devfestflorida.com"
          alt="DevFest Central Florida"
          src={devfestOrlando}
          date="October 14th, 2023"
          gdgWebsite="https://gdg.community.dev/gdg-central-florida/"
          twitter="GDGCentralFL"
          linkedIn="https://www.linkedin.com/company/google-developers-group-central-florida/"
          meetup="https://www.meetup.com/gdg-central-florida/"
          chapterName="Central Florida"
        />
      </div>
      <div class="flex flex-row h-screen">
        <CityBanner
          id="tampa"
          color="bg-green-400"
          url="https://2023-tampa.devfestflorida.com"
          alt="DevFest Tampa"
          src={devfestTampa}
          date="October 21st, 2023"
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
          src={devfestMiami}
          date="December 9th, 2023"
          gdgWebsite="https://gdg.community.dev/gdg-miami/"
          twitter="GDGMiami"
          linkedIn="https://www.linkedin.com/company/gdg-miami/"
          meetup="https://www.meetup.com/gdgmiami/"
          chapterName="Miami"
        />
      </div>
    </main>
  </div>
);

export default Home;
