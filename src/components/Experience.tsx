import { Briefcase, Calendar, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Esports Event Host",
      title: "Annual Techfest Organizer",
      date: "March 2025",
      description: "Hosted an esports event at Gurukul Kangri Vishwavidyalaya during the annual techfest. Responsible for planning, organizing, and managing the event, which featured games like BGMI, Valorant, Free Fire, and Call of Duty: Mobile. Developed leadership, communication, and event coordination skills.",
    },
    {
      id: 2,
      role: "Academic Projects",
      title: "Web Development & Design",
      date: "2024 - Present",
      description: "Completed several academic and personal projects demonstrating interest in web design and development. Each project builds practical experience and improves understanding of front-end technologies, including HTML, CSS, and Figma prototyping.",
    },
    {
      id: 3,
      role: "AI-Enhanced Workflow",
      title: "Creative Process Optimization",
      date: "Ongoing",
      description: "Effectively use AI tools throughout the creative process to enhance workflow stability and improve productivity. From brainstorming design ideas to streamlining repetitive tasks and refining outputs, AI helps work more efficiently and deliver better results.",
    }
  ];

  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-8 border-b-8 border-neo-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative">
            EXPERIENCE
            <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-neo-white border-5 border-neo-black p-8 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-lg transition-all relative group"
            >
              <div className="absolute -top-2 -right-2 bg-neo-yellow px-4 py-1 border-3 border-neo-black font-bold text-sm">
                {exp.date}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-gray-700">{exp.title}</h4>
                <p className="text-base leading-relaxed pt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase tracking-tight border-b-6 border-neo-black inline-block pb-2 relative mb-12">
            EDUCATION
            <span className="absolute bottom-0 left-0 w-2/5 h-1.5 bg-neo-orange"></span>
          </h2>
          
          <div className="bg-neo-white border-5 border-neo-black p-8">
            <h3 className="text-2xl font-bold mb-2">B.Tech Computer Science & Engineering</h3>
            <p className="text-lg font-medium text-gray-700">Gurukul Kangri Vishwavidyalaya, Haridwar</p>
            <p className="text-base text-gray-600 mt-1">2022-2026 (Expected)</p>
            <p className="text-base mt-3">Focusing on Full Stack Development & UI/UX Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
