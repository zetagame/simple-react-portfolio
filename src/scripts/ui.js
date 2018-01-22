$(document).ready(function() {
//pause greeting message.
  $('body').on('click', '.navbar-toggler', function() {
    $('#greeting .greeting-message').toggleClass('blur');
  });

  //ScrollFix
  const offset = 56;
  $('.navbar li a').click(function(event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView();
      scrollBy(0, -offset);
  });
});
