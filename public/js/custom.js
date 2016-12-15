function delayLoad() {
$('img').removeClass('fadeInUp animated');
}
function clickDelayLoad() {
$('img').removeClass('fadeInUp animated');
}
function delayAddAnimate() {
$('h2').removeClass('fadeInUp animated');
}
function delayFunc() {
$('h2').addClass('visible fadeInUp animated');
setTimeout(delayAddAnimate, 1000);
}
function delayImgLoad() {
$('#BurgerKing, #McDonalds').addClass('visible fadeInUp animated hvr-grow');
}
// document ready
$(function() {
  $('#BurgerKing, #McDonalds').removeClass('visible fadeInUp animated hvr-grow');
    setTimeout(delayImgLoad, 500);

    setTimeout(delayLoad, 2000);

    $('i').click(function(){
      $('h2').removeClass('visible fadeInUp animated');
      $('h2').addClass('invisible');
      setTimeout(clickDelayLoad, 1000);
    });

    $('img').click(function(){
      $('h2').removeClass('visible');
      setTimeout(delayFunc, 700);//results delay
    });
});
