const path = require("path");
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@comp": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@const": path.resolve(__dirname, "src/constant"),
      "@service": path.resolve(__dirname, "src/service"),
    },
  },
};
