function submit() {
  var cs = 0;
  var ce = 0;
  var it = 0;

  var q1 = document.querySelector('input[name="q1"]:checked').value;
  var q2 = document.querySelector('input[name="q1"]:checked').value;
  var q3 = document.querySelector('input[name="q1"]:checked').value;
  var q4 = document.querySelector('input[name="q1"]:checked').value;
  var q5 = document.querySelector('input[name="q1"]:checked').value;
  var q6 = document.querySelector('input[name="q1"]:checked').value;
  var q7 = document.querySelector('input[name="q1"]:checked').value;
  var q8 = document.querySelector('input[name="q1"]:checked').value;
  var q9 = document.querySelector('input[name="q1"]:checked').value;

  if (q1 == "csce") {
    cs++;
    ce++;
  } else {
    it++;
  }

  alert("CS: " + cs + "\nCE: " + ce + "\nIT: " + it);
}
