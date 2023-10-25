import React from "react";
import "../Landing.css";

import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";

import Resume from "../Resume";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title text-7xl text-center py-8 pt-14">
        About Me<span className="dot">.</span>
      </h1>
      <p className="about-desc text-center px-32 pb-12">
        Typically, I'm a creature of routine, you could say predictable. But
        hidden beneath the everyday patterns is a spirit yearning for
        spontaneity and adventure. Wanna get an understanding to a week in my
        life?
      </p>
      <div className="container mx-auto w-4/5">
        <div className="flex flex-wrap justify-center text-xl">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8 text-center">
            <FreeBreakfastIcon className="icon mb-3 mx-auto" />
            <p className="text-4xl digit">14</p>
            <p className="icon-desc py-3">Iced Macchiato</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8 text-center">
            <LocalDiningIcon className="icon mb-3 mx-auto" />
            <p className="text-4xl digit">08</p>
            <p className="icon-desc py-3">Skipped Meals</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8 text-center">
            <LibraryMusicIcon className="icon mb-3 mx-auto" />
            <p className="text-4xl digit">379</p>
            <p className="icon-desc py-3">Songs Listened To</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8 text-center">
            <ImportContactsIcon className="icon mb-3 mx-auto" />
            <p className="text-4xl digit">23</p>
            <p className="icon-desc py-3">Hours Reading</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8 text-center">
            <DirectionsWalkIcon className="icon mb-3 mx-auto" />
            <p className="text-4xl digit">32</p>
            <p className="icon-desc py-3">Kilometers Walked</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="py-4 pl-20 w-2/4 text-justify">
          <h3 className="text-4xl pb-3 sub">Me in a Nutshell</h3>
          <p className="text-2xl pb-5 sub-p">
            In a nutshell, I'm a Web Developer, a Machine Learning and
            Artificial Intelligence enthusiast, and a Digital Explorer. With a
            passion for coding and a curiosity for the latest tech trends, I'm
            on a mission to create seamless online experiences and push the
            boundaries of what's possible. Let's embark on this exciting journey
            together!
          </p>
        </div>
        <div>
          <Resume/>
        </div>
      </div>
    </div>
  );
};

export default About;
