var c = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < c.length; i++) {
  c[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
}
