import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { href: "#about", label: "About", icon: "fa-user" },
    { href: "#education", label: "Education", icon: "fa-graduation-cap" },
    { href: "#skills", label: "Skills", icon: "fa-layer-group" },
    { href: "#projects", label: "Projects", icon: "fa-folder-open" },
    { href: "#contact", label: "Contact", icon: "fa-paper-plane" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-lg border-b border-sky/10' : 'bg-transparent'
      }`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-sky flex items-center gap-2">
          <img 
            src="./public/gibly.png" 
            alt="Dinesh Kadel" 
            className="w-8 h-8 rounded-full object-cover border border-sky/20"
          />
          <span className="text-text">Dinesh Kadel</span>
        </a>

        <div className="flex items-center gap-6">
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

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-bg2 border border-sky/10 text-sky hover:bg-card transition-colors flex items-center justify-center w-9 h-9"
            aria-label="Toggle theme"
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;