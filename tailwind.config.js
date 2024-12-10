import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
  },
  plugins: [
    require('daisyui'),
    require("tailwindcss-animate"),
    addVariablesForColors,
  ],
};

// Custom Plugin: Add Variables for Colors
function addVariablesForColors({ addBase, theme }) {
  const flattenColorPalette = (colors) =>
    Object.entries(colors).reduce((flat, [key, value]) => {
      if (typeof value === 'object' && value !== null) {
        for (const [subKey, subValue] of Object.entries(value)) {
          flat[`${key}-${subKey}`] = subValue;
        }
      } else {
        flat[key] = value;
      }
      return flat;
    }, {});

  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
