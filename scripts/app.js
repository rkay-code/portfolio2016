$(document).ready(function() {

  $('.nav a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  $(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.navbar-scroll').fadeIn(500);
    } else {
      $('.navbar-scroll').fadeOut(500);
    }
  });

$('body').scrollspy({ target: '#nav' })
});
