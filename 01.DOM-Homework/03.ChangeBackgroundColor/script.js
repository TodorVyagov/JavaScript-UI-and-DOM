/*
Create a function that gets the value of <input type="text"> ands prints its value to the console
*/

function ChangeBackgroundColor() {
    var input = document.querySelector('input[type=color]');
    var color = input.value;

    console.log('Selected color is: ' + color);

    document.body.style.backgroundColor = color;

    if (color === '#000000') {
        document.body.style.color = 'red';
    }
    else {
        document.body.style.color = 'black';
    }
}