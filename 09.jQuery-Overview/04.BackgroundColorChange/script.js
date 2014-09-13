$(document).ready(function () {
    var $button = $('#color-change-button');

    $button.on('click', function () {
        var backgroundColor = $('input[type="color"]').val();

        $('body').css('backgroundColor', backgroundColor);
    });
});