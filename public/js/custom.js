function delayLoad() {
$('img').removeClass('fadeInUp animated');
}

function clickDelayLoad() {
$('img').removeClass('fadeInUp animated');
}

function delayAddAnimate() {
$('h2').removeClass('fadeInUp animated');
}
// document ready
$(function() {
    setTimeout(delayLoad, 1000);

    $('i').click(function(){
      $('h2').removeClass('visible fadeInUp animated');
      $('h2').addClass('invisible');
      setTimeout(clickDelayLoad, 1000);
    });

    $('img').click(function(){
      $('h2').removeClass('invisible');
      $('h2').addClass('visible fadeInUp animated');
      setTimeout(delayAddAnimate, 1000);

    });
});
