"use client";

import {
  StaggerGroup,
  FadeInChild,
  SectionHeading,
} from "@/components/motion";
import { GlassCard } from "@/components/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Syntrix",
    tagline: "Open-source project pushing boundaries.",
    description:
      "An open-source project available on GitHub — check it out and contribute.",
    tags: ["Open Source"],
    website: "https://syntrix.app/",
    github: "https://github.com/StrangeStorm243-bit/Syntrix",
  },
];

export function OpenSource() {
  return (
    <section className="relative py-24 sm:py-32" id="open-source">
      {/* Subtle red-orange ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-red-500/[0.06] blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[350px] w-[350px] rounded-full bg-orange-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Open Source"
          title="Community Projects"
          className="[&_.text-gradient]:!bg-gradient-to-r [&_.text-gradient]:!from-red-500 [&_.text-gradient]:!via-orange-500 [&_.text-gradient]:!to-amber-400"
        />

        <StaggerGroup className="mx-auto grid max-w-lg gap-6">
          {projects.map((project) => (
            <FadeInChild key={project.name}>
              <GlassCard
                className="oss-card flex h-full flex-col p-6 sm:p-8"
              >
                {/* Tags */}
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-orange-500/30 text-orange-400 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Name + Tagline */}
                <h3 className="mb-1 text-xl font-bold">{project.name}</h3>
                <p className="mb-1 text-sm font-medium text-orange-400/70">
                  {project.tagline}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400"
                  >
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 border-orange-500/30 text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
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
