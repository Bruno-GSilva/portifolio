const menu = document.getElementById("menu");
const navbarMenu = document.getElementById("navbar");

menu.addEventListener("click", () => {
  // event.preventDefault()
  navbarMenu.classList.toggle("active");
  menu.classList.toggle("active");
  menu.style.transitionDuration = "1s";
  if (navbarMenu.classList.contains("active")) {
      console.log("ativado");
  }
});
