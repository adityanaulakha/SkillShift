import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import MainContent from "../components/MainContent";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <MainContent />
      <Reviews />
      <Footer />
    </div>
  );
}

export default LandingPage;
