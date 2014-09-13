window.onload = function () {

    function animatedBouncingBall(x, y, ballRadius) {
        var canvas = document.getElementById('the-canvas');
        var ctx = canvas.getContext('2d');
        var moveSpeedX = 1;
        var moveSpeedY = 1;

        function drawBall() {
            ctx.save();
            ctx.fillStyle = '#EEE';
            ctx.fillRect((x - ballRadius - moveSpeedX), (y - ballRadius - moveSpeedY), (ballRadius * 2), (ballRadius * 2));
            ctx.restore();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
            ctx.fill();
            
            
            x += moveSpeedX;
            y += moveSpeedY;


            if (x - ballRadius <= 0 || x + ballRadius >= canvas.width) {
                moveSpeedX *= -1;
            }

            if (y - ballRadius <= 0 || y + ballRadius > canvas.height) {
                moveSpeedY *= -1;
            }

            setTimeout(drawBall, 1);
        }

        drawBall();
    }

    animatedBouncingBall(15, 15, 5);
}