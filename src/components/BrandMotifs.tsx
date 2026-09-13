/**
 * Shared brand geometry — "Gateway + Orbit" motif.
 *
 * Both shapes are pure line-art, extremely low opacity by default.
 * Used sparingly as background texture in Hero.tsx,
 * TwoWaysToGrow.tsx and ProblemSolution.tsx.
 */

interface MotifProps {
  className?: string;
  opacity?: number;
}

/**
 * Arch / threshold shape with faint orbit rings.
 */
export function GatewayMotif({
  className = "",
  opacity = 0.06,
}: MotifProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      {/* Gateway */}
      <path
        d="M 110 300 L 110 150 A 90 90 0 0 1 290 150 L 290 300"
        stroke="var(--color-navy)"
        strokeWidth="1.2"
        fill="none"
      />

      <path
        d="M 135 300 L 135 158 A 65 65 0 0 1 265 158 L 265 300"
        stroke="var(--color-navy)"
        strokeWidth="1"
        fill="none"
      />

      {/* Orbit rings */}
      <circle
        cx="200"
        cy="150"
        r="60"
        stroke="var(--color-brand-blue)"
        strokeWidth="0.8"
        fill="none"
      />

      <circle
        cx="200"
        cy="150"
        r="105"
        stroke="var(--color-navy)"
        strokeWidth="0.6"
        fill="none"
      />

      {/* Accent point */}
      <circle
        cx="200"
        cy="45"
        r="3"
        fill="var(--color-brand-orange)"
      />

      <circle
        cx="97"
        cy="150"
        r="1.6"
        fill="var(--color-navy)"
      />

      <circle
        cx="303"
        cy="150"
        r="1.6"
        fill="var(--color-navy)"
      />

      <circle
        cx="252"
        cy="72"
        r="1.6"
        fill="var(--color-navy)"
      />

      <circle
        cx="148"
        cy="72"
        r="1.6"
        fill="var(--color-navy)"
      />
    </svg>
  );
}

/**
 * Abstracted North-Indian Kundali diamond.
 */
export function KundaliDiamond({
  className = "",
  opacity = 0.05,
}: MotifProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 300"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      <polygon
        points="150,20 280,150 150,280 20,150"
        stroke="var(--color-navy)"
        strokeWidth="1"
        fill="none"
      />

      <line
        x1="150"
        y1="20"
        x2="150"
        y2="280"
        stroke="var(--color-navy)"
        strokeWidth="0.7"
      />

      <line
        x1="20"
        y1="150"
        x2="280"
        y2="150"
        stroke="var(--color-navy)"
        strokeWidth="0.7"
      />

      <line
        x1="150"
        y1="20"
        x2="20"
        y2="150"
        stroke="var(--color-navy)"
        strokeWidth="0.5"
      />

      <line
        x1="150"
        y1="20"
        x2="280"
        y2="150"
        stroke="var(--color-navy)"
        strokeWidth="0.5"
      />

      <line
        x1="150"
        y1="280"
        x2="20"
        y2="150"
        stroke="var(--color-navy)"
        strokeWidth="0.5"
      />

      <line
        x1="150"
        y1="280"
        x2="280"
        y2="150"
        stroke="var(--color-navy)"
        strokeWidth="0.5"
      />

      <circle
        cx="150"
        cy="150"
        r="3"
        fill="var(--color-brand-orange)"
      />
    </svg>
  );
}