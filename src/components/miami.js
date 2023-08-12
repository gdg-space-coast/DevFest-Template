import React from 'react';
import devfestMiami from "../assets/2023/DevFest-2023-Logo.Miami.png";

const Miami = () => (
    <article className='bg-pink-600 text-white p-20 h-screen flex place-items-center'>
       <a href="https://miami.devfestflorida.com/">
          <img src={devfestMiami} className="p-4 sm:p-0" alt="DevFest Miami Logo" />
          <h2 className='text-white text-center font-semibold animate-pulse'>December 9th, 2023</h2>
        </a>
    </article>
);

export default Miami;