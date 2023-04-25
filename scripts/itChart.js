google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(itchart);

function itChart() {
  var data = google.visualization.arrayToDataTable([
    ["Job Title", "Salary", { role: "style" }],
    ["Computer Technician", 45809, "#6665DD"],
    ["Helpdesk Technician", 49743, "#6665DD"],
    ["Cybersecurity Specialist", 89115, "#6665DD"],
    ["System Administrator", 78645, "#6665DD"],
    ["Database Administrator", 84082, "#6665DD"],
    ["Network Administrator", 71311, "#6665DD"],
    ["Cloud Engineer", 151884, "#6665DD"],
  ]);

  var options = {
    backgroundColor: "#E5F4E3",
    title: "Salaries of Information Technology Careers",
    hAxis: { textStyle: { fontSize: "1px" } },
    chartArea: { width: "80%", height: "75%" },
    legend: { position: "none" },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById("itchart"));
  chart.draw(data, options);
}
