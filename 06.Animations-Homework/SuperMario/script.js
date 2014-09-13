window.onload = function () {
    // Background with SVG
    var svgNS = 'http://www.w3.org/2000/svg';

    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('id', 'the-svg');
    svg.setAttribute('width', '256');
    svg.setAttribute('height', '240');
    document.body.appendChild(svg);

    //two moving background images
    var backgroundImage1 = document.createElementNS(svgNS, 'image');
    backgroundImage1.setAttribute('x', '0');
    backgroundImage1.setAttribute('y', '0');
    backgroundImage1.setAttribute('width', '256');
    backgroundImage1.setAttribute('height', '240');
    backgroundImage1.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'background.png');
    backgroundImage1.innerHTML = '<animateTransform attributeName="transform" begin="0s" dur="10s" type="translate" from="256 0" to="0 0" repeatCount="indefinite" />';
    document.getElementById('the-svg').appendChild(backgroundImage1);

    var backgroundImage2 = document.createElementNS(svgNS, 'image');
    backgroundImage2.setAttribute('x', '0');
    backgroundImage2.setAttribute('y', '0');
    backgroundImage2.setAttribute('width', '256');
    backgroundImage2.setAttribute('height', '240');
    backgroundImage2.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'background.png');
    backgroundImage2.innerHTML = '<animateTransform attributeName="transform" begin="0s" dur="10s" type="translate" from="0 0" to="-256 0" repeatCount="indefinite" />';
    document.getElementById('the-svg').appendChild(backgroundImage2);

    // Canvas with Kinetic JS - Drawing Mario
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 256,
        height: 240
    });

    var layer = new Kinetic.Layer();

    var imageObj = new Image();
    imageObj.onload = function () {
        var mario = new Kinetic.Sprite({
            x: 120,
            y: 177,
            image: imageObj,
            animation: 'idle',
            animations: {
                idle: [
                    // x, y, width, height
                    //big mario
                    275, 86, 16, 32,
                    246, 86, 16, 32,
                    215, 86, 16, 32,
                    //small mario
                    275, 19, 16, 32,
                    247, 19, 16, 32,
                    216, 19, 16, 32,
                ]
            },
            frameRate: 6,
            frameIndex: 0
        });

        layer.add(mario);

        stage.add(layer);

        // start sprite animation
        mario.start();
    };

    imageObj.src = "supermario.gif";

    
}