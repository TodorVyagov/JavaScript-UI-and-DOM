window.onload = function () {


    var paper = Raphael(10, 10, 800, 600);

    // Telerik
    var telerikLogo = paper.path('M15 20 L25 10 L55 40 L40 55 L25 40 L55 10 L65 20');
    telerikLogo.attr({
        stroke: 'yellowgreen',
        'stroke-width': 8
    });

    var telerikText = paper.text(150, 35, 'Telerik');
    telerikText.attr({
        'font-family': 'Arial',
        'font-size': '50px',
        'font-weight': 'bold'
    });

    var tradeMark = paper.text(240, 30, '\u00AE');
    tradeMark.attr({
        'font-family': 'Arial',
        'font-size': '15px',
        'font-weight': 'bold'
    });

    var telerikSlogan = paper.text(170, 65, 'Develop experiences');
    telerikSlogan.attr({
        'font-family': 'Arial',
        'font-size': '20px',
    });

    // YouTube
    var you = paper.text(400, 35, 'You');
    you.attr({
        'font-family': 'Impact',
        'font-size': '50px',
    });

    var redRectangle = paper.rect(440, 7, 120, 60, 25);
    redRectangle.attr({
        fill: 'red',
        stroke: 'none'
    });

    var tube = paper.text(500, 35, 'Tube');
    tube.attr({
        'font-family': 'Impact',
        'font-size': '50px',
        fill: '#FFFFFF'
    });
   
}
