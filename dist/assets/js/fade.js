"use strict";

$('.js-op').on('click', function () {
  $('body').addClass('no-scroll');
  var id = $(this).data('id');
  $('.overflow, .modal[data-id="modal' + id + '"]').fadeIn();
});
$('.js-cl , .overflow').on('click', function () {
  $('body').removeClass('no-scroll');
  $('.overflow, .modal').fadeOut();
});