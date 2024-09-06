import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
}

export default LandingPage;
