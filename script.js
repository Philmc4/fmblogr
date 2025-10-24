const connectBtn = document.getElementById("connect-btn");
const connectIcon = document.getElementById("desktop-icon");
const desktopMenu = document.getElementById("desktop-dropdown");
const mobileOpen = document.getElementById("mobile-menu-open");
const mobileClose = document.getElementById("mobile-menu-close");
const mobileConnectBtn = document.getElementById("mobile-connect-btn");
const mobileIcon = document.getElementById("mobile-icon");
const mobileDropdown = document.getElementById("mobile-dropdown");
const mobileNavigation = document.getElementById("mobilie-navigation-menu");

connectBtn.addEventListener("click", (e) => {
  desktopMenu.classList.toggle("hidden");
  connectIcon.classList.toggle("rotate");
});

mobileConnectBtn.addEventListener("click", (e) => {
  mobileDropdown.classList.toggle("hidden");
  mobileIcon.classList.toggle("rotate");
});

mobileOpen.addEventListener("click", (e) => {
  mobileOpen.classList.add("hidden");
  mobileClose.classList.remove("hidden");
  mobileNavigation.classList.remove("hidden");
});

mobileClose.addEventListener("click", (e) => {
  mobileClose.classList.add("hidden");
  mobileOpen.classList.remove("hidden");
  mobileNavigation.classList.add("hidden");
  mobileDropdown.classList.add("hidden");
  mobileIcon.classList.remove("rotate");
});
