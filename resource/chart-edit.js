// Moris Chart

Morris.Bar({
    element: 'bar-example',
    data: [
        { y: 'A', a: 100 },
        { y: 'B', a: 75 },
        { y: 'C', a: 50 },
        { y: 'D', a: 75 },
        { y: 'E', a: 50 }
    ],
    xkey: ['y'],
    ykeys: ['a'],
    labels: ['']
});
// chart 2
Morris.Bar({
    element: 'bar-example2',
    data: [
        { y: 'A', a: 100 },
        { y: 'B', a: 75 },
        { y: 'C', a: 50 },
        { y: 'D', a: 75 },
        { y: 'E', a: 50 }
    ],
    xkey: ['y'],
    ykeys: ['a'],
    labels: ['']
});

// Moris Donut
Morris.Donut({
    element: 'donut-example',
    data: [
        { label: "Not Started", value: 2 },
        { label: "Ongoing", value: 1 },
        { label: "Fnished", value: 2 }
    ],
    colors: ['#ff0000', '#ffa500', '#004e00']
});
// Pie Chart Google
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Type', 'Percentage'],
        ['FireFighter', 11],
        ['Fire Rescuer', 2],
        ['First Aider', 2],
        ['No Traning', 2]
    ]);

    var options = {
        title: 'Classification Of Employees',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}