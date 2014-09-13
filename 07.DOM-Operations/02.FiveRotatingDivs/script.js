window.onload = function () {
    var x = 200;
    var y = 200;
    var radius = 150;
    generateDivs(x, y, radius);
    var angle = 0;
    rotateDivs();

    function rotateDivs() {
        var divs = document.getElementsByClassName('moving-div');
        var currentX;
        var currentY;
        for (var i = 0, addedAngle = 0, len = divs.length; i < len; i += 1, addedAngle += 72) {
            var currentDiv = divs[i];
            currentX = Math.cos((angle + addedAngle) * Math.PI / 180) * radius + x;
            currentY = Math.sin((angle + addedAngle) * Math.PI / 180) * radius + y;
            currentDiv.style.top = currentX + 'px';
            currentDiv.style.left = currentY + 'px';
        }

        angle += 1;
        if (angle > 360) {
            angle -= 360;
        }

        //setTimeout(rotateDivs, 30);
		requestAnimationFrame(rotateDivs);
    };

    function generateDivs(initialX, initialY, r) {
        var divElement = document.createElement('div');
        divElement.innerHTML = 'Moving box.';
        divElement.className = 'moving-div';
        divElement.style.width = '100px';
        divElement.style.height = '100px';
        divElement.style.color = 'green';
        divElement.style.border = '2px solid yellowgreen';
        divElement.style.borderRadius = '200px';
        divElement.style.textAlign = 'center';
        divElement.style.lineHeight = '100px';

        var dFrag = document.createDocumentFragment();

        var numberOfDivs = 5;
        var currentX;
        var currentY;
        for (var i = 0, angle = 0; i < numberOfDivs; i += 1, angle += 72) {

            // position
            currentX = Math.cos(angle * Math.PI / 180) * r + initialX;
            currentY = Math.sin(angle * Math.PI / 180) * r + initialY;
            divElement.style.position = 'absolute';
            divElement.style.top = currentX + 'px';
            divElement.style.left = currentY + 'px';

            dFrag.appendChild(divElement.cloneNode(true));
        }

        document.body.appendChild(dFrag);
    }
}