const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const track = document.querySelector(".slider-track");

track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

let current = 0;
let timer;
const DELAY = 15000;

function activate(index) {
  tabs.forEach((t) => t.classList.remove("active"));
  panels.forEach((p) => p.classList.remove("active"));

  tabs[index].classList.add("active");
  panels[index].classList.add("active");

  current = index;
  resetTimer();
}

function autoSwitch() {
  activate((current + 1) % tabs.length);
}

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(autoSwitch, DELAY);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activate(index));
});

resetTimer();
