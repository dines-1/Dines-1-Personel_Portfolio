import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-green border border-green/30 px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-green rounded-full animate-blink"></span>
            Available for internships & collaborations
          </div>
        </Reveal>
        
        <Reveal>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight mb-4">
            Your Full<br />
            <span className="gradient-text">Name Here</span>
          </h1>
        </Reveal>
        
        <Reveal>
          <p className="font-mono text-sm text-muted mb-6 flex items-center gap-2 flex-wrap">
            <i className="fas fa-terminal text-sky"></i>
            Fullstack Developer &nbsp;·&nbsp; BCA Student @ Tribhuvan University
          </p>
        </Reveal>
        
        <Reveal>
          <p className="text-muted max-w-lg mb-8 leading-relaxed">
            I build end-to-end web applications — from clean REST APIs to polished UIs.
            Crafting projects with the MERN stack, NestJS, and TypeScript from
            Dhading, Nepal.
          </p>
        </Reveal>
        
        <Reveal>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" icon="fa-rocket" href="#projects">View My Work</Button>
            <Button variant="outline" icon="fa-envelope" href="#contact">Get in Touch</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;