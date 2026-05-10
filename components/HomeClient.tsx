"use client";

import { useEffect } from "react";

export default function HomeClient() {
  useEffect(() => {
    document.body.classList.add("home-custom-cursor");

    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursor.classList.add("hovering");
    const removeHover = () => cursor.classList.remove("hovering");

    document.addEventListener("mousemove", moveCursor);
    const interactive = document.querySelectorAll("a, button");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const counters = document.querySelectorAll(".counter");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const end = parseInt(target.dataset.target || "0", 10);
            const duration = 2000;
            const start = performance.now();
            const update = (time: number) => {
              const elapsed = time - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              target.textContent = String(Math.round(eased * end));
              if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
            counterObserver.unobserve(target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => counterObserver.observe(el));

    const hero = document.getElementById("hero");
    const handleParallax = () => {
      if (!hero) return;
      if (window.innerWidth < 768) {
        hero.style.backgroundPosition = "center 28%";
        return;
      }
      const scroll = window.scrollY;
      hero.style.backgroundPosition = `center calc(40% + ${scroll * 0.3}px)`;
    };
    window.addEventListener("scroll", handleParallax, { passive: true });
    window.addEventListener("resize", handleParallax);
    handleParallax();

    return () => {
      document.body.classList.remove("home-custom-cursor");
      document.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("resize", handleParallax);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      observer.disconnect();
      counterObserver.disconnect();
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return null;
}
