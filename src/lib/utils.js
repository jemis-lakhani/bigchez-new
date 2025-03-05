import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A helper function to merge Tailwind classes dynamically.
 * Uses `clsx` to conditionally add classes and `tailwind-merge` to handle conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
