import React from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import VisionSection from './components/VisionSection';
import MissionSection from './components/MissionSection';
import ProgramsSection from './components/ProgramsSection';
import ContactSection from './components/ContactsSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  const learnMore = () => {
    document.getElementById("vision").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Header learnMore={learnMore} />
      <VisionSection />
      <MissionSection />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
