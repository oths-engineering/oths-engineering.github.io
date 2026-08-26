const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

function nextWednesday() {
  const date = new Date();
  const days = (3 - date.getDay() + 7) % 7 || 7;
  date.setDate(date.getDate() + days);
  date.setHours(15, 0, 0, 0);
  if (date.getDay() === 3 && new Date().getHours() < 15) date.setDate(date.getDate() - 7);
  return date;
}
function updateCountdown() {
  const target = nextWednesday();
  const difference = Math.max(0, target - new Date());
  const values = [
    Math.floor(difference / 86400000),
    Math.floor(difference / 3600000) % 24,
    Math.floor(difference / 60000) % 60,
    Math.floor(difference / 1000) % 60
  ];
  ["days", "hours", "minutes", "seconds"].forEach((id, index) => {
    document.getElementById(id).textContent = String(values[index]).padStart(2, "0");
  });
  document.getElementById("next-date").textContent = `· ${target.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;
}
updateCountdown();
setInterval(updateCountdown, 1000);
