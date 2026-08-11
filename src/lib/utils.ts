import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Our custom typography tokens (text-body-lg, text-h1, etc.) are font-size utilities,
// not text-color utilities. Without this, tailwind-merge sees `text-body-lg` and
// `text-white` as conflicting (both start with `text-`) and drops the color.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['caption', 'body-sm', 'body', 'body-lg', 'h4', 'h3', 'h2', 'h1', 'display'] },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
