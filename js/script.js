
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() 
  {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict

function changeImage()
{
var img1="https://media.giphy.com/media/TercUvhYRPkmkDUNZk/giphy.gif",
    img2="https://media.giphy.com/media/JOXMjlx3PCjcYRmCzu/giphy.gif";
var imgElement = document.getElementById('image');
imgElement.src = (imgElement.src === img1)? img2 : img1;
}

function myFunction() 
{
  var element = document.body;
  element.classList.toggle("dark-mode");
  changeImage();
}