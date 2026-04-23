import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Shield, DollarSign, TrendingUp, Globe } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "One-on-One Classes",
    desc: "Every student receives full, undivided attention. No group distractions — just a direct, personal bond between teacher and student.",
    stat: "100%",
    statLabel: "personalized",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "US, Canada, UK, and worldwide friendly. Schedule your classes at a time that works for your family's lifestyle.",
    stat: "24/7",
    statLabel: "availability",
  },
  {
    icon: Shield,
    title: "Verified Male & Female Teachers",
    desc: "All teachers are thoroughly background-checked, certified, and experienced. Female teachers available for sisters.",
    stat: "50+",
    statLabel: "certified teachers",
  },
  {
    icon: DollarSign,
    title: "Affordable Plans",
    desc: "Transparent, competitive pricing with no hidden fees. Flexible monthly plans that fit every family's budget.",
    stat: "3+",
    statLabel: "flexible plans",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    desc: "Regular assessments and detailed monthly progress reports shared with parents — so you always know how your child is growing.",
    stat: "Monthly",
    statLabel: "reports",
  },
  {
    icon: Globe,
    title: "Global Community",
    desc: "Join thousands of Muslim families across the world who have chosen Noor Academy as their trusted Islamic learning partner.",
    stat: "30+",
    statLabel: "countries",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" ref={ref} className="py-28 lg:py-36 bg-ivory relative overflow-hidden">
      {/* Large Arabic text watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] text-gold/[0.025] font-serif leading-none select-none pointer-events-none pr-4 hidden lg:block">
        نور
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Why Noor Academy
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-juniper mt-4 mb-5 tracking-[-0.01em]">
            Learning That Honors{" "}
            <span className="italic text-gold">Your Trust</span>
          </h2>
          <p className="font-sans text-base text-juniper/55 leading-relaxed">
            We don't just teach — we build a relationship of respect, patience, and spiritual growth that lasts a lifetime.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-gold/8 rounded-2xl p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-400"
            >
              {/* Gold accent top line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-warm-cream border border-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <r.icon size={20} className="text-gold" />
              </div>

              <h3 className="font-sans text-base font-semibold text-juniper mb-3">{r.title}</h3>
              <p className="font-sans text-sm text-juniper/55 leading-relaxed mb-6">{r.desc}</p>

              {/* Stat */}
              <div className="flex items-baseline gap-1.5 pt-4 border-t border-gold/8">
                <span className="font-serif text-2xl font-semibold text-gold">{r.stat}</span>
                <span className="font-sans text-xs text-juniper/40 uppercase tracking-wider">{r.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1E2D24 0%, #2D4035 60%, #1E2D24 100%)" }}
        >
          <div className="px-10 py-12 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">Our Promise</p>
              <h3 className="font-serif text-3xl lg:text-4xl font-light text-ivory leading-tight">
                If you're not satisfied with your first class,{" "}
                <span className="italic text-gold">it's completely free.</span>
              </h3>
            </div>
            <button
              onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="flex-shrink-0 font-sans font-semibold text-juniper bg-gold hover:bg-gold-light px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl whitespace-nowrap focus-gold text-sm"
            >
              Claim Your Free Class
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}