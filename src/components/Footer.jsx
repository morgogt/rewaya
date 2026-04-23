import { Instagram, Facebook, Youtube, Twitter, Mail, Phone } from "lucide-react";
import BrandMark from "./BrandMark";

const footerLinks = {
  Programs: ["Quran Reading", "Tajweed", "Hifz Program", "Islamic Studies"],
  Company: ["About Us", "Our Teachers", "Testimonials", "Blog"],
  Support: ["Book Free Trial", "FAQ", "Contact Us", "Privacy Policy"],
};

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-juniper text-ivory" style={{ backgroundColor: "#141F18" }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <BrandMark variant="footer" />
            </div>

            <p className="font-sans text-sm text-ivory/45 leading-[1.9] max-w-sm mb-8">
              Your digital hub for authentic Islamic learning. One-on-one Quran and Islamic studies classes for every Muslim family, worldwide.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <a href="mailto:info@rewayaedu.com" className="flex items-center gap-3 font-sans text-sm text-ivory/50 hover:text-gold transition-colors focus-gold rounded group">
                <Mail size={14} className="text-gold/70 group-hover:text-gold transition-colors" />
                info@rewayaedu.com
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-ivory/50 hover:text-gold transition-colors focus-gold rounded group">
                <Phone size={14} className="text-gold/70 group-hover:text-gold transition-colors" />
                +1 (555) 000-0000
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { IconEl: Instagram, label: "Instagram" },
                { IconEl: Facebook, label: "Facebook" },
                { IconEl: Youtube, label: "YouTube" },
                { IconEl: Twitter, label: "Twitter" },
              ].map(({ IconEl, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-ivory/10 hover:border-gold/50 hover:bg-gold/10 flex items-center justify-center transition-all focus-gold"
                >
                  <IconEl size={14} className="text-ivory/50 hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNav("#courses")}
                      className="font-sans text-sm text-ivory/45 hover:text-gold transition-colors text-left focus-gold rounded"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/25">
            © {new Date().getFullYear()} RewayaEdu. All rights reserved. Digital Hub for Islamic Learning.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
           
          </div>
        </div>
      </div>
    </footer>
  );
}
