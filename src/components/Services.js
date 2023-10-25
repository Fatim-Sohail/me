import React from "react";
import reactLogo from "../assets/logos/react.svg";
import django from "../assets/logos/django.svg";
import bootstrap from "../assets/logos/bootstrap.svg";
import express from "../assets/logos/express.svg";
import figma from "../assets/logos/figma.svg";
import tailwind from "../assets/logos/tailwind.svg";
import redux from "../assets/logos/redux.svg";
import vite from "../assets/logos/vitejs.svg";
import node from "../assets/logos/nodejs.svg";
import js from "../assets/logos/javascript.svg";
import mongodb from "../assets/logos/mongodb.svg";
import pytorch from "../assets/logos/pytorch.svg";
import arrow from "../assets/down-arrow.svg";

const Services = () => {
  return (
    <div>
      <h1 className="about-title text-7xl text-center pb-3 pt-7">
        My Services<span className="dot">.</span>
      </h1>
      <div className="container mx-auto xl:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 justify-center items-center">
          <img src={js} alt="Javascript" className="w-28 h-28 mx-auto" />
          <img src={reactLogo} alt="React" className="w-32 h-32 mx-auto" />
          <img src={bootstrap} alt="Bootstrap" className="w-32 h-32 mx-auto" />
          <img src={express} alt="Express" className="w-32 h-32 mx-auto" />
          <img src={django} alt="Django" className="w-32 h-32 mx-auto" />
          <img src={mongodb} alt="Mongodb" className="w-32  mx-auto" />
          <img src={node} alt="Node.js" className="w-32 h-32 mx-auto" />
          <img src={tailwind} alt="Tailwind CSS" className="w-32 h-32 mx-auto"/>
          <img src={figma} alt="Figma" className="w-32 h-32 mx-auto" />
          <img src={vite} alt="Vite" className="w-32 h-32 mx-auto" />
          <img src={redux} alt="Redux" className="w-32 h-32 mx-auto" />
          <img src={pytorch} alt="PyTotch" className="w-32 h-32 mx-auto" />
        </div>
      </div>
      {/* <img src={arrow} alt="arrow" className="w-24 h-24 mx-auto hover:opacity-80"></img> */}
    </div>
  );
};

export default Services;
