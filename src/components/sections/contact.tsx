"use client";

import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gradient">
            Open To
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Looking for early-stage roles where I can build, talk to users, and
            figure things out end-to-end. If you&apos;re working on something
            messy and important, I want to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <a
                href="https://github.com/StrangeStorm243-bit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a
                href="https://www.linkedin.com/in/neo2604"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
