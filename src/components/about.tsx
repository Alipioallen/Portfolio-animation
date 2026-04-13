"use client";

import { useState, useEffect, useRef } from "react";

export function About() {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Image */}
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="w-96 h-[32rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/allen2.jpg"
              alt="Allen Alipio"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right column - Information */}
        <div className="space-y-8">
          <div
            className="transform transition-all duration-700 ease-out hover:scale-105"
            style={{
              animation: isVisible
                ? "fadeUp 0.8s ease-out 0.3s forwards"
                : "none",
              opacity: 0,
            }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse">
                Me
              </span>
            </h2>
          </div>

          <div
            className="transform transition-all duration-700 ease-out hover:translate-x-2"
            style={{
              animation: isVisible
                ? "fadeUp 0.8s ease-out 0.4s forwards"
                : "none",
              opacity: 0,
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Allen Alipio
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a Frontend Developer with a solid foundation in web
              development, demonstrated ability to contribute effectively to
              diverse projects while maintaining a focus on frontend
              development.
            </p>
          </div>

          <div
            className="transform transition-all duration-700 ease-out hover:translate-x-2"
            style={{
              animation: isVisible
                ? "fadeUp 0.8s ease-out 0.5s forwards"
                : "none",
              opacity: 0,
            }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-[#004C6D] rounded-full animate-pulse" />{" "}
              Education
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">
                <span className="font-semibold">
                  Tarlac State University College of Computer Studies
                </span>
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                Bachelor&apos;s degree in Information Technology
              </p>
              <p className="text-sm hover:text-gray-900 transition-colors">
                Web and Mobile Development
              </p>
              <p className="text-xs hover:text-gray-900 transition-colors">
                2019 – 2023
              </p>
            </div>
          </div>

          <div
            className="transform transition-all duration-700 ease-out hover:translate-x-2"
            style={{
              animation: isVisible
                ? "fadeUp 0.8s ease-out 0.6s forwards"
                : "none",
              opacity: 0,
            }}
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-[#004C6D] rounded-full animate-pulse" />{" "}
              Experience
            </h4>
            <div className="space-y-6">
              <div className="space-y-2 text-gray-600">
                <p className="hover:text-gray-900 transition-colors">
                  <span className="font-semibold">Web Developer</span> - My
                  Creative Panda INC.
                </p>
                <div className="flex gap-2 text-sm">
                  <span className="shrink-0">•</span>
                  <p className="hover:text-gray-900 transition-colors">
                    Developed and managed dynamic WordPress posts using custom
                    tags and contents
                  </p>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="shrink-0">•</span>
                  <p className="hover:text-gray-900 transition-colors">
                    Implemented comprehensive site security and performance
                    monitoring using SiteGuard configuration
                  </p>
                </div>
                <p className="text-xs hover:text-gray-900 transition-colors">
                  October 2023 – December 2023
                </p>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="hover:text-gray-900 transition-colors">
                  <span className="font-semibold">Web Developer</span> -
                  Fullstack HQ
                </p>
                <div className="flex gap-2 text-sm">
                  <span className="shrink-0">•</span>
                  <p className="hover:text-gray-900 transition-colors">
                    Developed responsive web applications using React, Next.js,
                    and React Native for cross-platform compatibility
                  </p>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="shrink-0">•</span>
                  <p className="hover:text-gray-900 transition-colors">
                    Built custom websites and landing pages utilizing WordPress
                    builders including Elementor, Breakdance, Divi, and
                    Gutenberg
                  </p>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="shrink-0">•</span>
                  <p className="hover:text-gray-900 transition-colors">
                    Built and customized e-commerce sites on Shopify platform
                    with focus on user experience and conversion optimization
                    using custom Liquid codes and Shopify builder.
                  </p>
                </div>
                <p className="text-xs hover:text-gray-900 transition-colors">
                  February 2024 – Current
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
