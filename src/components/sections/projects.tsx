"use client";

import Image from "next/image";
import {
  StaggerGroup,
  FadeInChild,
  SectionHeading,
} from "@/components/motion";
import { GlassCard } from "@/components/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "SalesSense",
    role: "Co-Founder",
    metric: "60+ founder interviews · 15+ beta users",
    tagline: "Turning customer conversations into founder decisions.",
    description:
      "Interviewed 60+ founders to map where customer call patterns were costing them deals. Built and shipped demo to 15+ active beta users.",
    bullets: [
      "Extracting cross-conversation signal, not single-call summaries",
      "Evidence-backed weekly decision support for founders",
      "Multiple pilot conversations in progress",
    ],
    tags: ["NLP", "Founder Tools", "Customer Discovery"],
    link: "https://www.salessense.app/demo",
    linkLabel: "View Demo",
    image: "/salessense-product.png",
  },
  {
    name: "SitSense",
    role: "Founding Data Scientist",
    metric: "$600 ARR from paying users",
    tagline: "Detecting posture drift before users notice.",
    description:
      "Founding team member. Built the full data and ML stack from scratch — end-to-end pipelines, predictive models, and KPIs tied to real user behavior.",
    bullets: [
      "Real revenue from real users — $600 ARR",
      "End-to-end ML pipeline from data to production",
      "Predictive models for posture tracking and coaching",
    ],
    tags: ["ML Engineering", "Health Tech", "Data Pipelines"],
    link: "https://www.sitsense.app/",
    linkLabel: "View Product",
    image: "/sitsense-product.png",
  },
  {
    name: "Spectra",
    role: "Founder",
    metric: "CLI + UI prototype shipped",
    tagline: "Exposing where models lie.",
    description:
      "Founded after watching teams deploy ML models that passed benchmarks but failed on real users. Built prototype to expose calibration drift and subgroup failures that single-number evaluations hide.",
    bullets: [
      "Surfaces calibration risk and subgroup performance gaps",
      "Built around the idea that metrics can disagree in meaningful ways",
      "Early pilot conversations with ML teams",
    ],
    tags: ["AI Evaluation", "ML Ops", "CLI + UI"],
    link: "https://github.com/StrangeStorm243-bit",
    linkLabel: "View on GitHub",
  },
];

export function Projects() {
  return (
    <section className="py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Building" title="What I'm shipping" />

        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <FadeInChild key={project.name}>
              <GlassCard
                gradientBorder
                className="flex h-full flex-col p-6 sm:p-8 text-black"
              >
                {/* Product screenshot */}
                {project.image && (
                  <div className="mb-5 overflow-hidden rounded-lg border border-white/[0.08]">
                    <Image
                      src={project.image}
                      alt={`${project.name} product screenshot`}
                      width={640}
                      height={360}
                      className="w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}

                {/* Role + Tags */}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-cyan-500/30 text-cyan-400 text-xs"
                  >
                    {project.role}
                  </Badge>
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Name + Metric */}
                <h3 className="mb-1 text-xl font-bold">{project.name}</h3>
                <p className="mb-2 text-sm font-semibold text-gradient">
                  {project.metric}
                </p>
                <p className="mb-1 text-sm font-medium text-cyan-400/70">
                  {project.tagline}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-black">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="mb-6 flex-1 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-fit gap-2"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </GlassCard>
            </FadeInChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
