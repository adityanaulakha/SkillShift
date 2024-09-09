import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Footer from "../../components/Footer";
import Reviews from "./Reviews";
import MainContent from "./MainContent";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Reviews />
      <MainContent />
      <Footer />
    </div>
  );
}

export default LandingPage;
