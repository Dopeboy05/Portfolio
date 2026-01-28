const About = () => {
  const aboutPoints = [
    "Currently pursuing BTech in Computer Science from Gurukul Kangri Vishwavidyalaya, Haridwar. Always been curious about how technology works and how design can make digital experiences more intuitive and enjoyable.",
    "Main focus is front-end development. I enjoy building user-friendly interfaces using HTML and CSS, and often use Figma to prototype and plan out designs visually.",
    "I'm a self-driven learner who regularly takes on small personal or academic projects to experiment with ideas, improve skills, and better understand the latest in web design trends.",
    "One of my long-term goals is to become a game developer. Fascinated by how interactive experiences are created and how storytelling, design, and logic come together in games.",
    "Outside of academics and coding, I enjoy discovering new creative ideas, exploring portfolio designs for inspiration, and staying updated with the latest innovations in tech and design."
  ];

  const hobbies = [
    {
      emoji: "📺",
      title: "Anime & Web Series",
      description: "Love watching shows with deep storytelling, unique visuals, or thought-provoking plots. It helps me unwind and inspires creativity."
    },
    {
      emoji: "✈️",
      title: "Traveling",
      description: "Enjoy discovering new places, cultures, and cuisines. Whether it's a short local trip or a long journey, it opens up my perspective."
    },
    {
      emoji: "🎮",
      title: "Video Games",
      description: "Playing both casual and immersive games. They spark my interest in game design and user experience."
    },
    {
      emoji: "🏸",
      title: "Badminton",
      description: "Occasionally play badminton. While I'm still a beginner, it's a great way to stay active and have fun."
    },
    {
      emoji: "🎨",
      title: "Creative Tools",
      description: "Like exploring new creative tools and apps—visual design, photo editing, or small digital experiments."
    }
  ];

  return (
    <section id="about" className="w-full py-20 px-4 sm:px-8 border-b-8 border-neo-black">
      <div className="max-w-7xl mx-auto">
        
        {/* About Me Section */}
        <div className="mb-20">
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative mb-12">
            ABOUT ME
            <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-neo-white border-4 border-neo-black p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-[40px] h-[40px] bg-neo-blue border-3 border-neo-black flex items-center justify-center font-mono font-bold text-xl">
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative mb-12">
            HOBBIES & INTERESTS
            <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div 
                key={index}
                className="bg-neo-yellow border-4 border-neo-black p-6 hover:bg-neo-pink hover:-translate-y-2 hover:shadow-neo-lg transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {hobby.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
                <p className="text-base leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
