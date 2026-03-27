const Footer = () => {
  return (
    <footer className="relative z-10 text-center py-6 px-6 border-t border-sky/10 font-mono text-xs text-muted flex items-center justify-center gap-2 flex-wrap">
      <i className="fas fa-code text-green text-xs"></i>
      Designed & built by Dinesh Kadel
      <span className="hidden sm:inline">·</span>
      <i className="fas fa-location-dot text-green text-xs"></i>
      Kathmandu, Nepal
      <span className="hidden sm:inline">·</span>
      2025
    </footer>
  );
};

export default Footer;