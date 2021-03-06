var $ = require('jquery'); 
var slick = require('../../../bower_components/slick.js/slick/slick.js');
var menu = require('../menu');
var router = require('../router');
var show = require('../show');
var views = require('views');
var menu = require('../menu');

$(function(){
  if($('body').is('.stickers')){
//load the menu JS

  $('.home-nav').removeClass('active');
  $('.apparel-nav').removeClass('active');
  $('.sublimation-nav').removeClass('active');
  $('.sticker-nav').addClass('active');
  $('.plaques-nav').removeClass('active');
  $('.contact-nav').removeClass('active');
  menu();  

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
}
});