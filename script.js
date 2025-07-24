
function toggleTheme() {
  document.body.classList.toggle('light');
}

tsParticles.load("tsparticles", {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: { resize: true },
  },
  particles: {
    color: { value: "#FFD700" },
    links: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true,
      speed: 0.3,
      straight: false
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80
    },
    opacity: {
      value: 0.5,
      random: true
    },
    shape: { type: "circle" },
    size: {
      value: { min: 0.5, max: 1.5 },
      random: true
    }
  },
  detectRetina: true
});
