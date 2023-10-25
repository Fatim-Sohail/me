import React from "react";

import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="title flex">
        <div className="py-32 pl-24 pr-5">
          {/* <h1 className='text-5xl pb-8 font-sans'><span className='web text-6xl'>HELLO,</span> <span className='web  text-6xl'>W</span>eb <span className='web text-6xl'>W</span>anderers!</h1> */}
          <h1 className="text-5xl pb-8 font-sans">
            HELLO, <span className="web">Web Wanderes!</span>
          </h1>
          <p className="text-6xl py-5 pb-10">
            I'm <strong>Fatima Sohail</strong>
          </p>
          {/* <p className="text-xl para  text-justify">
            Welcome to my digital playground! I'm{" "}
            <span className="name">Fatima Sohail Shaukat</span>, your guide
            through the ever-evolving world of web development. As a
            professional in web development and with a deep interest in machine
            learning and artificial intelligence, I'm here to unravel the
            magic of pixels and code, turning your digital aspirations into
            captivating realities. Step into a journey where innovation knows no
            bounds.
          </p> */}
          <p className="text-2xl para text-justify">
           I'm{" "}
            <span className="name">Fatima Sohail Shaukat</span>, a professional
            in Web Development, with a strong passion for Machine Learning and
            Artificial Intelligence. Welcome to my digital playground! 
          </p>
          {/* <p className='text-burgundy'>Though I'm typically a creature of routine, navigating the daily grind with a dash of eccentricity, there are moments when I plunge headfirst into the thrilling unknown.</p> */}
        </div>
        <img
          src="https://i.pinimg.com/564x/68/d1/fe/68d1fec6be35a0f4ab361833c81b7d70.jpg"
          className="h-98 rounded-2xl pr-20 image"
        ></img>
      </div>
    </>
  );
};

export default Landing;

// https://i.pinimg.com/564x/68/d1/fe/68d1fec6be35a0f4ab361833c81b7d70.jpg
// https://i.pinimg.com/564x/5d/11/c7/5d11c78d98e9be5c0027042359c73c55.jpg
