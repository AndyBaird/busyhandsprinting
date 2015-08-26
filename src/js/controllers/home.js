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
  $('.apparel-nav').removeClass('active');
  $('.sublimation-nav').removeClass('active');
  $('.sticker-nav').removeClass('active');
  $('.plaques-nav').removeClass('active');
  $('.contact-nav').removeClass('active');
    menu();
    
    // if ("onhashchange" in window) {

    // }

// mobile conditions 
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    menu();
    $('.fa-bars').fadeIn();
    $('.nav-container').css('display', 'none');
  }


});