"use client";

import {
  StaggerGroup,
  FadeInChild,
  SectionHeading,
} from "@/components/motion";
import { GlassCard } from "@/components/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy } from "lucide-react";

const projects = [
  {
    name: "Farm Sense",
    tagline: "Satellite change detection → prioritized farm scouting missions.",
    description:
      "Real-time crop intelligence platform that ingests Sentinel-2 L2A satellite imagery at 10m resolution, computes per-pixel NDVI change detection, and clusters stressed vegetation zones via DBSCAN. A FastAPI backend correlates anomalies with live weather telemetry from Open-Meteo, then dispatches GPT-4o-mini for contextual agronomic diagnoses — outputting yield-at-risk economics and optimized scout routes a crew can execute same-day.",
    tags: ["Satellite ML", "NDVI", "FastAPI", "GPT-4o"],
    demo: "https://www.loom.com/share/45fb4aeb20e94e518bb7debe64a12103",
    github: "https://github.com/cagarwal27/farm-scout",
  },
  {
    name: "Vimero",
    tagline: "AI-generated personalized sales video at scale.",
    description:
      "Agentic pipeline that takes a prospect list, autonomously scrapes company intelligence via rtrvr.ai, synthesizes personalized scripts through MiniMax M2.5, generates natural voiceover with ElevenLabs Flash v2.5, and composites scene-level visuals into finished outreach videos — all orchestrated as durable Convex workflows with real-time pipeline tracking across 10+ concurrent generations.",
    tags: ["Agentic AI", "Convex", "ElevenLabs", "MiniMax"],
    demo: "https://www.loom.com/share/14b0e6c6370f4b428cb0c11b547daf3f",
    github: "https://github.com/cagarwal27/aiagent",
  },
];

export function Hackathons() {
  return (
    <section className="relative py-24 sm:py-32" id="hackathons">
      {/* Subtle purple-brown ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[120px]" />
        <div className="absolute right-1/3 top-1/2 h-[350px] w-[350px] rounded-full bg-amber-800/[0.05] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Hackathons"
          title="2 Wins"
          className="[&_.text-gradient]:!bg-gradient-to-r [&_.text-gradient]:!from-purple-500 [&_.text-gradient]:!via-purple-400 [&_.text-gradient]:!to-amber-700"
        />

        {/* Win stat */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <Trophy className="h-5 w-5 text-purple-400" />
          <p className="text-sm font-semibold text-purple-300/80">
            2 wins
          </p>
          <Trophy className="h-5 w-5 text-purple-400" />
        </div>

        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeInChild key={project.name}>
              <GlassCard className="hackathon-card flex h-full flex-col p-6 sm:p-8">
                {/* Tags */}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-purple-500/30 text-purple-400 text-xs"
                  >
                    Winner
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

                {/* Name + Tagline */}
                <h3 className="mb-1 text-xl font-bold">{project.name}</h3>
                <p className="mb-2 text-sm font-medium text-purple-400/70">
                  {project.tagline}
                </p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-black">
                  {project.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-purple-600 to-amber-700 text-white hover:from-purple-500 hover:to-amber-600"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </GlassCard>
            </FadeInChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
