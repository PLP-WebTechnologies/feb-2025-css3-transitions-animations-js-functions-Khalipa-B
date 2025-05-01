function applyUserPreferences() {
  const theme = localStorage.getItem("theme");
  const savedName = localStorage.getItem("username");
  if (theme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  }
  if (savedName) {
    document.getElementById("greeting").textContent = `Hello, ${savedName}!`;
  }
}

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
  playClickSound();
}

function triggerAnimation() {
  const box = document.getElementById("box");
  box.classList.add("move");
  setTimeout(() => {
    box.classList.remove("move");
  }, 800);
  playClickSound();
}

function saveName(event) {
  event.preventDefault();
  const name = document.getElementById("username").value;
  localStorage.setItem("username", name);
  document.getElementById("greeting").textContent = `Hello, ${name}!`;
  playClickSound();
}

function playClickSound() {
  const sound = document.getElementById("clickSound");
  sound.play();
}

window.onload = applyUserPreferences;
