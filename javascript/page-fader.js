$(document).ready(function() {
  $('.fadable').css('display', 'none');
  //$('.fadable').fadeIn(200);
  $('a').click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    //$('.fadable').fadeOut(200, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }
});
