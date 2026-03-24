"use client";

import { useState, useEffect, useRef } from "react";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building modern, responsive web applications with React and Next.js. Focused on performance, scalability, and user experience.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20V10" />
          <path d="M18 20V12" />
          <path d="M6 20V8" />
          <path d="M3 4h18v4H3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Shopify Development",
      description:
        "Custom Shopify store development with Liquid coding, app integration, and conversion optimization for e-commerce success.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Platforms & Templates",
      description:
        "Expert development using WordPress, Webflow, Framer, Elementor, Breakdance, and other no-code/low-code platforms.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gray-50 transition-all duration-1000 relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Floating background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-2 h-32 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-40 right-20 w-1 h-24 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-2 h-40 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-20 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-2 h-28 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-1 h-36 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "2.5s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 right-10 w-2 h-32 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "0.8s", animationDuration: "3.5s" }}
        />
        <div
          className="absolute top-20 right-1/2 w-1 h-24 bg-gray-900/20 rounded-full animate-float"
          style={{ animationDelay: "1.8s", animationDuration: "4s" }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            What I can do for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-3 transform overflow-hidden ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-2xl group-hover:from-gray-900/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mx-auto md:mx-0">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-black transition-colors text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-center md:text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mt-12 sm:mt-16 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="mailto:alipioallen5@gmail.com"
            className="group bg-white border-2 border-black text-black px-6 py-3 sm:px-10 sm:py-5 rounded-full flex items-center gap-2 sm:gap-3 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-base sm:text-lg font-semibold"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
