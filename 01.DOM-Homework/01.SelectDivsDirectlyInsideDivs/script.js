/*
Write a script that selects all the div nodes that are directly inside other div elements
Create a function using querySelectorAll()
Create a function using getElementsByTagName()
*/
window.onload = function () {
    //I decided to put everything in one function. It can easily be divided into two separate function if necessary.
    console.log(' All divs that are directly inside other divs will be printed in the console.');

    console.log('Using querySelectorAll():');
    var nestedDivs = document.querySelectorAll('div > div');

    for (var i = 0, len = nestedDivs.length; i < len; i++) {
        var currentDiv = nestedDivs[i];
        console.log(currentDiv);
        console.log(currentDiv.outerHTML);

        //make all selected divs background color = red 
        currentDiv.style.backgroundColor = 'red';
    }

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    setTimeout(function () {
        console.log('Using getElementsBytagName():');
        var allDivs = document.getElementsByTagName('div');

        for (var i = 0, len = allDivs.length; i < len; i++) {
            var currentElement = allDivs[i];
            var parentElement = currentElement.parentElement;

            if (parentElement instanceof HTMLDivElement) {
                console.log(currentElement);
                console.log('Content of that div element:');
                console.log(currentElement.outerHTML);
                //make all selected divs background color = green 
                currentElement.style.backgroundColor = 'green';
                //if there is any red div left, there is a problem
                console.log('---------------------------------------------');
            }
        }
    }, 1000);
    console.log('As we can see the querySelectorAll returns static node list and in its outerHTML the divs do not have any styles');
}