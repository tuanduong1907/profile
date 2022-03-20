module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#E2E8F0",
        "gray-color": "#94a3b8",
        "dark-gray": "#1e293b",
        "blue-color": "#38bdf8",
        "pink-color": "#f472b6",
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(90.06deg, #2cccff -4.45%, #22dfbf 104.12%)`,
        "secondary-gradient": `linear-gradient(to right top,#fc6c8f,#ffb86c)`,
      },
      fontFamily: {
        logo: ["Permanent Marker", "cursive"],
      },
      blur: {
        "primary-blur": `blur(300px);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);`,
      },
    },
  },
  plugins: [],
};
