function delayLoad() {
$('img').removeClass('fadeInUp animated');
}

function clickDelayLoad() {
$('img').removeClass('fadeInUp animated');
}

// document ready
$(function() {
    setTimeout(delayLoad, 1000);

    $('i').click(function(){
      setTimeout(clickDelayLoad, 1000);
    });

});
