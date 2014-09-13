$.fn.tabs = function () {
    var $this = $(this);
    $this.addClass('tabs-container');
    $this.find('.tab-item:first-of-type').addClass('current');
    $this.find('.tab-item .tab-item-content').hide();

    $this.find('.tab-item').on('click', '.tab-item-title', function () {
        $this.find('.tab-item.current').removeClass('current');
        $(this).parent().addClass('current');
        $this.find('.tab-item .tab-item-content').hide();
        $this.find('.tab-item.current .tab-item-content').show();
    }).click();
};