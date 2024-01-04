import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center items-center mt-12">
        <div className="browse_pro">
          <Search />
          <Cards />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
