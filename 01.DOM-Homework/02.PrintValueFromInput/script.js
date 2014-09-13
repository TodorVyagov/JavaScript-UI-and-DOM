/*
Create a function that gets the value of <input type="text"> ands prints its value to the console
*/

function ExtractTextFromInputText() {
    var input = document.querySelector('input[type=text]');
    if (input.value === '') {
        console.log('You entered an empty string!');
        return;
    }
    console.log(input.value);
    var p = document.createElement('p');
    p.innerHTML = input.value;
    document.body.appendChild(p);
}