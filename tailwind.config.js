import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#1f4f3d",
        "on-secondary": "#013827",
        "surface-dim": "#131313",
        "on-tertiary-fixed-variant": "#5b4300",
        "secondary-fixed": "#baeed4",
        "on-background": "#e5e2e1",
        "surface": "#131313",
        "tertiary-fixed-dim": "#e6c274",
        "on-secondary-fixed": "#002115",
        "surface-bright": "#3a3939",
        "on-tertiary-container": "#e2be70",
        "surface-container": "#201f1f",
        "primary": "#8dd6a6",
        "outline-variant": "#404941",
        "primary-container": "#0a5c36",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-highest": "#353534",
        "inverse-primary": "#216b43",
        "secondary-container": "#21523f",
        "surface-variant": "#353534",
        "primary-fixed-dim": "#8dd6a6",
        "on-error": "#690005",
        "tertiary-container": "#664c06",
        "on-tertiary": "#3f2e00",
        "secondary-fixed-dim": "#9fd1b9",
        "on-primary": "#00391e",
        "on-secondary-container": "#91c3ab",
        "surface-container-high": "#2a2a2a",
        "primary-fixed": "#a8f3c1",
        "on-error-container": "#ffdad6",
        "on-primary-fixed": "#002110",
        "tertiary": "#e6c274",
        "inverse-on-surface": "#313030",
        "on-primary-fixed-variant": "#00522e",
        "background": "#131313",
        "surface-tint": "#8dd6a6",
        "surface-container-low": "#1c1b1b",
        "error": "#ffb4ab",
        "on-primary-container": "#89d2a2",
        "outline": "#89938a",
        "on-tertiary-fixed": "#251a00",
        "secondary": "#9fd1b9",
        "on-surface": "#e5e2e1",
        "error-container": "#93000a",
        "inverse-surface": "#e5e2e1",
        "on-surface-variant": "#bfc9bf",
        "tertiary-fixed": "#ffdf9d"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "stack-sm": "12px",
        "stack-lg": "40px",
        "container-padding": "24px",
        "gutter": "16px",
        "base": "8px",
        "stack-md": "24px"
      },
      fontFamily: {
        "body-md": ["Manrope"],
        "stat-lg": ["Manrope"],
        "headline-xl": ["Manrope"],
        "label-lg": ["Manrope"],
        "headline-lg": ["Manrope"]
      },
      fontSize: {
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "stat-lg": ["24px", { "lineHeight": "32px", "fontWeight": "500" }],
        "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-lg": ["14px", { "lineHeight": "20px", "fontWeight": "600" }],
        "headline-lg": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "600" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};

export default config;
