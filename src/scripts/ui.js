import $ from 'jquery';

$(document).ready(function() {
//pause greeting message.
  $('body').on('click', '.navbar-toggler', function() {
    $('#greeting .greeting-message').toggleClass('blur');
  });

  //ScrollFix
  const offset = 56;
  $('body').on('click', 'li a[href]', function(e) {
    e.preventDefault();
    let scrollDistance =  $($(this).attr('href')).offset().top - offset + "px";
    $('html, body').animate(
    {scrollTop:scrollDistance})
  })
});
