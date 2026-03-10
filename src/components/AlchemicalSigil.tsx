export default function AlchemicalSigil() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="sigil-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <pattern
          id="sigil-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#c084fc"
            strokeWidth="0.5"
            opacity="0.05"
          />
        </pattern>
      </defs>

      <style>{`
        .sigil-pulse {
          animation: sigil-pulse-anim 4s ease-in-out infinite;
        }
        .sigil-spin {
          transform-origin: 250px 250px;
          animation: sigil-spin-anim 30s linear infinite;
        }
        .sigil-spin-slow {
          transform-origin: 250px 250px;
          animation: sigil-spin-anim 60s linear infinite reverse;
        }
        @keyframes sigil-pulse-anim {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 4px #c084fc); }
          50% { opacity: 0.7; filter: drop-shadow(0 0 12px #c084fc); }
        }
        @keyframes sigil-spin-anim {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <rect width="100%" height="100%" fill="url(#sigil-grid)" />

      <g filter="url(#sigil-glow)">
        {/* Circuit traces */}
        <g stroke="#c084fc" strokeWidth="1.5" opacity="0.3">
          <line x1="250" y1="100" x2="250" y2="30" />
          <line x1="380" y1="175" x2="440.5" y2="140" />
          <line x1="380" y1="325" x2="440.5" y2="360" />
          <line x1="250" y1="400" x2="250" y2="470" />
          <line x1="120" y1="325" x2="59.5" y2="360" />
          <line x1="120" y1="175" x2="59.5" y2="140" />
        </g>

        {/* Outer hexagon */}
        <path
          d="M 250 30 L 440.5 140 L 440.5 360 L 250 470 L 59.5 360 L 59.5 140 Z"
          fill="none"
          stroke="#c084fc"
          strokeWidth="2.5"
          opacity="0.8"
        />

        {/* Outer nodes */}
        <g fill="#06060e" stroke="#c084fc" strokeWidth="2">
          <circle cx="250" cy="30" r="5" />
          <circle cx="440.5" cy="140" r="5" />
          <circle cx="440.5" cy="360" r="5" />
          <circle cx="250" cy="470" r="5" />
          <circle cx="59.5" cy="360" r="5" />
          <circle cx="59.5" cy="140" r="5" />
        </g>

        {/* Convergence circle */}
        <circle
          cx="250"
          cy="250"
          r="150"
          fill="none"
          stroke="#c084fc"
          strokeWidth="1"
          opacity="0.2"
        />

        {/* Air + Earth hexagram */}
        <g
          stroke="#c084fc"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
        >
          {/* Air — upward triangle */}
          <path d="M 250 100 L 380 325 L 120 325 Z" />
          <line x1="210" y1="145" x2="290" y2="145" />

          {/* Earth — downward triangle */}
          <path d="M 250 400 L 380 175 L 120 175 Z" />
          <line x1="210" y1="355" x2="290" y2="355" />
        </g>

        {/* Inner data nodes */}
        <g fill="#c084fc">
          <circle cx="250" cy="100" r="3.5" />
          <circle cx="380" cy="325" r="3.5" />
          <circle cx="120" cy="325" r="3.5" />
          <circle cx="250" cy="400" r="3.5" />
          <circle cx="380" cy="175" r="3.5" />
          <circle cx="120" cy="175" r="3.5" />
        </g>
      </g>

      {/* Processing rings */}
      <circle
        cx="250"
        cy="250"
        r="185"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.5"
        strokeDasharray="4 12"
        opacity="0.5"
        className="sigil-spin"
      />
      <circle
        cx="250"
        cy="250"
        r="175"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1"
        strokeDasharray="20 10 5 10"
        opacity="0.3"
        className="sigil-spin-slow"
      />

      {/* Mercury core */}
      <g
        className="sigil-pulse"
        stroke="#c084fc"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="250" cy="235" r="16" strokeWidth="3.5" />
        <path d="M 230 208 Q 250 235 270 208" strokeWidth="3.5" />
        <line x1="250" y1="251" x2="250" y2="285" strokeWidth="3.5" />
        <line x1="235" y1="270" x2="265" y2="270" strokeWidth="3.5" />

        {/* Distillation droplet */}
        <path
          d="M 250 300 C 255 308, 255 313, 250 316 C 245 313, 245 308, 250 300 Z"
          fill="#c084fc"
          stroke="none"
        />
      </g>
    </svg>
  );
}
