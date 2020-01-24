$(document).ready(function() {
  

    
    $('.menu-wrapper').click(function(e) {
        if($(window).width() < 900) {
            console.log("test");
          $('.hamburger-menu').toggleClass('animate');
          //$('.nav').toggleClass('active');
          //$('.nav-list').slideToggle();

          $('.nav').slideToggle('medium', function() {
            if ($(this).is(':visible'))
              $(this).css('display','block');
          });

        }
    });
  

});
