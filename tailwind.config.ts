import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  two: 'class',
  three: 'class',
  theme: {
    extend: {
      colors: {
        // Theme 1
        't1-main-bg': 'hsl(222, 26%, 31%)',
        't1-toggle-bg': 'hsl(223, 31%, 20%)',
        't1-keypad-bg': 'hsl(223, 31%, 20%)',
        't1-screen-bg': 'hsl(224, 36%, 15%)',
        't1-key-bg': 'hsl(225, 21%, 49%)',
        't1-key-shadow': 'hsl(224, 28%, 35%)',
        't1-key-bg-red': 'hsl(6, 63%, 50%)',
        't1-key-shadow-red': 'hsl(6, 70%, 34%)',
        't1-key-bg-orange': 'hsl(30, 25%, 89%)',
        't1-key-shadow-orange': 'hsl(28, 16%, 65%)',
        't1-text-dark': 'hsl(221, 14%, 31%)',
        't1-text-white': 'hsl(0, 0%, 100%)',

        // Theme 2
        't2-main-bg': 'hsl(0, 0%, 90%)',
        't2-toggle-bg': 'hsl(0, 5%, 81%)',
        't2-keypad-bg': 'hsl(0, 5%, 81%)',
        't2-screen-bg': 'hsl(0, 0%, 93%)',
        't2-key-bg-cyan': 'hsl(185, 42%, 37%)',
        't2-key-shadow-cyan': 'hsl(185, 58%, 25%)',
        't2-key-bg-orange': 'hsl(25, 98%, 40%)',
        't2-key-shadow-orange': 'hsl(25, 99%, 27%)',
        't2-key-bg-yellow': 'hsl(45, 7%, 89%)',
        't2-key-shadow-yellow': 'hsl(35, 11%, 61%)',
        't2-text-dark': 'hsl(60, 10%, 19%)',
        't2-text-white': 'hsl(0, 0%, 100%)',

        // Theme 3
        't3-main-bg': 'hsl(268, 75%, 9%)',
        't3-toggle-bg': 'hsl(268, 71%, 12%)',
        't3-keypad-bg': 'hsl(268, 71%, 12%)',
        't3-screen-bg': 'hsl(268, 71%, 12%)',
        't3-key-bg-violet': 'hsl(281, 89%, 26%)',
        't3-key-shadow-magenta': 'hsl(285, 91%, 52%)',
        't3-key-bg-cyan': 'hsl(176, 100%, 44%)',
        't3-key-shadow-cyan': 'hsl(177, 92%, 70%)',
        't3-key-bg-dark-violet': 'hsl(268, 47%, 21%)',
        't3-key-shadow-dark-magenta': 'hsl(290, 70%, 36%)',
        't3-text-yellow': 'hsl(52, 100%, 62%)',
        't3-text-dark-blue': 'hsl(198, 20%, 13%)',
        't3-text-white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
