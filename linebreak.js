$(document).ready(function() {
  var pad = $('#pad');
  var board = $('#address');

  pad.keypress(function(event) {
    board.html(pad.val().replace(/\r?\n/g, '<br />'));
  });
});