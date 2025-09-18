module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  swDest: "build/sw.js",
  skipWaiting: true,
  clientsClaim: true,
};
