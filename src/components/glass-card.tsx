"use client";

import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({
  children,
  className,
  spotlight = true,
  gradientBorder = false,
}: GlassCardProps) {
  const { ref, position, isHovering, handlers } = useMousePosition();

  return (
    <div
      ref={ref}
      {...handlers}
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-300",
        gradientBorder ? "gradient-border" : "glass",
        className
      )}
    >
      {/* Spotlight radial gradient following cursor */}
      {spotlight && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.07), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
