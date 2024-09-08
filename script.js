$(document).ready(() => {
    let sliding = false;
    const moveRight = () => {
      if (sliding) return;
      sliding = true;
      $('.row').each(function () {
        let $row = $('.row');
        let $lastImage = $row.find('img').last();
        $lastImage.addClass('animate-slide-right');
        setTimeout(() => {
          $(this).prepend($(this).children().last());
          $lastImage.removeClass('animate-slide-right');
          sliding = false;
        });
      }, 500);
    };
    const moveLeft = () => {
      if (sliding) return;
      sliding = true;
      $('.row').each(function () {
        $(this).addClass('animate-slide-left');
        setTimeout(() => {
          $(this).append($(this).children().first());
          $(this).removeClass('animate-slide-left');
          sliding = false;
        }, 500);
      });
    };
    $('.arrow.left-arrow').click(() => {
      moveLeft();
    });
    $('.arrow.right-arrow').click(() => {
      moveRight();
    });
  });