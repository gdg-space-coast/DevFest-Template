import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import devfestOrlando from "./assets/2023/DevFest-2023-Logo.Central-Florida.png";
import devfestMiami from "./assets/2023/DevFest-2023-Logo.Miami.png";
import devfestTampa from "./assets/2023/DevFest-2023-Logo.Tampa.png";
import CityBanner from './components/city-banner.js';

function App() {
  return (
    <Router>
      <CityBanner color="bg-purple-900" url="https://orlando.devfestflorida.com" alt="DevFest Central Florida" src={devfestOrlando} date="October 14th, 2023" gdgWebsite="https://gdg.community.dev/gdg-central-florida/" twitter="GDGCentralFL" linkedIn="https://www.linkedin.com/company/google-developers-group-central-florida/" meetup="https://www.meetup.com/gdg-central-florida/" chapterName="Central Florida" />
      <CityBanner color="bg-emerald-800" url="https://tampa.devfestflorida.com" alt="DevFest Tampa" src={devfestTampa} date="October 21st, 2023" gdgWebsite="https://gdg.community.dev/gdg-tampa-bay/" twitter="GDGSuncoast" linkedIn="https://www.linkedin.com/company/gdgsuncoast/" meetup="https://www.meetup.com/gdgtampabay/" chapterName="Tampa" />
      
      <CityBanner color="bg-pink-600" url="https://miami.devfestflorida.com" alt="DevFest Miami" src={devfestMiami} date="December 9th, 2023" gdgWebsite="https://gdg.community.dev/gdg-miami/" twitter="GDGMiami" linkedIn="https://www.linkedin.com/company/gdg-miami/" meetup="https://www.meetup.com/gdgmiami/" chapterName="Miami" />
    </Router>
  );
}

export default App;
