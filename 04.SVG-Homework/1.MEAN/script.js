window.onload = function () {
    var svgNS = 'http://www.w3.org/2000/svg';

    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('id', 'the-svg');
    svg.setAttribute('width', '800');
    svg.setAttribute('height', '600');
    document.body.appendChild(svg);

    //Mongo
    var M = document.createElementNS(svgNS, 'text');
    M.innerHTML = 'M';
    M.setAttribute('x', 1);
    M.setAttribute('y', 64);
    M.setAttribute('style', 'font-family: verdana; font-size: 30px; font-weight: bold; fill: #3E3F37');
    document.getElementById('the-svg').appendChild(M);

    var circleMongo = document.createElementNS(svgNS, 'circle');
    circleMongo.setAttribute('cx', 102);
    circleMongo.setAttribute('cy', 54);
    circleMongo.setAttribute('r', 53);
    circleMongo.setAttribute('fill', '#3E3F37');
    document.getElementById('the-svg').appendChild(circleMongo);

    var leftPartOfLeaf = document.createElementNS(svgNS, 'path');
    leftPartOfLeaf.setAttribute('d', 'M102,55 L102,23 Q70,60 102,78');
    leftPartOfLeaf.setAttribute('style', 'fill: #5EB14A');
    document.getElementById('the-svg').appendChild(leftPartOfLeaf);

    var rightPartOfLeaf = document.createElementNS(svgNS, 'path');
    rightPartOfLeaf.setAttribute('d', 'M102,55 L102,23 Q134,60 102,78');
    rightPartOfLeaf.setAttribute('style', 'fill: #449644');
    document.getElementById('the-svg').appendChild(rightPartOfLeaf);

    //Express
    var E = document.createElementNS(svgNS, 'text');
    E.innerHTML = 'E';
    E.setAttribute('x', 1);
    E.setAttribute('y', 117);
    E.setAttribute('style', 'font-family: verdana; font-size: 30px; font-weight: bold; fill: #282827');
    document.getElementById('the-svg').appendChild(E);

    var circleExpress = document.createElementNS(svgNS, 'circle');
    circleExpress.setAttribute('cx', 102);
    circleExpress.setAttribute('cy', 107);
    circleExpress.setAttribute('r', 53);
    circleExpress.setAttribute('fill', '#282827');
    document.getElementById('the-svg').appendChild(circleExpress);

    var expressText = document.createElementNS(svgNS, 'text');
    expressText.innerHTML = 'express';
    expressText.setAttribute('x', 57);
    expressText.setAttribute('y', 114);
    expressText.setAttribute('style', 'font-family: Arial; font-size: 24px; letter-spacing: 1; fill: #FFFFFF');
    document.getElementById('the-svg').appendChild(expressText);

    //Angular
    var A = document.createElementNS(svgNS, 'text');
    A.innerHTML = 'A';
    A.setAttribute('x', 1);
    A.setAttribute('y', 177);
    A.setAttribute('style', 'font-family: verdana; font-size: 30px; font-weight: bold; fill: #E23337');
    document.getElementById('the-svg').appendChild(A);

    var circleAngular = document.createElementNS(svgNS, 'circle');
    circleAngular.setAttribute('cx', 102);
    circleAngular.setAttribute('cy', 167);
    circleAngular.setAttribute('r', 53);
    circleAngular.setAttribute('fill', '#E23337');
    document.getElementById('the-svg').appendChild(circleAngular);

    var frameOfA = document.createElementNS(svgNS, 'polygon');
    frameOfA.setAttribute('points', '76,182 71,147 102,136 133,147 128,182 126,177 130,149 102,139 74,149 78,177');
    frameOfA.setAttribute('style', 'fill: #B3B3B3');
    document.getElementById('the-svg').appendChild(frameOfA);

    var darkRedPart = document.createElementNS(svgNS, 'polygon');
    darkRedPart.setAttribute('points', '126,177 130,149 102,139 102,170');
    darkRedPart.setAttribute('style', 'fill: #B63032')
    document.getElementById('the-svg').appendChild(darkRedPart);

    var leftPartOfA = document.createElementNS(svgNS, 'polygon');
    leftPartOfA.setAttribute('points', '102,142 89,172 96,171 102,155');
    leftPartOfA.setAttribute('style', 'fill: #FFFFFF');
    document.getElementById('the-svg').appendChild(leftPartOfA);

    var rightPartOfA = document.createElementNS(svgNS, 'polygon');
    rightPartOfA.setAttribute('points', '102,142 115,170 108,171 102, 155');
    rightPartOfA.setAttribute('style', 'fill: #B3B3B3');
    document.getElementById('the-svg').appendChild(rightPartOfA);

    //Node
    var N = document.createElementNS(svgNS, 'text');
    N.innerHTML = 'N';
    N.setAttribute('x', 1);
    N.setAttribute('y', 231);
    N.setAttribute('style', 'font-family: verdana; font-size: 30px; font-weight: bold; fill: #8EC74E');
    document.getElementById('the-svg').appendChild(N);

    var circleNode = document.createElementNS(svgNS, 'circle');
    circleNode.setAttribute('cx', 102);
    circleNode.setAttribute('cy', 221);
    circleNode.setAttribute('r', 53);
    circleNode.setAttribute('fill', '#8EC74E');
    document.getElementById('the-svg').appendChild(circleNode);

    var letterN = document.createElementNS(svgNS, 'polygon');
    letterN.setAttribute('points', '61,232 61,220 69,215 77,220 77,232 72,228 72,222 69,220 66,222 66,228');
    letterN.setAttribute('style', 'fill: #47493F');
    document.getElementById('the-svg').appendChild(letterN);

    var letterO = document.createElementNS(svgNS, 'polygon');
    letterO.setAttribute('points', '83,229 83,220 91,215 99,220 99,229 91,234');
    letterO.setAttribute('style', 'fill: #FFFFFF');
    document.getElementById('the-svg').appendChild(letterO);

    var letterD = document.createElementNS(svgNS, 'polygon');
    letterD.setAttribute('points', '106,220 106,229 114,234 122,229 122,207 117,204 117,217 114,215');
    letterD.setAttribute('style', 'fill: #47493F');
    document.getElementById('the-svg').appendChild(letterD);

    var holeInD = document.createElementNS(svgNS, 'polygon');
    holeInD.setAttribute('points', '111,226 114,228 117,226 117,223 114,221 111,223');
    holeInD.setAttribute('style', 'fill: #8EC74E');
    document.getElementById('the-svg').appendChild(holeInD);

    var letterE = document.createElementNS(svgNS, 'polygon');
    letterE.setAttribute('points', '129,229 129,220 136,215 144,220 144,222 140,225 140,223 136,221 133,223 133,226 141,230 137,233');
    letterE.setAttribute('style', 'fill: #47493F');
    document.getElementById('the-svg').appendChild(letterE);

    var ePoint = document.createElementNS(svgNS, 'circle');
    ePoint.setAttribute('cx', 137);
    ePoint.setAttribute('cy', 224);
    ePoint.setAttribute('r', 2);
    ePoint.setAttribute('style', 'fill: #FFFFFF');
    document.getElementById('the-svg').appendChild(ePoint);
}