import { useEffect, useRef, type ReactNode } from "react";
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
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const list = listRef.current;
    const listWidth = list.scrollWidth / 2;
    const duration = listWidth / speed;

    if (direction === "right-to-left") {
      gsap.set(list, { x: -listWidth });
      gsap.to(list, { x: 0, duration, ease: "none", repeat: -1 });
    } else {
      gsap.to(list, { x: -listWidth, duration, ease: "none", repeat: -1 });
    }
  }, [direction]);

  return (
    <div className={cn("overflow-hidden bg-charcoal-gray/5 py-4", className)}>
      <ul ref={listRef} className={cn("flex gap-4 w-max", listClassName)}>
        {children}
        {children}
      </ul>
    </div>
  );
}