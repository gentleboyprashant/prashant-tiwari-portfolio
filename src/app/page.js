'use client';
import React, { useState } from 'react';

// --- SVG Icon Components ---
// Yahan hum saare icons rakhenge

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

// Mobile Menu ke liye Icons
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);


// --- Main Page Component ---
export default function PortfolioPage() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- AAPKI SAARI JAANKARI YAHAN HAI ---
  // Aapko kuch bhi badalna ho to bas yahan badlein, poori website apne aap update ho jayegi!
  const portfolioData = {
    name: "Prashant Tiwari",
    headline: "AI & Machine Learning Engineer crafting intelligent solutions from data.",
    phone: "7317214802",
    email: "prashanttiwari7318@gmail.com",
    linkedin: "https://linkedin.com/in/prashant-tiwari-a54315303",
    github: "https://github.com/gentleboyprashant",
    about: "I am a final-year Computer Science student with a passion for building intelligent systems that solve real-world problems. From developing AI-powered financial literacy tools on IBM Cloud to engineering spam detection algorithms, I thrive on turning complex data into functional, impactful applications. I am driven by continuous learning and am currently deepening my expertise in Generative AI and MLOps.",
    projects: [
      {
        title: "AI Agent for Digital Financial Literacy",
        description: "An IBM Cloud-deployed conversational agent designed to make financial education accessible and secure.",
        stack: ["IBM Watson Assistant", "IBM Cloud", "RAG Principles", "NLP"],
        githubUrl: "https://github.com/gentleboyprashant",
        imageUrl: "https://placehold.co/1200x600/0071e3/FFFFFF?text=AI+Financial+Agent"
      },
      {
        title: "Spam Message Detector System",
        description: "A machine learning model that classifies text messages with high accuracy to combat spam.",
        stack: ["Python", "Scikit-Learn", "Pandas", "NLP"],
        githubUrl: "https://github.com/gentleboyprashant/spam-message-detector",
        imageUrl: "https://placehold.co/1200x600/FFFFFF/1d1d1f?text=Spam+Detector"
      },
      {
        title: "Automated Student Attendance System",
        description: "A desktop application for tracking and managing student attendance in real-time.",
        stack: ["Python", "SQL", "Tkinter", "DBMS"],
        githubUrl: "https://github.com/gentleboyprashant",
        imageUrl: "https://placehold.co/1200x600/6e6e73/FFFFFF?text=Attendance+System"
      }
    ],
    skills: {
      "Languages": ["Python", "C++", "SQL", "C", "R"],
      "AI / ML": ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "NLP", "Scikit-Learn", "Pandas", "NumPy"],
      "Cloud & Tools": ["IBM Cloud", "IBM Watson", "Git", "VS Code", "DBMS"]
    }
  };


  return (
    <div className="bg-[#121212] text-[#F5F5F7] font-sans">
      
      {/* --- Header & Navigation --- */}
      <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight text-white">Prashant Tiwari</a>
          <div className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
            <a href="#resume" className="text-gray-300 hover:text-white">Resume</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-white">
                <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center md:hidden">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white">
                <CloseIcon />
            </button>
            <a onClick={() => setIsMenuOpen(false)} href="#projects" className="text-3xl font-bold text-gray-300 hover:text-white mb-8">Projects</a>
            <a onClick={() => setIsMenuOpen(false)} href="#skills" className="text-3xl font-bold text-gray-300 hover:text-white mb-8">Skills</a>
            <a onClick={() => setIsMenuOpen(false)} href="#resume" className="text-3xl font-bold text-gray-300 hover:text-white mb-8">Resume</a>
            <a onClick={() => setIsMenuOpen(false)} href="#contact" className="text-3xl font-bold text-gray-300 hover:text-white">Contact</a>
        </div>
      )}


      <main>
        
        {/* --- Hero Section --- */}
        <section className="relative h-screen flex items-end justify-center text-center px-6 overflow-hidden pb-24 sm:pb-32">
          
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
             <img 
                src="/prashant.jpg" 
                alt="Prashant Tiwari" 
                className="object-cover w-full h-full grayscale"
             />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent z-10"></div>
          
          <div className="relative z-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
              {portfolioData.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {portfolioData.headline}
            </p>
            <a 
              href="#projects"
              className="bg-[#0071e3] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#0077ed] transition-colors"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="bg-[#1d1d1f] py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
            <div className="space-y-16">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <img src={project.imageUrl} alt={project.title} className="rounded-2xl shadow-2xl w-full" />
                  </div>
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-semibold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors">
                      View Code on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">My Expertise & Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(portfolioData.skills).map(([category, skillsList]) => (
                        <div key={category} className="bg-[#1d1d1f] p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-white">{category}</h3>
                            <ul className="space-y-2">
                                {skillsList.map((skill, i) => (
                                    <li key={i} className="text-gray-300 text-lg">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- Resume Section --- */}
        <section id="resume" className="bg-[#1d1d1f] py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">My Resume</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              For a more detailed look at my qualifications and experience, please feel free to download a copy of my full resume.
            </p>
            <a 
              href="/Prashant-Tiwari-Resume.pdf"
              download
              className="bg-[#0071e3] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#0077ed] transition-colors"
            >
              Download Resume (PDF)
            </a>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <footer id="contact" className="bg-black text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s build something amazing.</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">I&apos;m currently seeking AI Engineering and Data Science roles. If you have an exciting opportunity or just want to connect, my inbox is always open.</p>
            
            <div className="flex justify-center items-center space-x-6">
              <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-white transition-colors" title="Email"><MailIcon /></a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn"><LinkedinIcon /></a>
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub"><GithubIcon /></a>
              <a href={`tel:${portfolioData.phone}`} className="text-gray-400 hover:text-white transition-colors" title="Phone"><PhoneIcon /></a>
            </div>
            <p className="mt-12 text-gray-600 text-sm">&copy; {new Date().getFullYear()} Prashant Tiwari. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}

