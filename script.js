// Retrieve and apply user preferences from localStorage
function applyUserPreferences() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  }
}

// Store user preference in localStorage and apply theme
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    localStorage.setItem("theme", "light");
    document.body.style.backgroundColor = "#f0f8ff";
    document.body.style.color = "#000";
  } else {
    localStorage.setItem("theme", "dark");
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  }
}

// Trigger box animation
function triggerAnimation() {
  const box = document.getElementById("box");
  box.classList.add("move");
  setTimeout(() => {
    box.classList.remove("move");
  }, 800); // animation duration
}

// Apply preferences on page load
window.onload = applyUserPreferences;
