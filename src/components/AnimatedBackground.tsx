"use client";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Primary gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(88,28,135,0.15)_0%,_transparent_60%)]" />

      {/* Floating orbs */}
      <div
        className="absolute left-[10%] top-[20%] h-72 w-72 animate-[float_20s_ease-in-out_infinite] rounded-full bg-purple-600/10 blur-[100px]"
      />
      <div
        className="absolute right-[15%] top-[40%] h-96 w-96 animate-[float_25s_ease-in-out_infinite_reverse] rounded-full bg-violet-600/8 blur-[120px]"
      />
      <div
        className="absolute bottom-[20%] left-[30%] h-80 w-80 animate-[float_22s_ease-in-out_infinite_2s] rounded-full bg-fuchsia-600/6 blur-[100px]"
      />
      <div
        className="absolute right-[30%] top-[10%] h-64 w-64 animate-[float_18s_ease-in-out_infinite_4s] rounded-full bg-purple-500/8 blur-[80px]"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
