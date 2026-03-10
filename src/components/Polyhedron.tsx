"use client";

import { useEffect, useRef } from "react";

const PHI = (1 + Math.sqrt(5)) / 2;

type Vec3 = [number, number, number];

// Icosahedron vertices, normalized to unit sphere
const VERTICES: Vec3[] = (
  [
    [0, 1, PHI],
    [0, 1, -PHI],
    [0, -1, PHI],
    [0, -1, -PHI],
    [1, PHI, 0],
    [-1, PHI, 0],
    [1, -PHI, 0],
    [-1, -PHI, 0],
    [PHI, 0, 1],
    [PHI, 0, -1],
    [-PHI, 0, 1],
    [-PHI, 0, -1],
  ] as Vec3[]
).map(([x, y, z]) => {
  const len = Math.sqrt(x * x + y * y + z * z);
  return [x / len, y / len, z / len] as Vec3;
});

// Build edges: connect all vertex pairs at the shortest distance (icosahedron edge length)
const EDGES: [number, number][] = (() => {
  const pairs: { i: number; j: number; d: number }[] = [];
  for (let i = 0; i < VERTICES.length; i++)
    for (let j = i + 1; j < VERTICES.length; j++) {
      const dx = VERTICES[i][0] - VERTICES[j][0];
      const dy = VERTICES[i][1] - VERTICES[j][1];
      const dz = VERTICES[i][2] - VERTICES[j][2];
      pairs.push({ i, j, d: Math.sqrt(dx * dx + dy * dy + dz * dz) });
    }
  const minD = Math.min(...pairs.map((p) => p.d));
  return pairs.filter((p) => p.d < minD * 1.1).map((p) => [p.i, p.j]);
})();

function rotateY([x, y, z]: Vec3, a: number): Vec3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [x * c + z * s, y, -x * s + z * c];
}

function rotateX([x, y, z]: Vec3, a: number): Vec3 {
  const c = Math.cos(a),
    s = Math.sin(a);
  return [x, y * c - z * s, y * s + z * c];
}

export default function Polyhedron() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const tilt = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = wrap!.clientWidth;
      const h = wrap!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const onPointer = (e: MouseEvent | TouchEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const src = "touches" in e ? e.touches[0] : e;
      mouse.current = {
        x: src.clientX - rect.left,
        y: src.clientY - rect.top,
        active: true,
      };
    };
    const onLeave = () => {
      mouse.current.active = false;
    };

    canvas.addEventListener("mousemove", onPointer);
    canvas.addEventListener("touchmove", onPointer, { passive: true });
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchend", onLeave);
    window.addEventListener("resize", resize);

    let t = 0;

    function frame() {
      t += 0.004;
      const w = wrap!.clientWidth;
      const h = wrap!.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.34;

      // Gentle breathing scale
      const breathe = 1 + 0.04 * Math.sin(t * 1.8);

      // Smooth tilt toward mouse position
      const maxTilt = 0.6;
      if (mouse.current.active) {
        const targetX = ((mouse.current.y - cy) / (h / 2)) * maxTilt;
        const targetY = ((mouse.current.x - cx) / (w / 2)) * -maxTilt;
        tilt.current.x += (targetX - tilt.current.x) * 0.04;
        tilt.current.y += (targetY - tilt.current.y) * 0.04;
      } else {
        tilt.current.x += (0 - tilt.current.x) * 0.02;
        tilt.current.y += (0 - tilt.current.y) * 0.02;
      }

      // Transform each vertex
      const pts: { x: number; y: number; z: number }[] = [];
      for (let i = 0; i < VERTICES.length; i++) {
        const v = VERTICES[i];
        let p: Vec3 = [v[0] * breathe, v[1] * breathe, v[2] * breathe];

        // Base slow rotation
        p = rotateY(p, t * 0.6);
        p = rotateX(p, t * 0.35 + 0.4);

        // Mouse-driven tilt
        p = rotateX(p, tilt.current.x);
        p = rotateY(p, tilt.current.y);

        // Simple perspective projection
        const persp = 3.5;
        const s = persp / (persp + p[2]);
        pts.push({ x: cx + p[0] * r * s, y: cy + p[1] * r * s, z: p[2] });
      }

      // --- Draw edges ---
      for (const [i, j] of EDGES) {
        const a = pts[i],
          b = pts[j];
        const depth = ((a.z + b.z) / 2 + 1.2) / 2.4;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(168, 130, 252, ${(0.08 + 0.28 * depth).toFixed(3)})`;
        ctx.lineWidth = 0.8 + 0.6 * depth;
        ctx.stroke();
      }

      // --- Draw vertices ---
      for (const pt of pts) {
        const depth = (pt.z + 1.2) / 2.4;
        const op = 0.25 + 0.75 * depth;
        const sz = 1.5 + 2 * depth;

        // Soft glow
        const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, sz * 4);
        g.addColorStop(0, `rgba(192, 132, 252, ${(op * 0.45).toFixed(3)})`);
        g.addColorStop(0.5, `rgba(168, 85, 247, ${(op * 0.12).toFixed(3)})`);
        g.addColorStop(1, "rgba(168, 85, 247, 0)");
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, sz * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 180, 254, ${op.toFixed(3)})`;
        ctx.fill();
      }

      if (!reduced) {
        raf.current = requestAnimationFrame(frame);
      }
    }

    frame();

    return () => {
      cancelAnimationFrame(raf.current);
      canvas.removeEventListener("mousemove", onPointer);
      canvas.removeEventListener("touchmove", onPointer);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchend", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-crosshair"
        aria-label="Rotating icosahedron"
        role="img"
      />
    </div>
  );
}
