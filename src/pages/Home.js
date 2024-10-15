import React from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

import Services from "../components/Services";
import MediaPlayer from "../components/MediaPlayer";
import Maps from "../components/Maps";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <MediaPlayer />
      <Maps />

      <Footer />
    </>
  );
};

export default Home;
