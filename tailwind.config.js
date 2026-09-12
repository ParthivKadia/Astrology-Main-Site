/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // All values are pulled from CSS variables defined in
        // src/styles/theme.css — change the theme there, not here.
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        navy: {
          DEFAULT: "var(--color-navy)",
          light: "var(--color-navy-light)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          light: "var(--color-gold-light)",
        },
        sage: {
          DEFAULT: "var(--color-sage)",
          light: "var(--color-sage-light)",
        },
        lavender: {
          DEFAULT: "var(--color-lavender)",
          light: "var(--color-lavender-light)",
        },
        peach: "var(--color-peach)",
        success: "var(--color-success)",
        border: "var(--color-border)",
        body: "var(--color-body-text)",
        footer: {
          bg: "var(--color-footer-bg)",
          text: "var(--color-footer-text)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-button)",
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
