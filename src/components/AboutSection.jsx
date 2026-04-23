import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Heart } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Authentic Curriculum",
    desc: "Teaching from the Quran and Sunnah with a structured, syllabus-driven approach."
  },
  {
    icon: GraduationCap,
    title: "Qualified Scholars",
    desc: "Certified Hafiz and Islamic studies teachers with years of teaching experience."
  },
  {
    icon: Heart,
    title: "Personal Connection",
    desc: "One-on-one sessions built on trust, patience, and a deep love for learning."
  }
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function AboutSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 bg-ivory relative overflow-hidden">
      {/* Background geometric accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <polygon points="150,10 290,220 10,220" stroke="#B38B3F" strokeWidth="2" fill="none" />
          <polygon points="150,40 265,210 35,210" stroke="#B38B3F" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=700&h=500&fit=crop"
                  alt="Quran study session"
                  className="w-full h-80 lg:h-[480px] object-cover"
                />
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-ivory">
                <img
                  src="https://images.unsplash.com/photo-1585936369609-a2dbb77b7a21?w=200&h=200&fit=crop"
                  alt="Quran close-up"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold accent line */}
              <div className="absolute -left-4 top-12 bottom-12 w-0.5 bg-gradient-to-b from-transparent via-gold to-transparent" />
            </div>

            {/* Arabic calligraphy accent */}
            <div className="absolute -top-6 -left-6 text-7xl text-gold/10 font-serif pointer-events-none select-none">
              ﷺ
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
                About RewayaEdu
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-juniper mt-4 mb-6 leading-tight tracking-[-0.01em]">
                A Sanctuary of{" "}
                <span className="italic text-gold">Sacred</span> Learning
              </h2>
              <p className="font-sans text-base lg:text-lg text-juniper/60 leading-[1.8] mb-8">
                RewayaEdu was founded with one sacred mission: to make authentic Quranic and Islamic education accessible to every Muslim family, wherever they are in the world. We believe the light of the Quran should illuminate every home.
              </p>
              <p className="font-sans text-base text-juniper/60 leading-[1.8] mb-10">
                Our teachers are carefully vetted Hafiz and Alima graduates, fluent in Arabic and English, trained in the art of Tajweed, and passionate about nurturing lifelong learners with patience and wisdom.
              </p>
            </motion.div>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-warm-cream border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <p.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-juniper mb-1">{p.title}</h3>
                    <p className="font-sans text-sm text-juniper/55 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-12 pt-8 border-t border-gold/10"
            >
              {[["2,000+", "Students Taught"], ["50+", "Expert Teachers"], ["98%", "Satisfaction Rate"]].map(([num, label]) => (
                <div key={label}>
                  <p className="font-serif text-3xl font-semibold text-gold leading-none">{num}</p>
                  <p className="font-sans text-xs text-juniper/50 mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}