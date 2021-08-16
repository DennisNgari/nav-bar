const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu-list");
  burger.addEventListener("click", () => {
    nav.classList.toggle("navigation-active");
    burger.classList.toggle("toogle");
  });
};

navSlide();
