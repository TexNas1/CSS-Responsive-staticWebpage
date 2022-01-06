const $menuSection = document.querySelector(".menuscroll");
const $menuItems = document.querySelectorAll(".menuItem");
const $navDropDown = document.getElementById("navDropDown");
const $menuSvg = document.getElementById("menu");
const $mainContent = document.querySelector("main");

// toggling hamburger menu on click
$menuSvg.addEventListener("click", function (event) {
  $navDropDown.classList.toggle("display");
  $mainContent.classList.toggle("pushDown");
  // $navlinkDesktop.classList.toggle("display");
});

document.addEventListener("scroll", function () {
  // first checking whether menu is visible in the viewport or not
  // source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
  const DOMrect = $menuSection.getBoundingClientRect();
  if (
    DOMrect.top >= 0 &&
    DOMrect.left >= 0 &&
    DOMrect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    DOMrect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    $menuItems.forEach(function (e) {
      e.style.animationPlayState = "running";
    });
  } else {
    // pausing the animation as the element left the viewport
    $menuItems.forEach(function (e) {
      e.style.animationPlayState = "paused";
    });
  }
});
