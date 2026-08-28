"use client";

import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./animations/Reveal";

function Counter({
  from,
  to,
  duration = 1.2,
  delay = 0,
  format,
}: {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  format: (value: number) => string;
}) {
  const reducedMotion = useReducedMotion();
  const count = useMotionValue(reducedMotion ? to : from);
  const rounded = useTransform(count, (latest) => format(latest));
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (reducedMotion || hasTriggered) return;
    
    // We start the animation only once the component mounts (on client)
    const timeout = setTimeout(() => {
      animate(count, to, {
        duration,
        ease: "easeOut",
      });
      setHasTriggered(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [count, to, duration, delay, reducedMotion, hasTriggered]);

  return <motion.span>{rounded}</motion.span>;
}

export function LiveModelPreview() {
  const reducedMotion = useReducedMotion();
  // Hero entrance animation finishes around 0.4s. 
  // We'll delay the numbers slightly so they start after the card reveals.
  const baseDelay = 0.6; 
  const duration = 1.2;

  return (
    <Reveal delay={0.2} className="relative border border-stone-line bg-paper shadow-sm p-1 rounded-sm w-full">
      <div className="border border-stone-line p-6 bg-paper-dim/50">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-line">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft font-semibold">Financial Model Preview</h3>
          <span className="font-mono text-xs text-bronze-deep bg-bronze-tint px-2 py-1 rounded-sm">LIVE MODEL</span>
        </div>
        
        <div className="space-y-3 font-mono text-sm">
          <div className="flex justify-between py-2 border-b border-dashed border-stone-line">
            <span className="text-ink-soft">FY24 Revenue</span>
            <span className="text-ink font-medium tabular-nums">
              <Counter 
                from={0} 
                to={18.6} 
                delay={baseDelay} 
                duration={duration} 
                format={(v) => `₹${v.toFixed(1)} Cr`} 
              />
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-dashed border-stone-line">
            <span className="text-ink-soft">Current Ratio</span>
            <span className="text-ink font-medium tabular-nums">
              <Counter 
                from={0} 
                to={1.8} 
                delay={baseDelay + 0.1} 
                duration={duration} 
                format={(v) => `${v.toFixed(2)}x`} 
              />
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-dashed border-stone-line">
            <span className="text-ink-soft">DSCR</span>
            <span className="text-ink font-medium tabular-nums">
              <Counter 
                from={0} 
                to={1.45} 
                delay={baseDelay + 0.2} 
                duration={duration} 
                format={(v) => `${v.toFixed(2)}x`} 
              />
            </span>
          </div>
          <div className="flex justify-between pt-4 mt-2">
            <span className="text-ink font-semibold">Working Capital Gap</span>
            <span className="text-bronze font-bold text-lg tabular-nums">
              <Counter 
                from={0} 
                to={2.4} 
                delay={baseDelay + 0.4} 
                duration={duration} 
                format={(v) => `₹${v.toFixed(1)} Cr`} 
              />
            </span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-stone-line">
          <div className="w-full bg-paper-dim h-1.5 rounded-full overflow-hidden">
            <motion.div 
              initial={reducedMotion ? { width: "72%" } : { width: "0%" }}
              animate={{ width: "72%" }}
              transition={{ delay: baseDelay + 0.8, duration: 0.8, ease: "easeOut" }}
              className="bg-bronze h-full"
            />
          </div>
          <p className="mt-2 text-[10px] font-mono text-ink-soft uppercase text-right">Financial Health Score: Strong</p>
        </div>
      </div>
    </Reveal>
  );
}
