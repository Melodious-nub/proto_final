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

// Moris Donut
Morris.Donut({
    element: 'donut-example',
    data: [
        { label: "Not Started", value: 2 },
        { label: "Ongoing", value: 1 },
        { label: "Fnished", value: 2 }
    ],
    colors: ['#ff0000', '#ffa500', '#ee82ee']
});