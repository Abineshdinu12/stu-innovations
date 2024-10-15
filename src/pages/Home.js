import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import MediaPlayer from '../components/MediaPlayer';
import Maps from '../components/Maps';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            
            <MediaPlayer />
            <Maps/>
            
            <Footer />
        </>

    )
}

export default Home;

