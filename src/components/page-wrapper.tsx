"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = "hidden";

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Allow loader transition to complete
      setTimeout(() => {
        setShowContent(true);
        // Enable scroll after content is visible
        document.body.style.overflow = "auto";
      }, 500);
    }, 2000); // 2 seconds of animation

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`transform transition-all duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

