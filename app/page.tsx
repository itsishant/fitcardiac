"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeartDiseaseStats from "@/components/HeartDiseaseStats";
import Features from "@/components/Features";
import HighlightsScroll from "@/components/HighlightsScroll";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent body scroll during splash
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!showSplash && (
        <>
          <Header />
          <main className="min-h-screen">
            <Hero />
            <HeartDiseaseStats />
            <Features />
            <div id="why-choose-section">
              <WhyChoose />
            </div>
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
