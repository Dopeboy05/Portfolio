import { ArrowDownCircle, Code, Layout, Terminal } from 'lucide-react';
import profilePhoto from '/1758567672535.jpg.jpeg';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-neo-white flex flex-col justify-center overflow-hidden border-b-8 border-neo-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase">
              Supriya<br />
              Soumya<br />
              Ranjan
            </h1>
            
            <div className="inline-block bg-neo-orange text-white px-6 py-3 border-4 border-neo-black transform -rotate-2 shadow-neo-sm">
              <span className="font-bold text-xl md:text-2xl">Front-End Developer | BTech Student</span>
            </div>
            
            <div className="inline-block bg-neo-yellow px-4 py-2 border-3 border-neo-black ml-4">
              <span className="font-semibold text-lg">Aspiring Game Developer</span>
            </div>
            
            <div className="relative max-w-2xl mt-8">
              <div className="text-lg md:text-xl p-6 bg-neo-white border-4 border-neo-black">
                <p className="mb-4">
                  Welcome to my digital portfolio! Here, you'll find my projects, experiences, and interests. 
                  I focus on front-end development and creative design using HTML, CSS, and Figma.
                </p>
                <p className="font-semibold">
                  I'm a self-driven learner pursuing BTech in Computer Science from Gurukul Kangri Vishwavidyalaya, Haridwar.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element - Profile Photo */}
          <div className="relative hidden lg:block space-y-6">
            <div className="relative aspect-square bg-neo-gray border-8 border-neo-black overflow-hidden min-h-[300px]">
              <img 
                src={profilePhoto}
                alt="Supriya Soumya Ranjan"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="block w-full bg-neo-orange text-white font-bold text-lg px-6 py-4 border-4 border-neo-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all text-center uppercase tracking-wide"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
