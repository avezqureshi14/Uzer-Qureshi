import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero-section relative">
        <div className="overlay absolute  z-0 bg-gradient-to-t from-gray-900 to-gray-600 opacity-75"></div>

        <div className="hero-text absolute z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold miniH text-white">
            Hey I'm Uzer Qureshi
          </h1>
          <p className="text-base md:text-lg mt-4 md:mt-6 miniF text-white w-11/12 md:w-10/12  tracking-wide">
            A Computer Science Enthusiasts, Web Developer and Open Source
            Contributor
          </p>
          <NavLink style={{ marginTop: "2rem" }} to="/about">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-transparent border border-white-500 text-white hover:bg-white hover:text-black font-bold rounded-lg transition cursor-pointer duration-300">
              Know More About Me
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Hero;
