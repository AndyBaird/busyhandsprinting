var $ = require('jquery'); 
var slick = require('../../../bower_components/slick.js/slick/slick.js');
var menu = require('../menu');
var router = require('../router');
var show = require('../show');
var views = require('views');
var menu = require('../menu');

router.route('products', function (){
  show('products', '.main-content');
//load the menu JS

  $('.products-nav').addClass('active');
  $('.home-nav').removeClass('active');
    menu();  

    
});