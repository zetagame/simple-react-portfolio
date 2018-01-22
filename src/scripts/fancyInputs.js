$(document).ready(function() {
  var fancify = function(element) {
    element.value.length !== 0 ? $(element).addClass('fancy') : $(element).removeClass('fancy');
  }
  $('body').on('change', 'input, textarea', function() {
    fancify(this)
  });
  $('body').on('keypress, keyup', 'textarea', function() {
    fancify(this)
  });

  $('body').on('click', '.z-input ~ label', function () {
    $(this).prevAll('.z-input').focus();
  })
});
