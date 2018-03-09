$(document).ready(function () {
    $('a.scrollable').click(function (e) {
        e.preventDefault();
        var $anchorHref = $(this).attr('href');
        $elementId = $($anchorHref);
        /* Both html and body necessary to accomodate all browsers. */
        $('html, body').stop().animate({ scrollTop: $($elementId).offset().top }, 1400);
    });
});