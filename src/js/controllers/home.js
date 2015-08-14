var _ = require('underscore');
var router = require('../router');
var show = require('../show');
var views = require('views');
var $ = require('jquery'); 
var slick = require('../../../bower_components/slick.js/slick/slick.js');
var menu = require('../menu');


router.route('', 'home', function (){
  show('home', '.main-content');
//load the menu JS

  $('.home-nav').addClass('active');
  $('.products-nav').removeClass('active');
    menu();  


// mobile conditions 
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    menu();
    $('.fa-bars').fadeIn();
    $('.nav-container').css('display', 'none');
  }

// carousel
  $(document).ready(function(){
    $('.banner-image-container').slick({
      arrows: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
     });
  });

});