/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.js",
    "./resources/js/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(222 47% 6%)",
        foreground: "hsl(210 40% 96%)",
        card: "hsl(222 47% 9%)",
        "card-foreground": "hsl(210 40% 96%)",
        popover: "hsl(222 47% 9%)",
        "popover-foreground": "hsl(210 40% 96%)",
        primary: "hsl(174 72% 56%)",
        "primary-foreground": "hsl(222 47% 6%)",
        secondary: "hsl(222 30% 14%)",
        "secondary-foreground": "hsl(210 40% 96%)",
        muted: "hsl(222 30% 18%)",
        "muted-foreground": "hsl(215 20% 55%)",
        accent: "hsl(38 92% 60%)",
        "accent-foreground": "hsl(222 47% 6%)",
        destructive: "hsl(0 84.2% 60.2%)",
        "destructive-foreground": "hsl(210 40% 98%)",
        border: "hsl(222 30% 18%)",
        input: "hsl(222 30% 18%)",
        ring: "hsl(174 72% 56%)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
};
