"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FAFAF7", "#EDEEF3"]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ backgroundColor }}
    />
  );
}