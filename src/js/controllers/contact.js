var _ = require('underscore');
var router = require('../router');
var show = require('../show');
var views = require('views');
var $ = require('jquery'); 
var slick = require('../../../bower_components/slick.js/slick/slick.js');
var menu = require('../menu');

$(function(){
  if($('body').is('.contact')){


//load the menu JS
  $('.home-nav').removeClass('active');
  $('.apparel-nav').removeClass('active');
  $('.sublimation-nav').removeClass('active');
  $('.sticker-nav').removeClass('active');
  $('.plaques-nav').removeClass('active');
  $('.contact-nav').addClass('active');
  menu();  

  }
});