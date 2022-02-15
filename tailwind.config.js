const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "Nunito"],
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
