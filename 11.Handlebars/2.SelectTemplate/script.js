window.onload = function () {
    var drinks = [{
        value: 'cola',
        text: 'Coca-Cola'
    }, {
        value: 'fanta',
        text: 'Fanta'
    }, {
        value: 'sprite',
        text: 'Sprite'
    }, {
        value: 'seven-up',
        text: 'Seven up'
    }, {
        value: 'mirinda',
        text: 'Mirinda'
    }, {
        value: 'pepsi',
        text: 'Pepsi'
    }];

    var selectTemplateNode = document.getElementById('select-template');
    var selectTemplateHtml = selectTemplateNode.innerHTML;
    var selectTemplate = Handlebars.compile(selectTemplateHtml);

    var button = document.getElementById('select-generator-button');
    button.addEventListener('click', function () {
        var selectContainer = document.getElementById('select-container');
        selectContainer.innerHTML = selectTemplate({
            items: drinks
        });

        button.parentNode.removeChild(button);
    });
}