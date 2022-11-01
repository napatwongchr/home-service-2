import React from 'react';
import Banner from '../components/HomePageComponent/BannerSection';
import Nav from '../components/HomePageComponent/Nav';
import RecommendServiceSection from '../components/HomePageComponent/RecommendServiceSection';
import ContactSection from '../components/HomePageComponent/ContactSection';
import Footer from '../components/HomePageComponent/Footer';
import CopyRight from '../components/HomePageComponent/CopyRight';

const HomePage = () => {
    return (
        <section className='homePage'>
            <Nav />
            <Banner />
            <RecommendServiceSection />
            <ContactSection />
            <Footer />
            <CopyRight />
        </section>

    )
}

export default HomePage