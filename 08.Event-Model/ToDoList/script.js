/*
Create a TODO list with the following UI controls
Form input for new Item
Button for adding the new Item
Button for deleting some item
Show and Hide Button
*/

window.onload = function () {
    dFrag = document.createDocumentFragment();

    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input-field';
    input.value = 'New list item';
    dFrag.appendChild(input);



    var addButton = document.createElement('button');
    addButton.id = 'add-button';
    addButton.innerHTML = 'Add item';
    addButton.addEventListener('click', function () {
        var ul = document.getElementById('to-do-list');
        var li = document.createElement('li');
        li.innerHTML = input.value;
        ul.appendChild(li);
    });
    dFrag.appendChild(addButton);

    var removeButton = document.createElement('button');
    removeButton.id = 'remove-button';
    removeButton.innerHTML = 'Remove item';
    removeButton.addEventListener('click', function () {
        var ul = document.querySelectorAll('li');
        var valueToSearch = input.value;
        for (var i = 0, len = ul.length; i < len; i++) {
            var li = ul[i];
            if (li.innerHTML === valueToSearch) {
                li.parentNode.removeChild(li);
                break;
            }
        }
    });
    dFrag.appendChild(removeButton);

    var showHideButton = document.createElement('button');
    showHideButton.id = 'show-hide-button';
    showHideButton.value = 'show';
    showHideButton.innerHTML = 'Show/Hide';
    showHideButton.addEventListener('click', function () {
        var ul = document.getElementById('to-do-list');
        if (this.value === 'show') {
            this.value = 'hide';
            ul.style.display = 'none';
        }
        else if (this.value === 'hide') {
            this.value = 'show';
            ul.style.display = '';
        }
    });
    dFrag.appendChild(showHideButton);

    var list = document.createElement('ul');
    list.id = 'to-do-list';
    dFrag.appendChild(list);

    document.body.appendChild(dFrag);
}