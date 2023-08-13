import React from 'react';

const CityBanner = ({src, alt, date, url, color="bg-black" }) => (
    <article className={`${color} text-white flex place-items-center p-1 md:p-5 lg:p-20 h-1/3 sm:h-screen sm:w-1/3`}>
       <a href={url}>
          <img src={src} className="p-0 md:p-2 lg:p-5" alt={alt} />
          <h2 className='text-white text-center font-semibold'>{date}</h2>
        </a>
    </article>
);

export default CityBanner;