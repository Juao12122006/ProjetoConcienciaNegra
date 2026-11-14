const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const aberto = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.textContent = aberto ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Abre e fecha as respostas da seção "Desmistificando preconceitos".
document.querySelectorAll(".myth-question").forEach(botao => {
  botao.addEventListener("click", () => {
    const item = botao.closest(".myth");
    const aberto = item.classList.toggle("open");
    botao.setAttribute("aria-expanded", aberto);
  });
});

// Botão para voltar ao topo.
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 450);
});
backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Marca no menu a seção que está sendo visualizada.
const sections = document.querySelectorAll("main section[id], main section.hero");
const navLinks = document.querySelectorAll(".nav a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id || "inicio";
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));
