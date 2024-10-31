'use client';

import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import APropos from "@/app/components/APropos";
import Timeline from "@/app/components/Timeline";
import Skills from "@/app/components/Skills";
import Projet from "@/app/components/Projet";
import Footer from "@/app/components/Footer";
// import { Main, Timeline, Expertise, Projet, Navigation, Footer, FadeIn } from "./components";
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
        { <APropos />}
        { <Skills /> }
        { <Timeline /> }
        { <Projet /> }
      { <Footer /> }
    </div>
  );
}

export default App;