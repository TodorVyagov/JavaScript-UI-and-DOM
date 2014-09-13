$(document).ready(function () {
    var $insertBeforeButton = $('#insert-before-button');

    $insertBeforeButton.on('click', function () {
        var p = $('<p>');
        p.html($('#insert-text').val());
        $('#holder').prepend(p);
    });

    var $insertAfterButton = $('#insert-after-button');

    $insertAfterButton.on('click', function () {
        var p = $('<p>');
        p.html($('#insert-text').val());

        $('#holder').append(p);
    });
});