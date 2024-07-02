import React from "react";
import { FaGlobe, FaLinkedin, FaMeetup, FaTwitter } from "react-icons/fa";

const CityBanner = ({
  alt,
  date,
  url,
  color = "bg-black",
  location,
  gdgWebsite,
  twitter,
  linkedIn,
  meetup,
  chapterName,
  id,
  children,
}) => (
  <article
    id={id}
    className={`${color} text-black flex flex-col place-items-center justify-start px-6 md:px-7 2xl:px-8 pt-8 md:pt-4 lg:pt-8 2xl:pt-64   grow w-100 xl:w-1/3`}
  >
    <h1 class="border-8 p-8 border-current rounded-full center">{alt}</h1>
    <h2 class="text-center font-semibold w-100  center">
      {location && (location = <p>{location}</p>)}
      <p>{date}</p>
    </h2>

    <ul className="flex flex-row space-y-0 space-x-4 text-xl my-4 w-100 place-items-center justify-center">
      <li className="m-0">{`${chapterName}`}</li>
      <li className="m-0">
        <a href={gdgWebsite} aria-label={`GDG ${chapterName} Website`}>
          <FaGlobe />
        </a>
      </li>
      <li className="m-0">
        <a
          href={"https://twitter.com/" + twitter}
          aria-label={`Follow GDG ${chapterName} on Twitter`}
        >
          <FaTwitter />
        </a>
      </li>
      <li className="m-0">
        <a href={linkedIn} aria-label={`Follow GDG ${chapterName} on LinkedIn`}>
          <FaLinkedin />
        </a>
      </li>
      <li className="m-0">
        <a href={meetup} aria-label={`Follow GDG ${chapterName} on Meetup`}>
          <FaMeetup />
        </a>
      </li>
    </ul>
    {children}
  </article>
);

export default CityBanner;
