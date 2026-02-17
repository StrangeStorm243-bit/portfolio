"use client";

import {
  StaggerGroup,
  FadeInChild,
  SectionHeading,
} from "@/components/motion";

interface Experience {
  role: string;
  company: string;
  highlight?: string;
  bullets: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    role: "Co-Founder",
    company: "SalesSense",
    highlight: "15+ founder interviews \u00B7 5+ beta users",
    bullets: [
      "Interviewed 15+ founders before writing code to map where call patterns cost them deals",
      "Built and shipped working demo to 5+ active beta users",
      "Multiple pilot conversations with teams evaluating the product",
    ],
  },
  {
    role: "Founding Data Scientist",
    company: "SitSense",
    highlight: "$600 ARR from paying users",
    bullets: [
      "Founding team; product has $600 ARR from paying users",
      "Built the full data and ML stack from scratch \u2014 pipelines, models, KPIs tied to real behavior",
    ],
    link: "https://www.sitsense.app/",
  },
  {
    role: "Founder",
    company: "Spectra",
    highlight: "CLI + UI prototype shipped",
    bullets: [
      "Founded after watching teams deploy ML that passed benchmarks but failed on real users",
      "Built prototype exposing calibration drift, subgroup failures, and metric sensitivity",
    ],
  },
  {
    role: "Bioinformatics Research Analyst",
    company: "UC Davis \u2014 Loots Lab",
    bullets: [
      "Built reproducible analysis workflows for large genomics datasets; transformed raw data into decision-ready outputs",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 sm:py-32" id="experience">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label="Track Record"
          title="Where I've built things"
        />

        <StaggerGroup className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-cyan-500/30 to-indigo-500/20 sm:left-[9px]" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <FadeInChild
                key={`${exp.role}-${exp.company}`}
                className="relative pl-8 sm:pl-10"
              >
                {/* Timeline dot — gradient fill */}
                <div className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 sm:h-[19px] sm:w-[19px]">
                  <div className="h-[7px] w-[7px] rounded-full bg-background sm:h-[9px] sm:w-[9px]" />
                </div>

                <h3 className="text-base font-semibold sm:text-lg">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-cyan-400/70 underline decoration-cyan-400/20 underline-offset-2 transition-colors hover:text-cyan-400"
                    >
                      ↗
                    </a>
                  )}
                </p>

                {/* Highlight metric */}
                {exp.highlight && (
                  <p className="mt-1 text-sm font-semibold text-gradient">
                    {exp.highlight}
                  </p>
                )}

                <ul className="mt-2 space-y-1.5">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/40" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </FadeInChild>
            ))}
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
