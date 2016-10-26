function delayLoad() {
  console.log( "ready!" );
$('img').removeClass('fadeInUp animated');
}

// document ready
$(function() {
    setTimeout(delayLoad, 1000);
});
