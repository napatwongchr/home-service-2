import React from 'react';
import Nav from '../components/HomePage/Nav';
import Footer from '../components/HomePage/Footer';
import CopyRight from '../components/HomePage/CopyRight';
import BannerService from '../components/ServiceList/BannerService'
import SearchSection from '../components/ServiceList/SearchComponent';
import AllServiceSection from '../components/ServiceList/AllServiceSection'
const ServiceList = () => {
    return (
        <section className='serviceListPage'>
            <Nav />
            <BannerService />
            <SearchSection />
            <AllServiceSection />
            <Footer />
            <CopyRight />
        </section>

    )
}

export default ServiceList