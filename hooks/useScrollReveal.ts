"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });

      tl.from(".reveal-heading", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".reveal-item",
        {
          opacity: 0,
          y: 24,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.35",
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
