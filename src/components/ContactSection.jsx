import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageCircle } from "lucide-react";

const interests = ["Quran Reading (Nazra)", "Tajweed", "Hifz Program", "Islamic Studies", "All Courses"];

export default function ContactSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", age: "", interest: "", message: ""
  });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field, val) => setForm(f => ({ ...f, [field]: val }));

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#1E2D24" }}
    >
      {/* Geometric bg accent */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,5 115,90 5,90" stroke="#B38B3F" strokeWidth="1" fill="none" />
              <circle cx="60" cy="60" r="40" stroke="#B38B3F" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Begin Today
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ivory mt-4 mb-5 tracking-[-0.01em]">
            Start Your{" "}
            <span className="italic text-gold">Journey</span> Today
          </h2>
          <p className="font-sans text-base text-ivory/50 max-w-lg mx-auto leading-relaxed">
            Fill in the form below and we'll get in touch within 24 hours to schedule your free trial class.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-0">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-0 sm:gap-8">
                <InputField
                  label="Full Name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(v) => handleChange("name", v)}
                  required
                />
                <InputField
                  label="Email Address"
                  placeholder="you@example.com"
                  type="email"
                  value={form.email}
                  onChange={(v) => handleChange("email", v)}
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-0 sm:gap-8">
                <InputField
                  label="WhatsApp / Phone"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(v) => handleChange("phone", v)}
                />
                <InputField
                  label="Student's Age"
                  placeholder="e.g. 8 years old"
                  value={form.age}
                  onChange={(v) => handleChange("age", v)}
                />
              </div>

              {/* Course interest */}
              <div className="py-8 border-b border-ivory/10">
                <label className="font-sans text-xs uppercase tracking-[0.15em] text-ivory/40 block mb-5">
                  Course of Interest
                </label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((int) => (
                    <button
                      key={int}
                      type="button"
                      onClick={() => handleChange("interest", int)}
                      className={`font-sans text-sm px-5 py-2.5 rounded-full border transition-all duration-200 focus-gold ${
                        form.interest === int
                          ? "bg-gold text-white border-gold shadow-md"
                          : "border-ivory/15 text-ivory/60 hover:border-gold/50 hover:text-ivory"
                      }`}
                    >
                      {int}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="py-8 border-b border-ivory/10">
                <label className="font-sans text-xs uppercase tracking-[0.15em] text-ivory/40 block mb-4">
                  Message (Optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your learning goals or any questions..."
                  rows={4}
                  className="w-full bg-transparent text-ivory placeholder:text-ivory/25 font-sans text-base resize-none outline-none focus:text-ivory leading-relaxed"
                />
              </div>

              {/* Submit */}
              <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 font-sans font-semibold text-juniper bg-gold hover:bg-gold-light px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 focus-gold text-base"
                >
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  Book Free Trial Now
                </button>
                <div className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-gold" />
                  <a
                    href="https://wa.me/1234567890?text=Assalamu%20Alaikum!%20I%20am%20interested%20in%20joining%20Noor%20Academy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-ivory/50 hover:text-gold transition-colors focus-gold rounded"
                  >
                    Or message us on WhatsApp
                  </a>
                </div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-gold" />
              </div>
              <h3 className="font-serif text-3xl text-ivory mb-4">JazakAllahu Khayran!</h3>
              <p className="font-sans text-base text-ivory/55 max-w-md mx-auto leading-relaxed">
                Your request has been received. Our team will contact you within 24 hours, insha'Allah, to schedule your free trial class.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 pt-10 border-t border-ivory/8 flex flex-wrap justify-center gap-8"
        >
          {[
            "✦ No commitment required",
            "✦ First class completely free",
            "✦ 24-hour response guarantee",
            "✦ Cancel anytime"
          ].map((t) => (
            <span key={t} className="font-sans text-xs text-ivory/30 tracking-wide">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function InputField({ label, placeholder, type = "text", value, onChange, required }) {
  return (
    <div className="py-8 border-b border-ivory/10">
      <label className="font-sans text-xs uppercase tracking-[0.15em] text-ivory/40 block mb-4">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent text-ivory placeholder:text-ivory/25 font-sans text-lg outline-none focus:text-ivory transition-colors"
      />
    </div>
  );
}