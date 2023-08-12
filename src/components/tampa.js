import React from 'react';
import devfestTampa from "../assets/2023/DevFest-2023-Logo.Tampa.png";

const Tampa = () => (
    <article className='bg-emerald-800 text-white p-20 h-screen flex place-items-center'>
       <a href="https://tampa.devfestflorida.com/">
          <img src={devfestTampa} className="p-4 sm:p-0" alt="DevFest Tampa Logo" />
          <h2 className='text-white text-center font-semibold animate-pulse'>October 21st, 2023</h2>
        </a>
    </article>
);

export default Tampa;