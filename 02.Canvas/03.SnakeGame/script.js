window.onload = function () {
    function playSnakeGame() {
        var canvas = document.getElementById('the-canvas');
        var ctx = canvas.getContext('2d');
        var backgroundColor = '#23DF71';
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#CCC';
        ctx.strokeStyle = '000';
        var x = 0;
        var y = 0;
        var pieceSize = 20;
        var currentDirection = 'right';
        var snake = [];
        generateSnakePiece(x, y);
        drawRectangle(x, y);
        x += pieceSize;
        generateSnakePiece(x, y);
        drawRectangle(x, y);
        var food = generateFood();


        document.addEventListener('keydown', function move(e) {
            var key = e.which || e.keyCode;
            if (key == 37) { // 37 is left
                currentDirection = 'left';
            }
            else if (key == 39) { // 39 - right
                currentDirection = 'right';
            }
            else if (key == 38) {// 38 - up
                currentDirection = 'up';
            }
            else if (key == 40) {// 40 - down
                currentDirection = 'down';
            }
        });

        playLoop();

        function playLoop() {
            switch (currentDirection) {
                case 'left': x -= pieceSize; break;
                case 'right': x += pieceSize; break;
                case 'up': y -= pieceSize; break;
                case 'down': y += pieceSize; break;
            }

            generateSnakePiece(x, y);

            // check if snake is dead
            var outOfField = snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height;

            for (var i = 1, len = snake.length; i < len; i++) {
                if ((snake[0].x === snake[i].x && snake[0].y === snake[i].y) || outOfField) {
                    ctx.fillStyle = 'brown';
                    ctx.beginPath();
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.font = '40px san-serif';
                    ctx.strokeText('GAME OVER! Result: ' + (snake.length - 3), canvas.offsetWidth / 5, canvas.offsetHeight / 2);
                    return;
                }
            }

            drawRectangle(x, y);

            //if food is eaten there is no delete
            if (food.x === snake[0].x && food.y === snake[0].y) {
                food = generateFood();
            }
            else {
                deleteLastPieceOfSnake();
            }

            setTimeout(playLoop, 150);
        }



        function drawRectangle(xCoord, yCoord) {
            ctx.beginPath();
            ctx.rect(xCoord, yCoord, pieceSize, pieceSize);
            ctx.stroke();
            ctx.fill();
        }

        function generateSnakePiece(xCoord, yCoord) {
            var element = {
                x: xCoord,
                y: yCoord,
            };
            snake.splice(0, 0, element);
        }

        function deleteLastPieceOfSnake() {
            var xToDelete = snake[snake.length - 1].x;
            var yToDelete = snake[snake.length - 1].y;
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(xToDelete - 1, yToDelete - 1, pieceSize + 2, pieceSize + 2);
            ctx.restore();
            snake.pop();
        }

        function generateFood() {
            var foodX = Math.floor(Math.random() * (canvas.width / pieceSize)) * pieceSize;
            var foodY = Math.floor(Math.random() * (canvas.height / pieceSize)) * pieceSize;

            for (var i = 0, len = snake.length; i < len; i++) {
                if (snake[i].x === foodX || snake[i].y === foodY) {
                    generateFood();
                }
            }
            console.log(foodX + ' ' + foodY);

            drawRectangle(foodX, foodY);

            return {
                x: foodX,
                y: foodY
            }
        }
    }

    playSnakeGame();
}