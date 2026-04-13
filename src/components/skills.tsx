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
    Development: {
      subcategories: {
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
      },
      skills: [
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
        "PHP",
      ],
    },
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

      <div className="w-full max-w-7xl relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {Object.entries(skillsData).map(([category, categoryData], index) => {
            const skills =
              typeof categoryData === "string" || Array.isArray(categoryData)
                ? Array.isArray(categoryData)
                  ? categoryData
                  : []
                : categoryData.skills;

            return (
              <div
                key={category}
                className={`transform transition-all duration-700 ease-out h-full ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="h-full bg-white border-2 border-gray-100 rounded-xl shadow-sm p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="inline-block w-1 h-8 bg-gradient-to-b from-[#004C6D] to-[#002F42] rounded-full" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-[#004C6D] border border-[#004C6D] text-white rounded-lg text-sm font-medium hover:scale-110 transition-all duration-300 transform"
                        style={{
                          animation: isVisible
                            ? `fadeUp 0.5s ease-out ${0.3 + index * 0.15 + skillIndex * 0.04}s forwards`
                            : "none",
                          opacity: 0,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
