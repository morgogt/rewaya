import { useEffect, useRef, useState } from "react";

const testimonials = [
{
  name: "Amina Hassan",
  role: "Mother of two students — Texas, USA",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  rating: 5,
  text: "Subhanallah, what a blessing Noor Academy has been for our family. My 7-year-old went from zero Quran reading to confidently reciting Surah Al-Fatiha in just two months. The teacher is so patient and kind — my daughter actually looks forward to her classes!",
  course: "Quran Reading (Nazra)"
},
{
  name: "Ibrahim Al-Farsi",
  role: "Adult Student — Toronto, Canada",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  rating: 5,
  text: "I'm a busy professional and was worried I wouldn't find time for Tajweed. Noor Academy scheduled my classes at 6 AM before work, and the teacher is incredibly knowledgeable. My Makhraj has improved dramatically. Worth every penny.",
  course: "Tajweed Classes"
},
{
  name: "Fatima Malik",
  role: "Parent — London, UK",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
  rating: 5,
  text: "We tried other platforms but nothing compared to Noor Academy's one-on-one approach. My son started Hifz and has memorized 3 Juz in 6 months. The monthly progress reports keep us informed and motivated. Highly recommended for any Muslim family.",
  course: "Hifz Program"
},
{
  name: "Yusuf Rahman",
  role: "Father of three — Sydney, Australia",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  rating: 5,
  text: "The Islamic Studies program for my youngest has been absolutely wonderful. She now knows her five pillars, has memorized essential duas, and asks me questions about Islam every evening. The teacher makes it so engaging and age-appropriate.",
  course: "Islamic Studies"
}];


export default function Testimonials() {
  const ref = useRef(null);
  const [_inView, setInView] = useState(false);
  const [_current, setCurrent] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) setInView(true);}, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const _prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const _next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Students Say</h2>
        <p className="text-center text-gray-600 mb-12">Real stories from real learners</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-3">{testimonial.text}</p>
              <p className="text-xs text-blue-600 font-medium">{testimonial.course}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
























































































































































}