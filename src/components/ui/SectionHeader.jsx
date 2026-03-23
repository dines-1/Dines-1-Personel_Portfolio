import Reveal from './Reveal';

const SectionHeader = ({ number, title, icon = "fa-circle-dot" }) => {
  return (
    <Reveal>
      <div className="w-11 h-0.5 bg-gradient-to-r from-sky to-green rounded-full mb-2"></div>
      <p className="font-mono text-xs text-sky tracking-[0.12em] uppercase mb-2 flex items-center gap-2">
        <i className={`fas ${icon} text-xs text-green`}></i>
        {number} — {title}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 md:mb-12">
        {title}
      </h2>
    </Reveal>
  );
};

export default SectionHeader;