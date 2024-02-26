$(document).ready(function() {
  // Color Changing on Click
  $('.clickable-element').click(function() {
    $(this).css('color', 'blue');
  });
});

  $('.hover-change').click(function() {
    $(this).css('size');
    $(this).animate([{height: '100px'},{width: '100px'}]);
  }, function() {
    $(this).animate([{height: '50px'},{width: '50px'}], function() {
      $(this).css('size');
    });
  });

  // Scroll Animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // Animation on Click
  $('.animate-button').click(function() {
    $('.animated-element').animate({marginLeft: '+=200px'}, 'slow');
  });

  // Changing Position on Mouse Hover
  $('.hover-element').hover(function() {
    $(this).css('position', 'relative');
    $(this).animate({left: '50px'}, 'fast');
  }, function() {
    $(this).animate({left: '0px'}, 'fast', function() {
      $(this).css('position', 'static');
    });
  });

