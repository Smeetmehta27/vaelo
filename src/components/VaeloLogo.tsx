/**
 * VaeloLogo — Reusable logo component for the Vaelo identity system.
 *
 * Renders the approved constructed V mark and/or serif wordmark as inline SVG.
 *
 * Variants:
 *   - "full"     → Horizontal lockup: V symbol + "Vaelo" wordmark (default)
 *   - "symbol"   → V symbol only
 *   - "wordmark" → "Vaelo" text only
 *   - "stacked"  → V symbol above "Vaelo" wordmark
 *
 * Color modes:
 *   - "dark"   → Ink on Paper (default, for light backgrounds)
 *   - "light"  → Paper on Ink (for dark backgrounds)
 *   - "accent" → Bronze symbol + Ink wordmark
 */

interface VaeloLogoProps {
  variant?: "full" | "symbol" | "wordmark" | "stacked";
  colorMode?: "dark" | "light" | "accent";
  className?: string;
  symbolSize?: number;
}

/**
 * The constructed V mark — two converging geometric strokes with unequal weight.
 * Extracted from the approved identity system (vaelo-identity-system.html).
 */
function VSymbol({
  color = "currentColor",
  size = 40,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Left arm — heavy stroke */}
      <polygon points="20,20 43,20 62,98" fill={color} />
      {/* Right arm — hairline stroke */}
      <polygon points="87,20 99,20 62,98" fill={color} />
    </svg>
  );
}

export function VaeloLogo({
  variant = "full",
  colorMode = "dark",
  className = "",
  symbolSize,
}: VaeloLogoProps) {
  // Resolve colors based on mode
  const symbolColor =
    colorMode === "light"
      ? "var(--color-paper)"
      : colorMode === "accent"
        ? "var(--color-bronze)"
        : "var(--color-ink)";

  const wordmarkColor =
    colorMode === "light" ? "var(--color-paper)" : "var(--color-ink)";

  // Wordmark element — Source Serif 4, weight 560 equivalent (semibold)
  const Wordmark = ({ size = "text-2xl" }: { size?: string }) => (
    <span
      className={`font-serif font-semibold tracking-tight leading-none ${size}`}
      style={{ color: wordmarkColor, letterSpacing: "-0.015em" }}
    >
      Vaelo
    </span>
  );

  if (variant === "symbol") {
    return (
      <VSymbol
        color={symbolColor}
        size={symbolSize ?? 40}
        className={className}
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={className}>
        <Wordmark />
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span
        className={`inline-flex flex-col items-center gap-2 ${className}`}
      >
        <VSymbol color={symbolColor} size={symbolSize ?? 48} />
        <Wordmark size="text-xl" />
      </span>
    );
  }

  // Default: "full" — horizontal lockup
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <VSymbol color={symbolColor} size={symbolSize ?? 32} />
      <Wordmark />
    </span>
  );
}
