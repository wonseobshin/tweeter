$(document).ready(function() {
  $('#compose-button').click(function() {
      $('section.new-tweet').slideToggle();
      $("#tweet-textarea").focus();
    });
});