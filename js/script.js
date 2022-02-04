// Carousel for team members

$('.team__carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
   responsive: [
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});


//  Carousel for testimonials

$('.one-time').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
});


//  Go-to-top button

$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })
    });


// Burger

    let burger = document.querySelector("#burger");
    let header = document.querySelector("#header");
    burger.onclick = function() {
        header.classList.toggle("menu-open");
    }


// Sub-nav__list on click in mobile version

    $(document).ready(function() {
      $('.dropdown-about').click(function(event) {
          $('.dropdown-about').toggleClass('active');
      });
    });


        $(document).ready(function() {
      $('.dropdown-service').click(function(event) {
          $('.dropdown-service').toggleClass('active');
      });
    });