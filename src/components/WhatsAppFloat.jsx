import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const howItWorks = document.querySelector("#how-it-works");
      if (howItWorks) {
        const rect = howItWorks.getBoundingClientRect();
        setVisible(rect.bottom < window.innerHeight);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip card */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-2xl border border-gold/15 p-5 w-72 relative"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 p-1 text-juniper/30 hover:text-juniper focus-gold rounded"
                >
                  <X size={14} />
                </button>
                <div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-[#1e2d24] flex items-center justify-center overflow-hidden">                    <img 
                      src="src\assets\Logo.png"   // <-- put your logo path here
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                      <p className="font-sans text-sm font-semibold text-juniper">Rewaya Edu</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="font-sans text-xs text-green-600">Online now</span>
                    </div>
                  </div>
                </div>
                <p className="font-sans text-sm text-juniper/65 leading-relaxed mb-4">
                  As-salamu alaykum! 👋 Ready to start your Quranic journey? Chat with us now for a free consultation.
                </p>
                <a
                  href="https://wa.me/+92412399457?text=Assalamu%20Alaikum!%20I%20am%20interested%20in%20joining%20Your%20Academy.%20Can%20you%20help%20me%20get%20started%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-sm py-3 rounded-xl transition-all focus-gold"
                >
                  <MessageCircle size={16} />
                  Start WhatsApp Chat
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Float button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Chat on WhatsApp"
            className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 focus-gold"
          >
            {/* Ping ring */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
            <MessageCircle size={26} className="relative z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}