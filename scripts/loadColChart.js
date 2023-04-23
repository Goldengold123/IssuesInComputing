google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Job Title", "Salary", { role: "style" }],
    ["Web Developer", 82690, "#5DA9E9"],
    ["Robotics Engineer", 101108, "#5DA9E9"],
    ["Full Stack Developer", 87080, "#5DA9E9"],
    ["Software Engineer", 105772, "#5DA9E9"],
    ["Artificial Intelligence Engineer", 125124, "#5DA9E9"],
    ["Back-End Engineer", 126948, "#5DA9E9"],
    ["Data Scientist", 124223, "#5DA9E9"],
  ]);

  var options = {
    backgroundColor: "#E5F4E3",
    title: "Salaries of Computer Science Careers",
    hAxis: { textStyle: { fontSize: "1px" } },
    chartArea: { width: "80%", height: "75%" },
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("colchart"));
  chart.draw(data, options);
}
