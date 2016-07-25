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
    }
  });

$('.body-main').scrollspy({ target: '#spy-nav' })
});
