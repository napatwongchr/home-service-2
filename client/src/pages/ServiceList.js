import React, { useState } from 'react';
import Nav from '../components/HomePage/Nav';
import Footer from '../components/HomePage/Footer';
import CopyRight from '../components/HomePage/CopyRight';
import BannerService from '../components/ServiceList/BannerService'
import SearchSection from '../components/ServiceList/SearchComponent';
import AllServiceSection from '../components/ServiceList/AllServiceSection'
const ServiceList = () => {

    const [input, setInput] = useState("");
    const [category, setCategory] = useState('บริการทั้งหมด');
    const [order, setOrder] = useState('บริการแนะนำ')
    const [sliderValue, setSliderValue] = useState([0, 2000]);
    return (
        <section className='serviceListPage'>
            <Nav />
            <BannerService />
            <SearchSection input={input} setInput={setInput} category={category} setCategory={setCategory} order={order} setOrder={setOrder} sliderValue={sliderValue} setSliderValue={setSliderValue} />
            <AllServiceSection input={input} category={category} order={order} sliderValue={sliderValue} />
            <Footer />
            <CopyRight />
        </section>

    )
}

export default ServiceList