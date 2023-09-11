module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^from-/
    },
    {
      pattern: /^to-/
    }
  ],
}

