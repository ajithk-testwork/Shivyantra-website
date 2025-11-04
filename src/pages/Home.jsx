import React, { useState, useEffect } from "react";
import HomeSlider from "../components/HomeSlider";
import CategorySlider from "../components/CategorySlider";
import api from "../Utilis/api";
import Loading from "../components/Loading";
import Collection from "../components/Collection";
import OurBlog from "../components/OurBlogs";
import FAQSection from "../components/FAQSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutRudraksha from "../components/AboutRudraksha ";
import RudrakshaConsultation from "../components/RudrakshaConsultation ";
import Testimonial from "../components/Testimonial";

const Home = () => {

  return (
    <>
      <HomeSlider  />
      <CategorySlider/>
      <AboutRudraksha/>
      <Collection/>
      <RudrakshaConsultation/>
      <OurBlog/>
      <WhyChooseUs/>
      <FAQSection/>
      <Testimonial/>
    </>
  );
};

export default Home;
