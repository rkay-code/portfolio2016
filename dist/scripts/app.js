$(document).ready(function() {

  $('.nav a').on('click', function() {
      $('.navbar-collapse').collapse('hide');
  });

  $("#name-input").keydown(function(event){
    if(event.keyCode == 13){
        $("#name-sbmt").click();
    }
});

});
