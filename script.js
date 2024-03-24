$(document).ready(function() {
  // Show / Hide
  $('#show-hide').click(function() {
    $('#target').toggle('blind', 500);
  });

  // Explode
  $('#explode').click(function() {
    $('#target').toggle('explode', 500);
  });

  // Fade-in / Fade-out
  $('#fade-in-out').click(function() {
    $('#target').fadeToggle(500);
  });

  // Color Animation
  $('#color-animation').click(function() {
    var randomColor = getRandomColor();
    $('#target').animate({
      backgroundColor: randomColor,
      color: '#fff'
    }, 500);
  });

  // Function to generate a random color
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});