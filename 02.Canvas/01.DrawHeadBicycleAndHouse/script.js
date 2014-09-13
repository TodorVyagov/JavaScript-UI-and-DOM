window.onload = function () {
    var canvas = document.getElementById('the-canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#AAA';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function drawHeadWithHat(x, y, headFill, headStroke, hatFill, hatStroke) {
        drawHead(x, y, headFill, headStroke);
        drawHat(x, y, hatFill, hatStroke);

        function drawHead(x, y, fill, stroke) {
            //head(circle)
            ctx.fillStyle = fill;
            ctx.strokeStyle = stroke;

            ctx.save();

            ctx.lineWidth = 2;
            ctx.scale(1.15, 1);
            ctx.arc(x - 2, y, 40, 0, 2 * Math.PI);

            ctx.restore();
            ctx.fill();
            ctx.stroke();

            //left eye
            ctx.beginPath();
            ctx.save();
            ctx.scale(1.5, 1);
            ctx.moveTo(0.5 * x + 5, y - 10);
            ctx.arc(0.5 * x, y - 10, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.scale(0.67, 2);
            ctx.arc(x - 20, 0.45 * y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = stroke;
            ctx.fill();

            ctx.restore();

            //right eye
            ctx.beginPath();
            ctx.save();
            ctx.scale(1.5, 1);
            ctx.moveTo(0.83 * x + 5, y - 10);
            ctx.arc(0.83 * x, y - 10, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.scale(0.67, 2);
            ctx.arc(x + 14, 0.45 * y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = stroke;
            ctx.fill();

            ctx.restore();

            // nose
            ctx.beginPath();
            ctx.moveTo(x, y + 10);
            ctx.lineTo(x - 10, y + 10);
            ctx.lineTo(x, y - 10);

            //mouth

            ctx.save();
            ctx.rotate(12 * Math.PI / 180);
            ctx.scale(2.7, 0.8);

            ctx.moveTo(0.5 * x + 7, 1.32 * y);
            ctx.arc(0.5 * x, 1.32 * y, 7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.restore();
        }

        function drawHat(x, y, fill, stroke) {
            ctx.fillStyle = fill;
            ctx.strokeStyle = stroke;

            //base of hat
            ctx.beginPath();
            ctx.save();
            ctx.scale(2, 0.4);
            ctx.moveTo(0.55 * x + 25, 1.5 * y);
            ctx.arc(0.55 * x, 1.5 * y, 25, 0, 2 * Math.PI);

            ctx.fill();
            ctx.stroke();
            ctx.restore();

            ctx.beginPath();
            ctx.save();
            ctx.scale(1, 0.3);
            ctx.moveTo(x + 35, 1.75 * y);
            ctx.arc(x + 10, 1.75 * y, 25, 0, Math.PI);
            ctx.lineTo(x - 15, 0.5 * y);
            ctx.lineTo(x + 35, 0.5 * y);
            ctx.lineTo(x + 35, 1.75 * y);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(x + 10, 0.5 * y, 25, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
    }

    //it is not a good idea to move the head(on other coordinates) because it was my first drawing in canvas
    drawHeadWithHat(70, 100, '#90CAD7', '#1C4E59', '#396693', '#262626');

    function drawHouse(x, y, fill, stroke) {
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 2;

        //house borders
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 238);
        ctx.lineTo(x + 322, y + 238);
        ctx.lineTo(x + 322, y);
        ctx.lineTo(x + 162, y - 178);
        ctx.lineTo(x, y);
        ctx.lineTo(x + 322, y);

        ctx.fill();
        ctx.stroke();

        //chimney
        ctx.beginPath();
        ctx.moveTo(x + 224, y - 45);
        ctx.lineTo(x + 224, y - 135);
        ctx.lineTo(x + 260, y - 135);
        ctx.lineTo(x + 260, y - 45);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.save();
        ctx.scale(1.8, 0.4);
        ctx.arc((x + 242) / 1.8, (y - 135) / 0.4, 10, 0, 2 * Math.PI);
        ctx.restore();

        ctx.fill();
        ctx.stroke();

        // door
        ctx.beginPath();
        ctx.moveTo(x + 73, y + 205);
        ctx.arc(x + 68, y + 205, 5, 0, 2 * Math.PI);
        ctx.moveTo(x + 99, y + 205);
        ctx.arc(x + 94, y + 205, 5, 0, 2 * Math.PI);

        ctx.moveTo(x + 36, y + 238);
        ctx.lineTo(x + 36, y + 154);
        ctx.moveTo(x + 81, y + 238);
        ctx.lineTo(x + 81, y + 131);
        ctx.moveTo(x + 126, y + 238);
        ctx.lineTo(x + 126, y + 154);

        ctx.moveTo(x + 126, y + 154);
        ctx.save();
        ctx.scale(1, 0.5);
        ctx.arc(x + 81, (y + 154) / 0.5, 45, 0, Math.PI, true);
        ctx.restore();
        ctx.stroke();

        // windows
        //swap colors of stroke and fill
        var strokeLastValue = ctx.strokeStyle;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.fillStyle = strokeLastValue;

        ctx.fillRect(x + 180, y + 128, 114, 75);
        ctx.fillRect(x + 180, y + 26, 114, 75);
        ctx.fillRect(x + 25, y + 26, 114, 75);

        //dividing windows
        ctx.beginPath();
        //vertical lines
        ctx.moveTo(x + 237, y + 203);
        ctx.lineTo(x + 237, y + 26);
        ctx.moveTo(x + 82, y + 101);
        ctx.lineTo(x + 82, y + 26);

        //horizontal lines
        ctx.moveTo(x + 25, y + 64);
        ctx.lineTo(x + 294, y + 64);
        ctx.moveTo(x + 180, y + 166);
        ctx.lineTo(x + 294, y + 166);
        ctx.stroke();
    }

    drawHouse(20, 300, '#975B5B', '#000000');

    function drawBicycle(x, y, fill, stroke) {
        ctx.strokeStyle = stroke;
        ctx.fillStyle = fill;
        ctx.lineWidth = 2;
        var changeCoords = 1;

        function drawing() {
            ctx.save();
            ctx.fillStyle = '#AAA';
            ctx.fillRect(x - 335, y - 10, 400, y + 242);
            ctx.restore();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 35, y + 40);
            ctx.lineTo(x - 87, y + 60);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x - 35, y + 40);
            ctx.lineTo(x - 15, y + 170);
            ctx.moveTo(x + 53, y + 170);
            ctx.arc(x - 15, y + 170, 68, 0, 2 * Math.PI);
            ctx.moveTo(x - 197, y + 170)
            ctx.arc(x - 265, y + 170, 68, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x - 27, y + 90);
            ctx.lineTo(x - 185, y + 90);
            ctx.lineTo(x - 265, y + 170);
            ctx.lineTo(x - 150, y + 170);
            ctx.lineTo(x - 27, y + 90);
            ctx.moveTo(x - 150, y + 170);
            ctx.lineTo(x - 207, y + 59);
            ctx.moveTo(x - 234, y + 59);
            ctx.lineTo(x - 179, y + 59);
            ctx.moveTo(x - 134, y + 170);
            ctx.arc(x - 152, y + 170, 18, 0, 2 * Math.PI);

            ctx.moveTo(x - 163, y + 155);
            ctx.lineTo(x - 175, y + 141);
            ctx.moveTo(x - 139, y + 182);
            ctx.lineTo(x - 128, y + 197);

            ctx.stroke();
            x+= changeCoords;
            y+= changeCoords;
            if (x + 55 >= canvas.width || y + 200 >= canvas.height) {
                changeCoords = -1;
            }
            else if (x <= 0 || y <= 0) {
                changeCoords = 1;
            }
            setTimeout(drawing, 10);
        }

        drawing();
    }

    drawBicycle(700, 50, '#90CAD7', '#327C8E');




}