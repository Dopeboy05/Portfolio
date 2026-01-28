import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neo-gray p-4 sm:p-8">
      <div className="max-w-[1400px] mx-auto bg-neo-white border-8 border-neo-black shadow-neo-double relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #E0E0E0 25%, transparent 25%),
              linear-gradient(-45deg, #E0E0E0 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #E0E0E0 75%),
              linear-gradient(-45deg, transparent 75%, #E0E0E0 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        />
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
