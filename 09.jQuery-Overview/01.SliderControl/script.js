$(document).ready(function () {
    $('#prev-slide-button').on('click', previousSlide);
    $('#next-slide-button').on('click', nextSlide);

    var interval = 5000;
    var timeout = setTimeout(nextSlide, interval);

    function previousSlide() {

        var currentLi = $('#slide-list .current');
        currentLi.removeClass('current');
        var prevLi = currentLi.prev();

        if (prevLi.html() === undefined) {
            prevLi = $('#slide-list li').last();
        }

        prevLi.addClass('current');
        resetInterval();
    }

    function nextSlide() {
        var currentLi = $('#slide-list .current');
        currentLi.removeClass('current');
        var nextLi = currentLi.next();

        if (nextLi.html() === undefined) {
            nextLi = $('#slide-list li').first();
        }

        nextLi.addClass('current');
        resetInterval();
    }

    function resetInterval() {
        clearInterval(timeout);
        timeout = setTimeout(nextSlide, interval);
    }
});