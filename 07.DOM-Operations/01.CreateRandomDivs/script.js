window.onload = function () {
    generateRandomDivs();

    function generateRandomDivs() {
        var divElement = document.createElement('div');
        var textInDiv = document.createElement('strong');
        textInDiv.innerHTML = 'div';
        divElement.appendChild(textInDiv);
        var dFrag = document.createDocumentFragment();

        var numberOfDivs = getRandomNumber(41, 10);
        for (var i = 0; i < numberOfDivs; i++) {
            // width 20-100px
            var width = getRandomNumber(101, 20);
            divElement.style.width = width + 'px';

            // height 20-100px
            var height = getRandomNumber(101, 20);
            divElement.style.height = height + 'px';

            // background Color
            divElement.style.backgroundColor = getRandomColor();

            // font Color
            divElement.style.color = getRandomColor();

            // position
            divElement.style.position = 'absolute';
            //used width and height so the divs will not get out of screen
            divElement.style.top = getRandomNumber(window.innerHeight - height) + 'px';
            divElement.style.left = getRandomNumber(window.innerWidth - width) + 'px';

            // border color
            var color = getRandomColor();

            // border width 1-20px
            var border = getRandomNumber(21, 1) + 'px';
            border += ' solid ' + color;
            divElement.style.border = border;

            // border radius
            divElement.style.borderRadius = getRandomNumber() + 'px';

            dFrag.appendChild(divElement.cloneNode(true));
        }

        document.body.appendChild(dFrag);
    }

    // max number is not included so if we want random number between 0 and 5, max has to be max=6
    function getRandomNumber(max, min) {
        min = min || 0;
        max = max || 21;
        var randomNnumber = Math.floor(Math.random() * (max - min)) + min;

        return randomNnumber;
    }

    function getRandomColor() {
        var R = getRandomNumber(256);
        var G = getRandomNumber(256);
        var B = getRandomNumber(256);

        var color = 'rgb(' + R + ', ' + G + ', ' + B + ')';
        return color;
    }
}