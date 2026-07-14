'use client'

import { ReactNode, useEffect } from "react";

type AoscompoProps = {
  children: ReactNode;
};

const Aoscompo = ({ children }: AoscompoProps) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-aos]"));

    if (!elements.length) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element) => {
      const delay = element.getAttribute("data-aos-delay");
      const duration = element.getAttribute("data-aos-duration");

      if (delay) {
        element.style.setProperty("--aos-delay", delay);
      }

      if (duration) {
        element.style.setProperty("--aos-duration", duration);
      }
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("aos-animate"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};

export default Aoscompo;
