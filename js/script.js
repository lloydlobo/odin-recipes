// * responsive navbar: navbar__nav-menu and navbar__hamburger menu
const navbarHamburger = document.querySelector(".navbar__hamburger");
const navbarNavMenu = document.querySelector(".navbar__nav-menu");

navbarHamburger.addEventListener("click", () => {
  navbarHamburger.classList.toggle("active");
  navbarNavMenu.classList.toggle("active");
});

//  * make sure the menu closes when clock on any link
document.querySelectorAll(".navbar__nav-menu__nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    navbarHamburger.classList.remove("active");
    navbarNavMenu.classList.remove("active");
  })
);

// make sure the menu closes when click on any link

//
// old navigation code 20220302124949
//
// //  hamburger menu functionality
// const primaryNav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");

// //

// // create 'data attributes' in index.html to toggle
// // Element.setCapture() is deprecated. Use Element.setPointerCapture() instead.
// navToggle.addEventListener("click", () => {
//   const visibility = primaryNav.getAttribute("data-visible");
//   if (visibility === "false") {
//     primaryNav.setAttribute("data-visible", true);
//   } else if (visibility === "true") {
//     primaryNav.setAttribute("data-visible", false);
//   }
// });
