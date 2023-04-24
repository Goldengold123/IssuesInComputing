google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function ceChart() {
  var data = google.visualization.arrayToDataTable([
    ["Job Title", "Salary", { role: "style" }],
    ["Computer Programmer", 93000, "#5DA9E9"],
    ["Software Developer", 110140, "#5DA9E9"],
    ["IT Consultant", 62943, "#5DA9E9"],
    ["Forensic Computer Analyst", 74984, "#5DA9E9"],
  ]);

  var options = {
    backgroundColor: "#E5F4E3",
    title: "Salaries of Computer Engineer Careers",
    hAxis: { textStyle: { fontSize: "1px" } },
    chartArea: { width: "80%", height: "75%" },
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("cechart"));
  chart.draw(data, options);
}
