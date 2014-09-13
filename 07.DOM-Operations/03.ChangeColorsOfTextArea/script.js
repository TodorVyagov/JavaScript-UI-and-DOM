window.onload = function () {
    var dFrag = document.createDocumentFragment();
    var inputColor = document.createElement('input');
    inputColor.type = 'color';

    // Text
    var text = document.createElement('span');
    text.innerHTML = 'Text: ';
    dFrag.appendChild(text);
    inputColor.id = 'text';
    dFrag.appendChild(inputColor.cloneNode(true));

    // background
    var background = document.createElement('span');
    background.innerHTML = 'Background: ';
    inputColor.id = 'background';
    dFrag.appendChild(background);
    dFrag.appendChild(inputColor.cloneNode(true));

    var br = document.createElement('br');
    dFrag.appendChild(br);

    // textarea
    var textarea = document.createElement('textarea');
    textarea.id = 'text-field';
    textarea.style.width = '400px';
    textarea.style.height = '150px';
    dFrag.appendChild(textarea);

    document.body.appendChild(dFrag);

    var area = document.getElementById('text-field');
    var inputColorText = document.getElementById('text');
    inputColorText.addEventListener('change', function () {
        area.style.color = this.value;
    });

    var inputColorBackground = document.getElementById('background');
    inputColorBackground.addEventListener('change', function () {
        area.style.backgroundColor = this.value;
    });

}