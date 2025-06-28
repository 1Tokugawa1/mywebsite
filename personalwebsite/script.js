// Handle show/hide of specific sections
function toggleVisibility(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === "none" ? "block" : "none";
  }
}

// Toggle mobile navigation menu
function toggleMenu() {
  const navList = document.querySelector('nav ul');
  if (navList) {
    navList.classList.toggle('active');
  }
}

// Enable dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Add smooth scrolling to all anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
