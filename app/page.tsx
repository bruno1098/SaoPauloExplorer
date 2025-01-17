"use client";

import { useState } from 'react';
import MapExperience from './components/Map/MapExperience';
import Hero from './components/Landing/Hero';
import About from './components/Landing/About';
import Features from './components/Landing/Features';
import Technologies from './components/Landing/Technologies';
import HowItWorks from './components/Landing/HowItWorks';
import Stats from './components/Landing/Stats';
import Testimonials from './components/Landing/Testimonials';
import Newsletter from './components/Landing/Newsletter';

export default function Home() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <MapExperience />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Hero onStart={() => setStarted(true)} />
      <About />
      <Stats />
      <Features />
      <Technologies />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </main>
  );
}