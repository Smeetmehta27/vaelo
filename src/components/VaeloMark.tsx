import * as React from "react";

interface VaeloMarkProps extends React.SVGProps<SVGSVGElement> {}

export function VaeloMark({ className, ...props }: VaeloMarkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Left arm — heavy stroke */}
      <polygon points="20,20 43,20 62,98" />
      {/* Right arm — hairline stroke */}
      <polygon points="87,20 99,20 62,98" />
    </svg>
  );
}
