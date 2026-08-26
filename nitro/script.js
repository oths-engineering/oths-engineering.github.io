const button = document.querySelector(".button-small");

if (button && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    button.style.transform = Math.hypot(x, y) < 180
      ? `translate(${x * 0.045}px, ${y * 0.045}px)`
      : "translate(0, 0)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
  });
}
