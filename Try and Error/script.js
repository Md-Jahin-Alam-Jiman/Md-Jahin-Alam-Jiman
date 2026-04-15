const btn = document.getElementById("contactBtn");
const options = document.getElementById("options");

btn.addEventListener("click", () => {
    options.classList.toggle("hidden");
});