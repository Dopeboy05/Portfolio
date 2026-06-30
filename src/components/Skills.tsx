const Skills = () => {
  const skills = [
    "HTML & CSS",
    "Front-End Development", 
    "Figma Design",
    "UI/UX Design",
    "JavaScript",
    "React",
    "Python",
    "Linux",
    "Responsive Web Design",
    "AI Tools Integration",
    "Event Management",
    "Creative Problem Solving",
    "Self-Driven Learning"
  ];

  const projects = [
     {
       title: "MotionForge",
       date: "2025",
       platform: "TypeScript / Node.js",
       description: "Production-grade programmatic video generation engine that renders on CPU — no Chromium needed. Streams frames straight to ffmpeg, runs headless on $5 VPS or Raspberry Pi. Physics animations, full drawing API, TrueType text rendering, exports MP4/WebM/GIF.",
       link: "https://github.com/Dopeboy05/MotionForge"
    },
    {
      title: "DevQuest",
      date: "2025",
      platform: "React / Vercel / PostgreSQL",
      description: "Narrative coding game teaching Linux terminal and HTML/CSS through story-driven levels. 80 levels, 4 difficulty tiers, server-authoritative XP system, JWT auth, live leaderboards.",
      link: "https://github.com/Dopeboy05/DevQuest"
    },
    {
      title: "Coffee Ordering App",
      date: "2024",
      platform: "Figma Design",
      description: "A clean, intuitive mobile UI designed in Figma that makes ordering coffee smooth and effortless. Built with a focus on user flow, minimal clutter, and delightful visuals — perfect for on-the-go coffee lovers.",
      link: "https://www.figma.com/community/file/1521235418415357703/coffee-ordering-app"
    },
    {
      title: "Kindergarten Website",
      date: "2024",
      platform: "HTML & CSS",
      description: "A colorful and cheerful website built using pure HTML and CSS, designed for a fictional kindergarten school. Features playful visuals, easy navigation, and a welcoming layout reflecting the fun of early childhood education.",
      link: "https://dopeboy05.github.io/KinderGarten/"
    },
    {
      title: "Pet Adoption Website",
      date: "2024",
      platform: "Figma Design",
      description: "A heartwarming and vibrant pet adoption site designed in Figma. Focuses on clean navigation, emotional visuals, and friendly UI to connect users with adoptable pets. Reflects love for animals and user-first design.",
      link: "https://www.figma.com/community/file/1521237622070346506"
    }
  ];

  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-8 border-b-8 border-neo-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills Section */}
          <div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative mb-12">
              SKILLS
              <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-neo-yellow border-4 border-neo-black px-4 py-3 text-center font-bold hover:bg-neo-pink hover:-translate-y-1 transition-all cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights Section */}
          <div>
            <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative mb-12">
              PROJECTS
              <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
            </h2>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-neo-white border-5 border-neo-black p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo transition-all relative group"
                >
                  <div className="absolute -top-2 -right-2 bg-neo-yellow px-4 py-1 border-3 border-neo-black font-bold text-sm">
                    {project.date}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm font-semibold text-neo-orange mb-3">{project.platform}</p>
                  <p className="text-base leading-relaxed mb-4">{project.description}</p>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-neo-black text-white font-bold border-3 border-neo-black hover:bg-neo-orange hover:-translate-y-1 transition-all text-sm"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
