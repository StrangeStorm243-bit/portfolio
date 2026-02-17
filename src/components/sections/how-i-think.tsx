"use client";

import { GlassCard } from "@/components/glass-card";
import {
  StaggerGroup,
  FadeInChild,
  SectionHeading,
} from "@/components/motion";
import {
  Zap,
  Compass,
  Radio,
  Shield,
  RefreshCw,
  Dices,
} from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Bias toward action",
    description:
      "Ship first, polish later. Fast feedback over perfect planning. I'd rather learn from a live user than a whiteboard.",
  },
  {
    icon: Compass,
    title: "Comfortable with incomplete information",
    description:
      "Ambiguity is the default in early-stage, not the exception. I make decisions with 60% confidence and adjust.",
  },
  {
    icon: Radio,
    title: "Signal over noise",
    description:
      "Strong at pulling real insights from messy conversations and messy data. I don't trust dashboards that only show green.",
  },
  {
    icon: Shield,
    title: "Healthy skepticism",
    description:
      "Will question metrics or conclusions that \"look right\" but feel wrong. This is how I found the thesis for Spectra.",
  },
  {
    icon: RefreshCw,
    title: "Tight loops",
    description:
      "Talk to users, synthesize patterns, build the thing, test it, repeat. The loop is the product development process.",
  },
  {
    icon: Dices,
    title: "Poker-trained intuition",
    description:
      "Semi-professional poker trained me to distinguish bad decisions from bad outcomes. Real stakes, incomplete information, long-term EV.",
  },
];

export function HowIThink() {
  return (
    <section id="thinking" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="How I Think" title="Operating principles" />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <FadeInChild key={p.title}>
              <GlassCard className="h-full p-6">
                <p.icon className="mb-3 h-5 w-5 text-cyan-400" />
                <h3 className="mb-2 text-base font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </GlassCard>
            </FadeInChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
