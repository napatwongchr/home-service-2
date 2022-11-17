import React from "react";
import Banner from "../components/HomePage/BannerSection";
import Nav from "../components/HomePage/Nav";
import RecommendServiceSection from "../components/HomePage/RecommendServiceSection";
import ContactSection from "../components/HomePage/ContactSection";
import Footer from "../components/HomePage/Footer";
import CopyRight from "../components/HomePage/CopyRight";

const HomePage = () => {
  return (
    <section className="homePage">
      <Nav />
      <Banner />
      <RecommendServiceSection />
      <ContactSection />
      <Footer />
      <CopyRight />
    </section>
  );
};

export default HomePage;
