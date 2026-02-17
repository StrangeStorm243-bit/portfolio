"use client";

import { GlassCard } from "@/components/glass-card";
import {
  StaggerGroup,
  FadeInChild,
  SectionHeading,
} from "@/components/motion";
import {
  Rocket,
  SearchCheck,
  MessageCircle,
  ArrowRightLeft,
} from "lucide-react";

const narrative = `I build systems that surface what's actually happening, not what the numbers say is happening.

That's the thread connecting everything I work on — SalesSense surfaces patterns in customer calls that founders miss. Spectra exposes where ML models pass benchmarks but fail on real users. SitSense detects posture drift before users notice.

The common problem: people trust metrics that feel right instead of digging for the signal that's actually there. I build the tools that do the digging.`;

const stats = [
  {
    value: "15+",
    label: "Founder Interviews",
    sublabel: "Before writing a line of code",
  },
  { value: "$600", label: "ARR", sublabel: "Paying users at SitSense" },
  {
    value: "5+",
    label: "Beta Users",
    sublabel: "Actively using SalesSense",
  },
  {
    value: "3",
    label: "Products Shipped",
    sublabel: "From zero to users",
  },
];

const capabilities = [
  {
    icon: Rocket,
    title: "Zero-to-One Builder",
    description:
      "Vague idea to shipped prototype. 15+ founder interviews before code.",
  },
  {
    icon: SearchCheck,
    title: "Stress-Test Everything",
    description:
      "If a metric looks right but feels wrong, I dig until I find why.",
  },
  {
    icon: MessageCircle,
    title: "Talk to Users First",
    description:
      "Extract real signal from conversations. Build what they actually need.",
  },
  {
    icon: ArrowRightLeft,
    title: "Tight Feedback Loops",
    description: "Talk, synthesize, build, test, repeat. Bias toward action.",
  },
];

export function AboutBento() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About"
          title="The thread connecting everything"
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Narrative card — spans 2 cols and 2 rows */}
          <FadeInChild className="sm:col-span-2 sm:row-span-2">
            <GlassCard className="flex h-full items-center p-6 sm:p-8">
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
                {narrative}
              </p>
            </GlassCard>
          </FadeInChild>

          {/* Stat cards */}
          {stats.map((stat) => (
            <FadeInChild key={stat.label}>
              <GlassCard className="flex h-full flex-col items-center justify-center p-6 text-center">
                <span className="text-3xl font-bold tracking-tight text-gradient">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-medium text-foreground">
                  {stat.label}
                </span>
                <span className="mt-0.5 text-xs text-muted-foreground">
                  {stat.sublabel}
                </span>
              </GlassCard>
            </FadeInChild>
          ))}

          {/* Capability cards */}
          {capabilities.map((cap) => (
            <FadeInChild key={cap.title}>
              <GlassCard className="h-full p-6">
                <cap.icon className="mb-3 h-5 w-5 text-cyan-400" />
                <h3 className="mb-1 text-sm font-semibold">{cap.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </GlassCard>
            </FadeInChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
