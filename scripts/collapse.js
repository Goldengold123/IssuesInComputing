var c = document.getElementsByClassName("collapse");

for (var i = 0; i < c.length; i++) {
  c[i].addEventListener("click", function () {
    this.classList.toggle("clicked");
    c[i].nextElementSibling.classList.toggle("show");
  });
}
