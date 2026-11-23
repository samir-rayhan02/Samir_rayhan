// Scroll korle section gulo animate hoye ashbe
const io = new IntersectionObserver(items => {
  items.forEach(i => { if (i.isIntersecting) i.target.classList.add("show"); });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Contact form
document.getElementById("send").addEventListener("click", () => {
  const n = document.getElementById("n").value.trim();
  const e = document.getElementById("e").value.trim();
  const m = document.getElementById("m").value.trim();
  const out = document.getElementById("out");
  if (!n || !e || !m) {
    out.textContent = "Shob ghor puron koro.";
    return;
  }
  out.textContent = "Thanks " + n + "! Message pathano hoyeche 🚀";
});
