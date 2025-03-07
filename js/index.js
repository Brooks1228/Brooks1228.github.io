document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.querySelector("body");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.overflow = "auto";
    mainContent.id = "main-content";
  }, 6000); // Adjusted to match the total duration of the animations
});
