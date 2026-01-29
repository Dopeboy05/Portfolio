const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 bg-neo-black text-neo-white text-center">
      <p className="font-bold text-lg mb-4">
        © {new Date().getFullYear()} Supriya Soumya Ranjan
      </p>
      <a 
        href="https://dopeboy05.github.io/Portfolio/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-neo-orange text-white font-mono font-bold border-3 border-white hover:bg-white hover:text-neo-black hover:-translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all"
      >
        View My Previous Portfolio
      </a>
    </footer>
  );
};

export default Footer;
