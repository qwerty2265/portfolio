import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getThemeColor(token: string, fallback = "#fff") {
  const rootStyles = getComputedStyle(document.documentElement);
  const value = rootStyles.getPropertyValue(token).trim();
  return value || fallback;
};