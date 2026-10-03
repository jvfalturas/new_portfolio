import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

const offsets = {
  up:    { y: 40, x: 0 },
  down:  { y: -40, x: 0 },
  left:  { y: 0, x: -40 },
  right: { y: 0, x: 40 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // easeOut cubic
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}