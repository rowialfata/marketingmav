import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Consultation } from './pages/Consultation';

function App() {
  const location = useLocation();
  const isConsultationPage = location.pathname === '/consultation';

  return (
    <>
      {!isConsultationPage && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
      {!isConsultationPage && <Footer />}
    </>
  );
}

export default App;