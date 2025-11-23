import React from 'react';
import { MapPin, Mail, Linkedin, ChevronDown, Code, Layout, GitBranch, Terminal } from 'lucide-react';
import ChatWidget from './components/ChatWidget';
import { EXPERIENCE, PROFILE, SKILLS, SOCIALS } from './constants';
import { Skill } from './types';

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-primary text-textMain selection:bg-accent/30 selection:text-accent font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-md border-b border-white/5 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HR.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-textMuted">
            <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0">Contact</button>
          </div>
          <a 
            href={SOCIALS.find(s => s.platform === 'LinkedIn')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold transition-all"
          >
            Let's Connect
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Hi, I'm {PROFILE.name}.
              </h1>
              <h2 className="text-2xl md:text-4xl text-textMuted font-light mb-8">
                {PROFILE.title} specializing in <span className="text-indigo-400">Android</span> & <span className="text-accent">Flutter</span>.
              </h2>
              <p className="text-lg text-textMuted max-w-2xl leading-relaxed mb-10">
                Building scalable, high-performance mobile applications with a focus on clean architecture (MVVM/MVC) and seamless user experiences using Dart and Kotlin.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3.5 bg-accent text-slate-900 rounded-full font-semibold hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
                >
                  Get in touch
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="px-8 py-3.5 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all cursor-pointer"
                >
                  View Experience
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <ChevronDown size={24} />
          </div>
        </section>

        {/* About Summary */}
        <section id="about" className="scroll-mt-24 py-20 bg-secondary/30">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">About Me</h3>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Combining technical expertise with product vision.</h2>
                <div className="flex items-start gap-4 mb-6">
                   <MapPin className="text-textMuted mt-1" size={20}/>
                   <div>
                      <h4 className="text-white font-medium">Based in</h4>
                      <p className="text-textMuted">{PROFILE.location}</p>
                   </div>
                </div>
              </div>
              <div>
                <p className="text-textMuted leading-relaxed text-lg">
                  {PROFILE.about}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24 py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-12 text-center">Experience</h3>
            
            <div className="space-y-12">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="group relative pl-8 md:pl-0">
                  {/* Timeline Line */}
                  <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-slate-700 md:-translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-[50%] top-0 w-2.5 h-2.5 rounded-full bg-accent md:-translate-x-[5px] ring-4 ring-primary z-10"></div>

                  <div className={`md:flex justify-between items-start gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 mb-2 md:mb-0">
                      <div className={`text-textMuted text-sm font-mono mb-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        {job.period} • {job.duration}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <div className={`bg-secondary p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors shadow-sm ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                        <h4 className="text-xl font-bold text-white mb-1">{job.role}</h4>
                        <div className="text-accent font-medium mb-2">{job.company}</div>
                        <div className="text-xs text-textMuted mb-4 flex items-center gap-1">
                          <MapPin size={12} /> {job.location}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24 py-24 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-12 text-center">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard 
                title="Mobile Development" 
                icon={<Code className="text-emerald-400" />} 
                skills={SKILLS.filter(s => s.category === 'Mobile')} 
              />
              <SkillCard 
                title="Core Languages" 
                icon={<Terminal className="text-orange-400" />} 
                skills={SKILLS.filter(s => s.category === 'Core')} 
              />
              <SkillCard 
                title="Architecture" 
                icon={<Layout className="text-blue-400" />} 
                skills={SKILLS.filter(s => s.category === 'Architecture')} 
              />
              <SkillCard 
                title="Tools & VC" 
                icon={<GitBranch className="text-purple-400" />} 
                skills={SKILLS.filter(s => s.category === 'Tools')} 
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's work together.</h2>
            <p className="text-textMuted text-lg mb-10 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:-translate-y-1 transition-all border border-slate-700"
              >
                <Mail className="text-accent" />
                <div className="text-left">
                  <div className="text-xs text-textMuted">Email me at</div>
                  <div className="text-white font-medium">{PROFILE.email}</div>
                </div>
              </a>
              
              <a 
                href={SOCIALS.find(s => s.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#0077b5] rounded-xl hover:bg-[#006396] hover:-translate-y-1 transition-all text-white"
              >
                <Linkedin fill="white" className="stroke-none" />
                <div className="text-left">
                  <div className="text-xs text-white/80">Connect on</div>
                  <div className="font-medium">LinkedIn</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800 text-center text-textMuted text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
};

const SkillCard: React.FC<{ title: string, icon: React.ReactNode, skills: Skill[] }> = ({ title, icon, skills }) => (
  <div className="bg-secondary p-6 rounded-2xl border border-slate-700/50 hover:border-accent/30 transition-all hover:shadow-lg group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="font-bold text-white">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill.name} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-xs font-medium border border-slate-700">
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

export default App;