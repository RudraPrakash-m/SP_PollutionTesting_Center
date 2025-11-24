import React from "react";

import HeroSection from "../components/main_components/HeroSection";
import AboutSection from "../components/main_components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import InfiniteCardSlider from "../components/main_components/CardSlider";
import ContactSection from "../components/main_components/ContactSection";
import FooterSection from "../components/main_components/FooterSection";
import ContactInfo from "../components/main_components/ContactInfo";

const Home = ({ heroRef, aboutRef, servicesRef, sliderRef, contactRef, contactInfoRef }) => {
  // CardSlider data
  const cardsData = [
    {
      title: "Two-Wheeler Pollution Testing",
      description: "Fast and certified testing for bikes and scooters.",
      image: "/Two-Wheeler.jpeg",
    },
    {
      title: "Four-Wheeler Testing",
      description: "Reliable emission tests for cars, jeeps, and vans.",
      image: "/four-wheeler.png",
    },
    {
      title: "Heavy Vehicle Testing",
      description: "Trucks, buses, and tractors – all tested with accuracy.",
      image: "/heavy-vehicle.jpeg",
    },
    {
      title: "PUC Certificate Printing",
      description: "Get your official PUC certificate printed instantly.",
      image: "/puc-certificate.png",
    },
  ];

  return (
    <div>
      <HeroSection refProp={heroRef} />
      <AboutSection refProp={aboutRef} />
      <ServicesSection refProp={servicesRef} />
      <div ref={sliderRef}>
        <InfiniteCardSlider cards={cardsData} />
      </div>
      <ContactSection refProp={contactRef} />
      <ContactInfo refProp={contactInfoRef}/>
      <FooterSection />
    </div>
  );
};

export default Home;
