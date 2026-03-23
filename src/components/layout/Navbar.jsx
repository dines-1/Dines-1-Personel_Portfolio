import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { href: "#about", label: "About", icon: "fa-user" },
    { href: "#education", label: "Education", icon: "fa-graduation-cap" },
    { href: "#skills", label: "Skills", icon: "fa-layer-group" },
    { href: "#projects", label: "Projects", icon: "fa-folder-open" },
    { href: "#contact", label: "Contact", icon: "fa-paper-plane" }
  ];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
      scrolled ? 'bg-bg/90 backdrop-blur-lg border-b border-sky/10' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-sky flex items-center gap-2">
          <i className="fas fa-code text-green"></i>
          &lt;YourName /&gt;
        </a>
        <ul className="hidden md:flex gap-8">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="text-muted text-sm flex items-center gap-2 hover:text-sky transition-colors">
                <i className={`fas ${item.icon} text-xs`}></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;