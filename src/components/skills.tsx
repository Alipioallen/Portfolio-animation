"use client";

import { useState, useEffect, useRef } from "react";

export function Skills() {
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

  const skillsData = {
    Frontend: [
      "HTML",
      "CSS",
      "SCSS",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Shadcn UI",
      "Chakra UI",
      "Radix UI",
      "JQuery",
    ],
    Backend: ["PHP"],
    Platforms: [
      "Wordpress",
      "Elementor",
      "Breakdance",
      "WPBakery",
      "ACF",
      "Divi",
      "Gutenberg Block",
      "Shopify",
      "Webflow",
      "Framer",
    ],
    Tools: [
      "Visual Studio Code",
      "Git",
      "GitHub",
      "GitHub Desktop",
      "GitHub Copilot",
      "Strapi",
      "Netlify",
      "Vercel",
      "Render",
      "Expo GO",
      "Mapbox",
      "Mailchimp",
      "Rebuy App",
      "Replo",
    ],
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full max-w-7xl">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Tech Stack
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div
              key={category}
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="inline-block w-1 h-8 bg-gray-900 rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm sm:text-base font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-110 transition-all duration-300 transform hover:rotate-1"
                    style={{
                      animation: isVisible
                        ? `fadeUp 0.5s ease-out ${0.2 + skillIndex * 0.03}s forwards`
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
