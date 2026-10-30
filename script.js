// Smooth fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Scroll to top button
const btn = document.createElement("button");
btn.innerHTML = "↑";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "12px 18px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#d4af37";
btn.style.color = "#000";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.fontSize = "20px";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});