import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}

export default LandingPage;
