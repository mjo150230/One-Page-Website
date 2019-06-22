$(document).ready(function () {
    $(document).on("scroll", scroller);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var moveto = this.hash;
        $('html, body').stop().animate({
            'scrollTop': ($(this.hash).offset().top) - 50
        }, 500, 'swing', function () {
            window.location.hash = moveto;
            $(document).on("scroll", scroller);
        });
        console.log($(this.hash).offset().top);

    });

});

function scroller(e) {
    var sPos = $(document).scrollTop();

    console.log(sPos);
    $('#mainnav a').each(function () {
        var currentLink = $(this);
        var currentattr = $(this).attr("href");
        if (($(currentattr).position().top) - 50 <= sPos && ($(currentattr).position().top) - 50 + $(currentattr).height() > sPos) {console.log(currentLink);
            window.location.hash = currentattr;
            currentLink.addClass('active');
        } 
        else {
            currentLink.removeClass('active');
        }
 
    });

}
