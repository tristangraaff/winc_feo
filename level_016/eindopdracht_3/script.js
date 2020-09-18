const getSidebar = document.querySelector(".nav-sidebar");
const getSidebarUL = document.querySelector(".nav-sidebar ul");
const getSidebarContent = document.querySelectorAll(".nav-sidebar p");
const navbutton = document.querySelector(".btn-toggle-nav");

let toggleNavStatus = false;

navbutton.addEventListener("click", function () {
  if (toggleNavStatus === false) {
    getSidebarUL.style.visibility = "visible";
    getSidebar.style.width = "272px";
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarUL.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    toggleNavStatus = false;
  }
});

const antiqueWhite = document.querySelector(".AW");
const aquamarine = document.querySelector(".A");
const lawnGreen = document.querySelector(".LG");
const navajoWhite = document.querySelector(".NW");
const pink = document.querySelector(".P");
const h1 = document.querySelector("h1");

const closeSidebar = function () {
  getSidebarUL.style.visibility = "hidden";
  getSidebar.style.width = "50px";
  toggleNavStatus = false;
};

antiqueWhite.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("awbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is... Antique White");
  closeSidebar();
});

aquamarine.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("abackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Aquamarine");
  closeSidebar(); 
});

lawnGreen.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("lgbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Lawn Green");
  closeSidebar(); 
});

navajoWhite.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("nwbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Navajo White"); 
  closeSidebar();
});

pink.addEventListener("click", function () {
  document.body.removeAttribute("class");
  document.body.classList.toggle("pbackground");
  h1.innerHTML = ("");
  h1.innerHTML += ("The background color is...  Pink");
  closeSidebar(); 
});



