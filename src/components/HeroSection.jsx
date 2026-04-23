import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Globe, Star } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { delay: i * 0.13, duration: 0.85, ease: [0.22, 1, 0.36, 1] }
  })
};

const words = ["Quran", "Tajweed", "Hifz", "Islam"];

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [wordIdx, setWordIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E2D24 0%, #243328 50%, #1a2820 100%)" }}
      aria-label="Hero"
    >
      {/* Animated gold orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A853 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-32 left-10 w-56 h-56 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #5E826B 0%, transparent 70%)", filter: "blur(50px)" }} />

      {/* Cursor glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${mousePos.x}% ${mousePos.y}%, rgba(179,139,63,0.12) 0%, transparent 65%)`,
        }}
      />

      {/* Geometric SVG overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="35" stroke="#B38B3F" strokeWidth="0.6" fill="none" />
              <polygon points="50,5 95,75 5,75" stroke="#B38B3F" strokeWidth="0.4" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Large decorative Arabic calligraphy */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 pointer-events-none select-none hidden xl:flex">
        <span className="text-[22rem] font-serif text-white/[0.03] leading-none">ر</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="flex flex-col">
            {/* Tag */}
            <motion.div
              variants={FADE_UP} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-3 mb-8 self-start bg-white/8 border border-gold/25 rounded-full px-5 py-2.5 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
                Digital Hub for Islamic Learning
              </span>
            </motion.div>

            {/* Main headline with animated word */}
            <motion.h1
              variants={FADE_UP} initial="hidden" animate="visible" custom={1}
              className="font-serif text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-light text-ivory leading-[1.05] tracking-[-0.02em] mb-6"
            >
              Master{" "}
              <span className="relative inline-block">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="italic text-gold inline-block"
                >
                  {words[wordIdx]}
                </motion.span>
              </span>
              <br />
              from Home,{" "}
              <span className="text-sage-light" style={{ color: "#7EA98C" }}>Anywhere</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={FADE_UP} initial="hidden" animate="visible" custom={2}
              className="font-sans text-lg text-ivory/55 leading-relaxed max-w-lg mb-10"
            >
              One-on-one live classes with certified scholars. Structured programs for children & adults across the US, Canada, and worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={FADE_UP} initial="hidden" animate="visible" custom={3}
              className="flex flex-wrap gap-4 mb-14"
            >
              <button
                onClick={() => handleNav("#contact")}
                className="group inline-flex items-center gap-2 font-sans font-semibold text-juniper px-8 py-4 rounded-full shadow-2xl transition-all duration-300 focus-gold text-base hover:scale-105"
                style={{ background: "linear-gradient(90deg, #D4A853 0%, #B38B3F 100%)" }}
              >
                Book Free Trial Class
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNav("#courses")}
                className="group inline-flex items-center gap-2 font-sans font-medium text-ivory/80 border border-ivory/20 hover:border-gold/60 hover:text-gold px-8 py-4 rounded-full transition-all duration-300 focus-gold text-base backdrop-blur-sm"
              >
                Explore Courses
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={FADE_UP} initial="hidden" animate="visible" custom={4}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-ivory/10"
            >
              {[
                { icon: Users, val: "2,000+", label: "Students" },
                { icon: BookOpen, val: "4", label: "Programs" },
                { icon: Globe, val: "30+", label: "Countries" },
              ].map(({ icon: Icon, val, label }) => (
                <div key={label} className="flex flex-col items-start gap-1">
                  <Icon size={16} className="text-gold/70 mb-1" />
                  <span className="font-serif text-2xl font-semibold text-gold leading-none">{val}</span>
                  <span className="font-sans text-xs text-ivory/40 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image panel */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-[430px] h-[560px]">
              {/* Glowing border rings */}
              <div className="absolute -inset-4 rounded-3xl border border-gold/15 pointer-events-none" />
              <div className="absolute -inset-8 rounded-[2rem] border border-sage/10 pointer-events-none" />

              {/* Main image */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl float">
                <img
                  src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=860&h=1120&fit=crop"
                  alt="Student learning with RewayaEdu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-juniper/50 via-transparent to-transparent" />
                {/* Bottom text overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-gold text-gold" />)}
                    <span className="font-sans text-xs font-semibold text-ivory ml-1">4.9/5</span>
                  </div>
                  <p className="font-sans text-xs text-ivory/70">"Life-changing experience for our family"</p>
                </div>
              </div>

              {/* Floating stat: active students */}
              <div className="absolute -left-10 top-16 bg-white/95 backdrop-blur-sm border border-gold/20 rounded-2xl px-5 py-4 shadow-2xl float" style={{ animationDelay: "0.8s" }}>
                <p className="font-serif text-3xl font-semibold text-gold leading-none">500+</p>
                <p className="font-sans text-xs text-juniper/60 mt-1">Active Students</p>
              </div>

              {/* Floating cert badge */}
              <div className="absolute -right-8 top-32 rounded-2xl px-4 py-3 shadow-2xl float"
                style={{ animationDelay: "1.6s", background: "linear-gradient(135deg, #B38B3F 0%, #D4A853 100%)" }}>
                <p className="font-sans text-xs font-bold text-white uppercase tracking-wider">Certified</p>
                <p className="font-sans text-sm font-semibold text-white">Scholars</p>
              </div>

              {/* Live class pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-juniper border border-gold/30 rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2.5 whitespace-nowrap float" style={{ animationDelay: "2.4s" }}>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-sans text-xs text-ivory font-medium">Live classes available now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs text-ivory/20 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}