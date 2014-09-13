(function ($) {
    $.fn.dropdown = function () {
        var $this = $(this);//.hide();
        console.log($this.html());
        var $children = $this.children();

        var $selectContainer = $('<div>');
        $selectContainer.addClass('dropdown-list-container');

        var $ulSelect = $('<ul>');
        $ulSelect.addClass('dropdown-list-options');

        var $liOption = $('<li>');
        $liOption.addClass('dropdown-list-option')
                 .on('click', function () {
                     var $this = $(this);
                     var $options = $('#dropdown');
                     var $currentOption = $($options[0][$this.attr('data-value')]);

                     $this.siblings().removeClass('selected')
                                     .css('background-color', '');
                     $this.addClass('selected')
                          .css('background-color', '#CCCCCC');

                     $options.children().attr('selected', false);
                     $currentOption.attr('selected', true);
                     $($children[i]).attr('selected', true);

                 })
                 .css({
                     'border': '2px solid yellowgreen',
                     'width': '100px',
                     'list-style': 'none',
                     'text-align': 'center'
                 });


        for (var i = 0, len = $children.length; i < len; i++) {
            $liOption.attr('data-value', i)
                     .html($($children[i]).html());
            $ulSelect.append($liOption.clone(true));
        }


        $selectContainer.append($ulSelect);
        $this.after($selectContainer);
    }
}(jQuery));


