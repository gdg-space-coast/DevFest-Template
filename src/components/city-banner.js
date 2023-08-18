import React from 'react';
import { FaGlobe, FaLinkedin, FaMeetup, FaTwitter } from 'react-icons/fa';


const CityBanner = ({ src, alt, date, url, color = "bg-black", gdgWebsite, twitter, linkedIn, meetup, chapterName }) => (
    <article className={`${color} text-white flex flex-row md:flex-col place-items-center justify-center p-1 md:p-5 lg:p-20 h-1/3 sm:h-screen sm:w-1/3 grow`}>
        <a href={url}>
            <img src={src} className="p-6 md:p-2 lg:p-5" alt={alt} />
            <h2 className='text-white text-center font-semibold w-100'>{date}</h2>
        </a>

        <ul className='hidden md:flex flex-row space-y-0 space-x-4 text-xl my-4 w-100 place-items-center justify-center'>
            <li className='m-0'>
                <a href={gdgWebsite} aria-label={`GDG ${chapterName} Website`}><FaGlobe /></a>
            </li>
            <li className='m-0'>
                <a href={'https://twitter.com/' + twitter} aria-label={`Follow GDG ${chapterName} on Twitter`}><FaTwitter /></a>
            </li>
            <li className='m-0'>
                <a href={linkedIn} aria-label={`Follow GDG ${chapterName} on LinkedIn`}><FaLinkedin /></a>
            </li>
            <li className='m-0'>
                <a href={meetup} aria-label={`Follow GDG ${chapterName} on Meetup`}><FaMeetup /></a>
            </li>
        </ul>
    </article>
);

export default CityBanner;