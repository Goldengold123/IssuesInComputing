includeHTML = function () {
  var x, element, file, xhttp;
  x = document.getElementsByTagName("*");
  for (var i = 0; i < x.length; i++) {
    element = x[i];
    file = element.getAttribute("include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          element.innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};
