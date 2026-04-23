import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ClipboardList, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a Free Trial",
    desc: "Choose a convenient time slot and book your first class — completely free, no commitment required. Our team will reach out within 24 hours to confirm.",
    detail: "Simple online booking • No credit card needed • Instant confirmation",
    color: "#B38B3F",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Personalized Assessment",
    desc: "Your teacher conducts a gentle assessment to understand your level, goals, and learning style. We then design a personalized learning plan just for you.",
    detail: "Level evaluation • Goal setting • Teacher matching",
    color: "#5E826B",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Begin Your Journey",
    desc: "Start your regular scheduled classes with your dedicated teacher. Progress at your pace with full support, tracking, and monthly parent updates.",
    detail: "Regular classes • Progress reports • WhatsApp updates",
    color: "#B38B3F",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-28 lg:py-36 relative overflow-hidden transition-colors duration-700"
      style={{ background: "linear-gradient(180deg, #FCFAF7 0%, #F0F5F2 60%, #E8F0EB 100%)" }}
    >
      {/* Vertical gold line decoration */}
      <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-40 w-px hidden lg:block">
        <div className="w-full h-full gold-line opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Getting Started
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-juniper mt-4 mb-5 tracking-[-0.01em]">
            Your Path to{" "}
            <span className="italic text-gold">Noor</span> in Three Steps
          </h2>
          <p className="font-sans text-base text-juniper/55 max-w-xl mx-auto leading-relaxed">
            We've made starting your Quranic education as frictionless and welcoming as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col items-center text-center transition-all duration-500 cursor-pointer`}
              onClick={() => setActiveStep(i)}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] right-0 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}

              {/* Node */}
              <div
                className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                  activeStep === i ? "scale-110 shadow-2xl" : "scale-100 shadow-md"
                }`}
                style={{
                  background: activeStep === i
                    ? `radial-gradient(circle, ${step.color} 0%, ${step.color}CC 100%)`
                    : "#FFFFFF",
                  border: `2px solid ${step.color}${activeStep === i ? "FF" : "40"}`,
                }}
              >
                {activeStep === i && (
                  <div className="absolute inset-0 rounded-full pulse-gold" />
                )}
                <step.icon
                  size={28}
                  style={{ color: activeStep === i ? "#FFFFFF" : step.color }}
                />
              </div>

              {/* Step number */}
              <span
                className="font-serif text-xs tracking-[0.3em] mb-3 font-medium"
                style={{ color: step.color }}
              >
                STEP {step.number}
              </span>

              <h3 className="font-serif text-2xl font-semibold text-juniper mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="font-sans text-sm text-juniper/60 leading-relaxed max-w-xs mx-auto mb-5">
                {step.desc}
              </p>

              {/* Detail pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {step.detail.split(" • ").map((d, di) => (
                  <span
                    key={di}
                    className="font-sans text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: step.color + "30",
                      color: step.color,
                      backgroundColor: step.color + "0D",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 font-sans font-semibold text-white bg-juniper hover:bg-juniper/90 px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus-gold text-base"
          >
            Begin Step One — Book Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}