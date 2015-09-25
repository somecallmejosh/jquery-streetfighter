var ryuStill = $('.ryu-still'),
    ryuReady = $('.ryu-ready'),
    ryuThrowing = $('.ryu-throwing'),
    hadouken = $('.hadouken');

$('.ryu').on("mouseenter", function(){
  ryuStill.hide();
  ryuReady.show();
}).on("mouseleave", function(){
  ryuStill.show();
  ryuReady.hide();
}).on("mousedown", function(){
  playHadouken();
  $('.ryu-ready, .ryu-still').hide();
  ryuThrowing.show();
  // .finish() completes all currently running 
  // animations on an element
  hadouken.finish().show().animate({
    left: "10000"
  }, 1000, function(){
    // recreates the div?
    //hide the element with the .hadouken class 
    //then set its left property back to its original 
    // value of 430px.
    $(this).hide();
    $(this).css('left', '430px');
  });;
}).on("mouseup", function(){
  $('.ryu-throwing, .ryu-still').hide();
  ryuReady.show();
});

function playHadouken(){
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}