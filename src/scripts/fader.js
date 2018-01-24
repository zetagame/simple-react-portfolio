$(document).ready(function() {
  function fadeInItems() {
    $('.fade-in:not(.showFade)').each( function(i){
      let leading = 0;
      if ($(this).hasClass('leading')) {
        leading = 200;
        if ($(this).hasClass('leading')) {
          leading = leading/2;
        }
      }
      var bottomOfObject = $(this).offset().top + $(this).outerHeight() - leading;
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
      if (bottomOfWindow > bottomOfObject){
          $(this).addClass('showFade');
      }
    });
  }
  $(window).scroll( function(){
      fadeInItems();
  });
  fadeInItems();
});
