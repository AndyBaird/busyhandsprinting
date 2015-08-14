var $ = require('jquery'); 
var slick = require('../../../bower_components/slick.js/slick/slick.js');
var menu = require('../menu');
var router = require('../router');
var show = require('../show');
var views = require('views');
var menu = require('../menu');

router.route('company', function (){
  show('company', '.main-content');
//load the menu JS
 
  $('.company-nav').addClass('active');
  $('.home-nav').removeClass('active');
  $('.contact-nav').removeClass('active');
  $('.products-nav').removeClass('active');
    menu();  

    
});