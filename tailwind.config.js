/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      minWidth: {
        '30%': '30%',
        '15%': '15%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "color-scheme": "dark",
          "primary": "#D4163C",
          "secondary": "#4685AF",
          "accent": "#4685AF",
          "neutral": "#1E293B",
          "neutral-focus": "#C0B6B4",
          "base-100": "#151820",
          "info": "#0CA5E9",
          "info": "#4685AF",
          "success": "#C1DD97",
          "warning": "#E4C25E",
          "error": "#D27E81",
        }
      },
      {
        light: {
          "color-scheme": "light",
          "primary": "#D4163C",
          "secondary": "#4685AF",
          "accent": "#4685AF",
          "neutral": "#2B2E40",
          "base-100": "#D5D5D9",
          "info": "#4685AF",
          "success": "#C1DD97",
          "warning": "#E4C25E",
          "error": "#D27E81",
        },
      }
    ]
  }
}

