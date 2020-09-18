const button = document.querySelector("#mybutton");

button.addEventListener("click", function () {
  alert("Button clicked");
});

const otherbutton = document.querySelector("#backgroundbutton");

backgroundbutton.addEventListener("click", function () {
  document.body.classList.toggle("red-background");
});
