var _ = require('underscore');
var router = require('../router');
var show = require('../show');
// var views = require('views');
var $ = require('jquery'); 
var slick = require('../../../bower_components/slick.js/slick/slick.js');
var menu = require('../menu');
var jQCloud = require('../jqcloud');

$(function(){
  if($('body').is('.home')){

  //load the menu JS
    $('.home-nav').addClass('active');
    $('.apparel-nav').removeClass('active');
    $('.sublimation-nav').removeClass('active');
    $('.sticker-nav').removeClass('active');
    $('.plaques-nav').removeClass('active');
    $('.contact-nav').removeClass('active');
    menu();  
    
    $(window).load(function() {
      $('.hero-container').css("visibility", "visible");
    });
    
    
    var words = [
  {text: "T-Shirts", weight: 13},
  {text: "Sport/Polo Shirts", weight: 10.5},
  {text: "Fleeces", weight: 9.4},
  {text: "Ladieswear", weight: 8},
  {text: "Infantwear", weight: 6.2},
  {text: "Shorts", weight: 5},
  {text: "Outerwear", weight: 6},
  {text: "Sweatshirts", weight: 8.5},
  {text: "Long Sleeves", weight: 7},
  {text: "Tie Dye", weight: 5},
  {text: "BumpTeamwear", weight: 7.5},
  {text: "Hats", weight: 9},
  {text: "Headwear", weight: 7.2},
  {text: "Bumper Stickers", weight: 6.3},
  {text: "Decals", weight: 6.7},
  {text: "Keychains", weight: 8},
  {text: "Lapel Pins", weight: 5},
  {text: "Mugs", weight: 9},
  {text: "Jewelry", weight: 8.5},
  {text: "Name Badges", weight: 9.5},
    {text: "Windows Clings", weight: 8.5},
      {text: "Christmas Ornaments", weight: 6.5},
        {text: "Spirit Towels", weight: 8.2},
          {text: "Water Bottles", weight: 9.2},
            {text: "Buttons", weight: 8.5},
              {text: "Luggage Tags", weight: 7.8},
                {text: "Award Plaques", weight: 8.8},
                  {text: "Tote Bags", weight: 10},
  

];





$('#keywords').jQCloud(words, {autoResize: true});

  }
});

