import { badgeBaseClass } from "@/styles/components/badge";
import { cn } from "@/utils/styles";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export default function Badge({ className, children }: BadgeProps) {
  return (
    <span className={cn(badgeBaseClass, className)}>
      {children}
    </span>
  );
}