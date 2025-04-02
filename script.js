const modeToggle = document.getElementById("mode-toggle");
let darkMode = true;

modeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? "#1e1e1e" : "#ffffff";
    document.body.style.color = darkMode ? "white" : "black";
    modeToggle.textContent = darkMode ? "🌙" : "☀️";
});