const form = $('#contact form');
const validationMessages = $('.formMessage');
const formData = $(form).serialize();
$(form).submit(function(event) {
  event.preventDefault();
  $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
  })
  .done(function(response) {
    $(validationMessages).removeClass('error');
    $(validationMessages).addClass('success');
    $(validationMessages).text(response);
    $('input, textarea').val('');
    $('#email').val('');
    $('#message').val('');
  })
  .fail(function(data) {
      $(validationMessages).removeClass('success');
      $(validationMessages).addClass('error');
      if (data.responseText !== '') {
          $(validationMessages).text(data.responseText);
      } else {
          $(validationMessages).text('Oops! An error occured and your message could not be sent.');
      }
  });
});
