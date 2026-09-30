import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

/**
 * Hook for scroll-based motion
 * Gives parallax and opacity control based on viewport
 */
export const useScrollMotion = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0]);

  return { ref, y, opacity, motion };
};
