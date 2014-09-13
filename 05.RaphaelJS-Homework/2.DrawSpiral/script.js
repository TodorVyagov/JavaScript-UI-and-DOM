window.onload = function () {

    var paper = Raphael(10, 10, 800, 600),
        rad = Math.PI / 180,
        spiralRadius = 200,
        spiralDensity = 0.1;

    drawSpiral(200, 200, 5, 0, 0);

    function drawSpiral(cx, cy, r, startAngle, endAngle) {
        var startAngle = startAngle,
            endAngle = endAngle,
            currentRadius = r,
            buffer;

        while (currentRadius < spiralRadius) {
            arc(cx, cy, currentRadius, startAngle, endAngle);

            currentRadius += spiralDensity;
            buffer = startAngle;
            startAngle = endAngle;
            endAngle = buffer + 5;
        }
    }

    function arc(cx, cy, r, startAngle, endAngle) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        paper.path(["M", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2]);
    }

    spiralDensity = 0.4;
    drawSpiral(600, 200, 5, 0, 0);
}