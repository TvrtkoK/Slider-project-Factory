// script.js
$(document).ready(function() {
    var slideWidth = $('.arrow').width();
    var sliding = false;

    function moveRight() {
        if (sliding) return;
        sliding = true;
        $('.row').each(function() {
            $(this).animate({
                transform: 'translateX(' + slideWidth + 'px)'
            }, 500, function() {
                $(this).prepend($(this).children().last());
                $(this).css('transform', 'translateX(0)');
                sliding = false;
            });
        });
    }

    function moveLeft() {
        if (sliding) return;
        sliding = true;
        $('.row').each(function() {
            $(this).animate({
                transform: 'translateX(-' + slideWidth + 'px)'
            }, 500, function() {
                $(this).append($(this).children().first());
                $(this).css('transform', 'translateX(0)');
                sliding = false;
            });
        });
    }

    $('.arrow.left').click(function() {
        moveLeft();
    });

    $('.arrow.right').click(function() {
        moveRight();
    });
});
