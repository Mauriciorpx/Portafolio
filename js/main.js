const hamburguer = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click", () => {
  hamburguer.classList.remove();
  navMenu.classList.remove();
}))