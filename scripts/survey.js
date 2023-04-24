function submit() {
  var cs = 0;
  var ce = 0;
  var it = 0;

  var q1 = document.querySelector('input[name="q1"]:checked').value;
  var q2 = document.querySelector('input[name="q2"]:checked').value;
  var q3 = document.querySelector('input[name="q3"]:checked').value;
  var q4 = document.querySelector('input[name="q4"]:checked').value;
  var q5 = document.querySelector('input[name="q5"]:checked').value;
  var q6 = document.querySelector('input[name="q6"]:checked').value;
  var q7 = document.querySelector('input[name="q7"]:checked').value;
  var q8 = document.querySelector('input[name="q8"]:checked').value;
  var q9 = document.querySelector('input[name="q9"]:checked').value;

  if (q1 == "csce") {
    cs++;
    ce++;
  } else {
    it++;
  }

  if (q2 == "cs") cs++;
  else if (q2 == "ce") ce++;
  else it++;

  if (q3 == "cs") cs++;
  else {
    ce++;
    it++;
  }

  if (q4 == "cs") cs++;
  else {
    ce++;
    it++;
  }

  if (q5 == "ce") ce++;
  else {
    cs++;
    it++;
  }

  if (q6 == "it") it++;
  else {
    cs++;
    ce++;
  }

  if (q7 == "csit") {
    cs++;
    it++;
  } else ce++;

  if (q8 == "cs") cs++;
  else {
    ce++;
    it++;
  }

  if (q9 == "cs") cs++;
  else if (q9 == "it") it++;
  else ce++;

  document.getElementById("csresult").innerHTML = "CS: " + cs;
  document.getElementById("ceresult").innerHTML = "CE: " + ce;
  document.getElementById("itresult").innerHTML = "IT: " + it;
}
