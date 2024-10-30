'use client';

import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import AboutMe from "@/app/components/AboutMe";
import Timeline from "@/app/components/Timeline";
import Skills from "@/app/components/Skills";
import Project from "@/app/components/Project";
import Footer from "@/app/components/Footer";
// import { Main, Timeline, Expertise, Project, Navigation, Footer, FadeIn } from "./components";
// import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark' : 'light'}`}>
      { <Navigation parentToChild={{ mode }} modeChange={handleModeChange} /> }
        { <Main /> }
        { <AboutMe />}
        { <Skills /> }
        { <Timeline /> }
        { <Project /> }
      { <Footer /> }
    </div>
  );
}

export default App;