import React from 'react';
import devfestOrlando from "../assets/2023/DevFest-2023-Logo.Central-Florida.png";

const Orlando = () => (
    <article className='bg-purple-900 text-white p-20 h-screen flex place-items-center'>
       <a href="https://orlando.devfestflorida.com/">
          <img src={devfestOrlando} className="p-4 sm:p-0" alt="DevFest Orlando Logo" />
          <h2 className='text-white text-center font-semibold animate-pulse'>October 14th, 2023</h2>
        </a>
    </article>
);

export default Orlando;