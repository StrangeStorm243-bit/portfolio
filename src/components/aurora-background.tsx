"use client";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Emerald blob — top-left */}
      <div
        className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #10B981 0%, transparent 70%)",
          animation: "aurora-shift 15s ease-in-out infinite",
        }}
      />
      {/* Cyan blob — top-right */}
      <div
        className="absolute -top-1/4 -right-1/4 h-[50vh] w-[50vh] rounded-full opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          animation: "aurora-shift 18s ease-in-out infinite reverse",
        }}
      />
      {/* Indigo blob — bottom-center */}
      <div
        className="absolute -bottom-1/4 left-1/3 h-[45vh] w-[45vh] rounded-full opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
          animation: "aurora-shift 20s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
