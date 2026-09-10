import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import OneDayTourSlider from "@/components/OneDayTourSlider/OneDayTourSlider";
import PopularTours from "@/components/PopularTours/PopularTours";
import TaxiServiceIntro from "@/components/TaxiServiceIntro/TaxiServiceIntro";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/TourSearch/TourSearch";
import VideoOne from "@/components/VideoOne/VideoOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Thar Vibe Holidays | Rajasthan Tour & Travel Agency">
      <MainSlider />
      <TourSearch />
      <DestinationsOne />
      <AboutOne />
      <PopularTours />
      <VideoOne />
      {/* <BrandOne /> */}
      <TaxiServiceIntro/>
      <OneDayTourSlider/>
     
    
      <WhyChoose />
      {/* <NewsOne /> */}
        {/* <GalleryOne /> */}
         <TestimonialOne />
    </Layout>
  );
};

export default Home;
