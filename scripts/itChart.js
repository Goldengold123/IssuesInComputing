google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function itChart() {
  var data = google.visualization.arrayToDataTable([
    ["Job Title", "Salary", { role: "style" }],
    ["Computer Technician", 45809, "#5DA9E9"],
    ["Helpdesk Technician", 49743, "#5DA9E9"],
    ["Cybersecurity Specialist", 89115, "#5DA9E9"],
    ["System Administrator", 78645, "#5DA9E9"],
    ["Database Administrator", 84082, "#5DA9E9"],
    ["Network Administrator", 71311, "#5DA9E9"],
    ["Cloud Engineer", 151884, "#5DA9E9"],
  ]);

  var options = {
    backgroundColor: "#E5F4E3",
    title: "Salaries of Information Technology Careers",
    hAxis: { textStyle: { fontSize: "1px" } },
    chartArea: { width: "80%", height: "75%" },
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("colchart"));
  chart.draw(data, options);
}
