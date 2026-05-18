import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/utils/styles";

interface HorizontalScrollingListProps {
  className?: string;
  listClassName?: string;
  children: ReactNode;
  speed?: number;
  direction?: "left-to-right" | "right-to-left";
}

export default function HorizontalScrollingList({ 
  children, 
  direction = "left-to-right", 
  className, 
  listClassName, 
  speed = 50 
}: HorizontalScrollingListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;

    if (!container || !list) return;

    const updateRepeatCount = () => {
      const containerWidth = container.clientWidth;
      const singleSetWidth = list.scrollWidth / repeatCount;

      if (!containerWidth || !singleSetWidth) return;

      const nextRepeatCount = Math.max(2, Math.ceil((containerWidth * 2) / singleSetWidth));

      setRepeatCount((currentRepeatCount) =>
        currentRepeatCount === nextRepeatCount ? currentRepeatCount : nextRepeatCount
      );
    };

    updateRepeatCount();

    const resizeObserver = new ResizeObserver(updateRepeatCount);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [repeatCount, children]);

  useEffect(() => {
    if (!listRef.current) return;

    const list = listRef.current;
    const listWidth = list.scrollWidth / repeatCount;
    const duration = listWidth / speed;

    gsap.killTweensOf(list);

    if (direction === "right-to-left") {
      gsap.set(list, { x: -listWidth });
      gsap.to(list, { x: 0, duration, ease: "none", repeat: -1 });
    } else {
      gsap.set(list, { x: 0 });
      gsap.to(list, { x: -listWidth, duration, ease: "none", repeat: -1 });
    }
  }, [direction, repeatCount, speed]);

  return (
    <div ref={containerRef} className={cn("overflow-hidden bg-charcoal-gray/5 py-4", className)}>
      <ul ref={listRef} className={cn("flex gap-4 w-max", listClassName)}>
        {Array.from({ length: repeatCount }, (_, index) => (
          <Fragment key={index}>{children}</Fragment>
        ))}
      </ul>
    </div>
  );
}