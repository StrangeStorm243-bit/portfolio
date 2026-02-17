"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ── Variants ── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ── FadeIn (standalone scroll-triggered) ── */

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : fadeUp}
      initial={shouldReduce ? undefined : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "200px 0px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerGroup + FadeInChild ── */

export function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : staggerContainer}
      initial={shouldReduce ? undefined : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "200px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInChild({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

/* ── BlurIn (letter-by-letter text with blur dissolve) ── */

export function BlurIn({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const shouldReduce = useReducedMotion();
  const letters = text.split("");

  if (shouldReduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline-flex flex-wrap justify-center", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.04,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Parallax (scroll-linked Y-axis movement + opacity) ── */

export function Parallax({
  children,
  className,
  offset = 40,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  if (shouldReduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── SectionHeading (reusable section header) ── */

export function SectionHeading({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <FadeIn className={cn("mb-14 text-center", className)}>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gradient">
        {label}
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </p>
    </FadeIn>
  );
}
