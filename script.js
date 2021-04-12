function openAG(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

var data = [
  { year: 1991, name: "alpha", value: 15 },
  { year: 1992, name: "alpha", value: 20 }
];

new d3plus.BarChart()
  .config({
    data: data,
    groupBy: "year",
    x: "year",
    y: "value",
    select: "#viz1",
    legend: true
  })
  .render();

var data2 = [
  { year: 1991, name: "alpha", value: 15 },
  { year: 1991, name: "beta", value: 10 },
  { year: 1991, name: "gamma", value: 5 },
  { year: 1991, name: "delta", value: 50 },
  { year: 1992, name: "alpha", value: 20 },
  { year: 1992, name: "beta", value: 10 },
  { year: 1992, name: "gamma", value: 10 },
  { year: 1992, name: "delta", value: 43 },
  { year: 1993, name: "alpha", value: 30 },
  { year: 1993, name: "beta", value: 40 },
  { year: 1993, name: "gamma", value: 20 },
  { year: 1993, name: "delta", value: 17 },
  { year: 1994, name: "alpha", value: 60 },
  { year: 1994, name: "beta", value: 60 },
  { year: 1994, name: "gamma", value: 25 },
  { year: 1994, name: "delta", value: 32 }
];

new d3plus.BarChart()
  .config({
    data: data2,
    x: "year",
    y: "value",
    groupBy: ["name", "year"],
    axes: { ticks: false },
    select: "#viz2"
  })
  .render();

var data3 = [
  { year: "1991", name: "alpha", value: 15 },
  { year: "1992", name: "alpha", value: 34 },
  { year: "1991", name: "alpha2", value: 17 },
  { year: "1992", name: "alpha2", value: 65 },
  { year: "1991", name: "beta", value: 10 },
  { year: "1992", name: "beta", value: 10 },
  { year: "1991", name: "beta2", value: 40 },
  { year: "1992", name: "beta2", value: 38 },
  { year: "1991", name: "gamma", value: 5 },
  { year: "1992", name: "gamma", value: 10 },
  { year: "1991", name: "gamma2", value: 20 },
  { year: "1992", name: "gamma2", value: 34 },
  { year: "1991", name: "delta", value: 50 },
  { year: "1992", name: "delta", value: 43 },
  { year: "1991", name: "delta2", value: 17 },
  { year: "1992", name: "delta2", value: 35 }
];

new d3plus.BoxWhisker()
  .config({
    data: data3,
    groupBy: ["year", "value"],
    x: "year",
    y: "value",
    legend: true,
    select: "#viz3"
  })
  .render();
