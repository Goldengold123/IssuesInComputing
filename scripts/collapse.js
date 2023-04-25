/*
 * Author: Grace Pu
 * Date: April 25
 * Description: JavaScript file for opening and closing the collapsible content
 */

var c = document.getElementsByClassName("collapse"); // get all elements with className collapse
var i;

// for each element with className collapse, toggle active when it is clicked
for (i = 0; i < c.length; i++) {
  c[i].addEventListener("click", function () {
    // when clicked
    this.classList.toggle("active"); // toggle active
    var content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block"; // next element is flipped (show -> hide and hide -> show)
  });
}
