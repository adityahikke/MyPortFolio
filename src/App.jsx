import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-grid-pattern min-h-screen text-light relative overflow-hidden">
      {/* Ambient Interactive Particle Filament Canvas */}
      <BackgroundCanvas />

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Cinematic Footer */}
      <Footer />
    </div>
  );
}
