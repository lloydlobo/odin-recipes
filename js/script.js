//  hamburger menu functionality
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//

// create 'data attributes' in index.html to toggle
navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
  }
});

// //
// // bot stuff - github integration
// //
// const critical = require("critical");

// critical.generate({
//   // inline the generated critical-path CSS
//   // - true generates HTML
//   // - false generates CSS
//   inline: true,

//   // Your base directory
//   base: "dist/",

//   // HTML source
//   html: "<html>...</html>",

//   // HTML source file
//   src: "index.html",

//   // Your CSS Files (optional)
//   css: ["dist/style.css"],

//   // Viewport width
//   width: 1300,

//   // Viewport height
//   height: 900,

//   // Output results to file
//   target: {
//     css: "critical.css",
//     html: "index-critical.html",
//     uncritical: "uncritical.css",
//   },

//   // Extract inlined styles from referenced stylesheets
//   extract: true,

//   // ignore CSS rules
//   ignore: {
//     atrule: ["@font-face"],
//     rule: [/some-regexp/],
//     decl: (node, value) => /big-image\.png/.test(value),
//   },
// });
