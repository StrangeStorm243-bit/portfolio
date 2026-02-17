"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { BlurIn } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6">
      <AuroraBackground />

      {/* Avatar with multi-color gradient glow ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative mb-8"
      >
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-emerald-400/40 via-cyan-400/20 to-indigo-500/30 blur-md" />
        <Image
          src="/avatar.jpg"
          alt="Niranjan Shankar"
          width={120}
          height={120}
          className="relative rounded-full border-2 border-white/10 object-cover"
          priority
        />
      </motion.div>

      {/* Name — gradient text with letter-by-letter blur-in */}
      <h1
        className="mb-3 text-center font-bold tracking-tight text-gradient"
        style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
      >
        <BlurIn text="Niranjan Shankar" delay={0.3} />
      </h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="mb-3 text-center text-lg font-medium text-gradient sm:text-xl"
      >
        Founder &amp; Builder
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="max-w-lg text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        I build systems that surface what&apos;s actually happening,
        <br className="hidden sm:block" />
        not what the numbers say is happening.
      </motion.p>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-1 text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
