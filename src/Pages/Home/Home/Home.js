import React from 'react';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import About from '../About/About';
import Social from '../Social/Social';
import Services from '../Services/Services';
import Client from '../Client/Client';
import ContactForm from '../Contact/Contact';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <About></About>
            <Social></Social>
            <Services></Services>
            <Client></Client>
            <Contact></Contact>
        </div>
    );
};

export default Home;