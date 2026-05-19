'use client';

import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const cinematicEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  const initialOffset = shouldReduceMotion ? { x: 0, y: 0 } : directions[direction];
  const transition: Transition = shouldReduceMotion
    ? { duration: 0.2, delay: 0 }
    : {
        duration: 0.7,
        delay,
        ease: cinematicEase,
      };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: shouldReduceMotion ? "0%" : "-10%" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
