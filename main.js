
$(document).ready(function() {
  

  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 80) {
      $('#navbar').addClass('bg-blur');
    }
    if ($(window).scrollTop() < 81) {
      $('#navbar').removeClass('bg-blur');
    }
  });

});




