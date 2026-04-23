import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Quran Reading (Nazra)",
    desc: "Learn to read the Quran correctly with proper pronunciation and fluency. Perfect for beginners and adults.",
    duration: "4-12 weeks",
    level: "Beginner to Advanced"
  },
  {
    icon: Award,
    title: "Tajweed",
    desc: "Master the art of reciting Quran with proper Tajweed rules. Improve your Makhraj and performance.",
    duration: "8-16 weeks",
    level: "Intermediate to Advanced"
  },
  {
    icon: Users,
    title: "Hifz Program",
    desc: "Memorize the entire Quran with expert guidance. Structured lessons with daily practice and assessment.",
    duration: "1-3 years",
    level: "All Levels"
  },
  {
    icon: Clock,
    title: "Islamic Studies",
    desc: "Deep dive into Islamic knowledge, history, and practices. Build a strong foundation in Islamic education.",
    duration: "Ongoing",
    level: "All Ages"
  },
];

export default function CoursesSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="courses"
      ref={ref}
      className="py-28 lg:py-36 relative overflow-hidden transition-colors duration-700"
      style={{ background: "linear-gradient(180deg, #F0F5F2 0%, #E8F0EB 100%)" }}
    >
      {/* Decorative blur */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A853 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Our Programs
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-juniper mt-4 mb-6 tracking-[-0.01em]">
            Choose Your <span className="italic text-gold">Learning Path</span>
          </h2>
          <p className="font-sans text-base text-juniper/60 max-w-2xl mx-auto leading-relaxed">
            From Quran reading to advanced Islamic studies, we have structured programs for every learner at every level.
          </p>
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md border border-gold/5 hover:border-gold/20 p-8 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-5 group-hover:from-gold/20 group-hover:to-gold/10 transition-colors">
                  <IconComponent size={24} className="text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-semibold text-juniper mb-3">
                  {course.title}
                </h3>
                <p className="font-sans text-sm text-juniper/60 leading-relaxed mb-6 flex-grow">
                  {course.desc}
                </p>

                {/* Meta */}
                <div className="space-y-2 pt-4 border-t border-gold/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-juniper/50">Duration:</span>
                    <span className="text-gold font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-juniper/50">Level:</span>
                    <span className="text-gold font-medium">{course.level}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full py-2.5 px-4 rounded-lg font-sans text-sm font-medium text-white bg-gold hover:bg-gold-light transition-all duration-200">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-sm text-juniper/60 mb-6">
            Not sure which course is right for you? Book a free trial class!
          </p>
          <button className="inline-block px-8 py-3 rounded-full font-sans font-medium text-white bg-gold hover:bg-gold-light transition-all duration-200 shadow-md hover:shadow-lg">
            Schedule Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}