import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Carrieres from './pages/Carrieres';

function App() {
  return (
    <div className="min-h-screen bg-dark text-foreground relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/carrieres" element={<Carrieres />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
