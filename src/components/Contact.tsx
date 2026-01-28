import { Mail, Phone, Github, Figma } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-4 sm:px-8 border-b-8 border-neo-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative">
            CONTACT
            <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a href="tel:+919937457073" className="group bg-neo-white border-4 border-neo-black p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all flex items-center gap-4">
            <div className="min-w-[60px] h-[60px] flex items-center justify-center text-3xl bg-neo-blue border-3 border-neo-black">
              📞
            </div>
            <div>
              <div className="font-bold text-sm">Phone</div>
              <div className="text-sm">+91-9937457073</div>
            </div>
          </a>

          <a href="mailto:code.junkie.5402@gmail.com" className="group bg-neo-white border-4 border-neo-black p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all flex items-center gap-4">
            <div className="min-w-[60px] h-[60px] flex items-center justify-center text-3xl bg-neo-blue border-3 border-neo-black">
              📧
            </div>
            <div>
              <div className="font-bold text-sm">Email</div>
              <div className="text-xs break-all">code.junkie.5402@gmail.com</div>
            </div>
          </a>

          <a href="https://github.com/DopeBoy05" target="_blank" rel="noreferrer" className="group bg-neo-white border-4 border-neo-black p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all flex items-center gap-4">
            <div className="min-w-[60px] h-[60px] flex items-center justify-center text-3xl bg-neo-blue border-3 border-neo-black">
              🔗
            </div>
            <div>
              <div className="font-bold text-sm">GitHub</div>
              <div className="text-sm">github.com/DopeBoy05</div>
            </div>
          </a>

          <a href="https://figma.com/@DopeBoy" target="_blank" rel="noreferrer" className="group bg-neo-white border-4 border-neo-black p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all flex items-center gap-4">
            <div className="min-w-[60px] h-[60px] flex items-center justify-center text-3xl bg-neo-blue border-3 border-neo-black">
              🎨
            </div>
            <div>
              <div className="font-bold text-sm">Figma</div>
              <div className="text-sm">figma.com/@DopeBoy</div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
