import $ from 'jquery';

$(function() {
  $( ".page-nav a" ).on( "click", function(e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + -100
      }, 500);
  });

  const stickyNavTop = $('.page-nav').offset().top;

  const stickyNav = function() {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop + 50) {
      $('.page-nav').addClass('sticky');
    } else {
      $('.page-nav').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});

const waypoints = document.querySelectorAll('.section');
for (let i = waypoints.length - 1; i >= 0; i--) {
  const waypoint1 = new Waypoint.Inview({
    element: waypoints[i],
    entered: function(direction) {
      this.element.classList.add('in-view');
    },
    exit: function(direction) {
      this.element.classList.remove('in-view');
    },
  });

  const waypoint2 = new Waypoint({
    element: waypoints[i],
    handler: function(direction) {
      const el = this.element;
      el.classList.add('animate__fadeInUp', 'set-image');
      setTimeout(function() {
        el.classList.add('unset-image');
      }, 1500);
    },
    offset: '65%'
  });
}

const listItems = document.querySelectorAll('.list__item--ver');
for (let i = listItems.length - 1; i >= 0; i--) {
  const waypoint3 = new Waypoint({
    element: listItems[i],
    handler: function(direction) {
      this.element.classList.add('animate__bounceInRight');
    },
    offset: '65%'
  });
}

$('.list--horizontal .list__item').mouseenter(function() {
  $(this).find('.item__text').addClass('is-active');
});

$('.list--horizontal .list__item').mouseleave(function() {
  $(this).find('.item__text').removeClass('is-active');
});

$('.image__swap').mouseenter(function() {
  $(this).prev().addClass('is-active')
});

$('.image__swap').mouseleave(function() {
  $(this).prev().removeClass('is-active')
});

$('.js-hamburger').on('click', function() {
  $(this).toggleClass('is-active');
  $('body').toggleClass('nav-active');
  $('.page-nav').addClass('active-nav');
  setTimeout(() => $('.page-nav').removeClass('active-nav'), 500);
})

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
