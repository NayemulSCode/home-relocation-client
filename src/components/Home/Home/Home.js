import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blog/Blogs';
import Contact from '../Contact/Contact';
import ExtraServices from '../ExtraServices/ExtraServices';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <ExtraServices />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;