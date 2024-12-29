module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Dosis"', 'sans-serif'], // Default font for most elements
        geo: ['"Geo"', 'sans-serif'],   // Optional for specific use cases
      },
      animation: {
        "text-flicker": "text-flicker 1.5s infinite",
        "gradient-move": "gradient-move 10s ease infinite",
        floating: "floating 6s ease-in-out infinite",
        rotate: "rotate 15s linear infinite",
      },
      keyframes: {
        "text-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "vivid-gradient":
          "linear-gradient(120deg, #ff6b6b, #fbc531, #4cd137, #00a8ff, #9c88ff)",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      textShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
        vivid: "0 0 15px #fbc531, 0 0 30px #fbc531, 0 0 45px #fbc531",
      },
    },
  },
  plugins: [],
};
