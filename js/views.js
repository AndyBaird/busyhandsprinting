require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"apparel":"<div class = \"banner-image-container\">\n  <img class = \"banner-image\" src = \"img/100-2293a.jpg\">\n  <img class = \"banner-image\" src = \"img/100-3033.jpg\">\n  <img class = \"banner-image\" src = \"img/tie-dye.jpg\">\n</div>\n<div class=\"pure-g\">\n  <div class=\"brands pure-u-1 pure-u-md-1-2\">\n    <h3>Brands</h3>\n    <li>Gildan</li>\n    <li>American Apparel</li>\n    <li>Hanes</li>\n    <li>Jersey</li>\n  </div>\n  <div class=\"apparel-list pure-u-1 pure-u-md-1-2\">\n    <h3>Styles</h3>\n    <li>100% Tees</li>\n    <li>Blended T-Shirts</li>\n    <li>Sport/Polo Shirts</li>\n    <li>Fleeces</li>\n    <li>Ladieswear</li>\n    <li>Infantwear</li>\n    <li>Shorts</li>\n    <li>Outerwear</li>\n    <li>Sweatshirts & Hoodies</li>\n    <li>Long Sleeves</li>\n    <li>Tie Dye</li>\n    <li>Teamwear</li>\n  </div>\n</div>","company":"<p>We are a full service Screen Printer specializing in orders tailored to meet the needs of your group. We have very competitive prices and have printed for church groups, youth groups, teams, schools, businesses, scouting and many other clubs. We can help you meet your advertising needs too!</p>","contact":"<form name=\"contactform\" method=\"post\" action=\"send_form_email.php\">\n \n<table width=\"450px\">\n \n<tr>\n \n <td valign=\"top\">\n \n  <label for=\"first_name\">First Name *</label>\n \n </td>\n \n <td valign=\"top\">\n \n  <input  type=\"text\" name=\"first_name\" maxlength=\"50\" size=\"30\">\n \n </td>\n \n</tr>\n \n<tr>\n \n <td valign=\"top\"\">\n \n  <label for=\"last_name\">Last Name *</label>\n \n </td>\n \n <td valign=\"top\">\n \n  <input  type=\"text\" name=\"last_name\" maxlength=\"50\" size=\"30\">\n \n </td>\n \n</tr>\n \n<tr>\n \n <td valign=\"top\">\n \n  <label for=\"email\">Email Address *</label>\n \n </td>\n \n <td valign=\"top\">\n \n  <input  type=\"text\" name=\"email\" maxlength=\"80\" size=\"30\">\n \n </td>\n \n</tr>\n \n<tr>\n \n <td valign=\"top\">\n \n  <label for=\"telephone\">Telephone Number</label>\n \n </td>\n \n <td valign=\"top\">\n \n  <input  type=\"text\" name=\"telephone\" maxlength=\"30\" size=\"30\">\n \n </td>\n \n</tr>\n \n<tr>\n \n <td valign=\"top\">\n \n  <label for=\"comments\">Comments *</label>\n \n </td>\n \n <td valign=\"top\">\n \n  <textarea  name=\"comments\" maxlength=\"1000\" cols=\"25\" rows=\"6\"></textarea>\n \n </td>\n \n</tr>\n \n<tr>\n \n <td colspan=\"2\" style=\"text-align:center\">\n \n  <input type=\"submit\" value=\"Submit\">   <a href=\"http://www.freecontactform.com/email_form.php\">Email Form</a>\n \n </td>\n \n</tr>\n \n</table>\n \n</form>","home":"<div class='hero-container'>\n\n  <h2 class='hero-title'> Busy Hands Printing</h2>\n  <p class='hero-description'>Your last minute printing company, but you can call us first!<br>704.975.8480 | Busyhandsprinting@gmail.com</p>\n</div>\n\n<main class = \"pure-g main-container\">\n  \n  <div class= \"flow-container\">\n    <div class = \"pure-u-1 pure-u-md-1-3 flow\">\n      <i class=\"fa fa-comments\"></i>\n      <p class='flow-text'>Use our site to help narrow down items, styles, or colors and contact us.\n      </p>\n    </div>\n    <div class = \"pure-u-1 pure-u-md-1-3 flow\">\n      <i class=\"fa fa-pencil-square-o\"></i>\n      <p class='flow-text'>We will collaborate with you on development and design of your items.     \n      </p>\n    </div>\n    <div class = \"pure-u-1 pure-u-md-1-3 flow\">\n      <i class=\"fa fa-shopping-cart\"></i>\n      <p class='flow-text'>Item will be printed and you can receive items via pickup or shipping.  \n      </p>\n    </div>\n  </div>\n</main>\n\n  <div class='products pure-g'>\n    <h1 class='products-title pure-u-1'>Products We Offer</h1>\n    <div class='product-list pure-u-1 pure-u-md-1-3'>\n      <li>100% Tees</li>\n      <li>Blended T-Shirts</li>\n      <li>Sport/Polo Shirts</li>\n      <li>Fleeces</li>\n      <li>Ladieswear</li>\n      <li>Infantwear</li>\n      <li>Shorts</li>\n      <li>Outerwear</li>\n      <li>Sweatshirts & Hoodies</li>\n      <li>Long Sleeves</li>\n    </div>\n    \n    <div class='product-list pure-u-1 pure-u-md-1-3'>\n      <li>Tie Dye</li>\n      <li>Teamwear</li>\n      <li>Hats</li>\n      <li>Headwear</li>\n      <li>Bumper Stickers</li>\n      <li>Decals/Windows Clings</li>\n      <li>Keychains</li>\n      <li>Lapel Pins</li>\n      <li>Mugs</li>\n      <li>Jewelry</li>\n    </div>\n    \n    <div class='product-list pure-u-1 pure-u-md-1-3'>\n      <li>Name Badges</li>\n      <li>Christmas Ornaments</li>\n      <li>Spirit Towels</li>\n      <li>Water Bottles</li>\n      <li>Buttons</li>\n      <li>Luggage Tags</li>\n      <li>Award Plaques</li>\n      <li>Tote Bags</li>\n      <li>Mouse Pads</li>\n      <li>and MORE!</li>\n    </div>\n  </div>\n\n\n","plaques":"","stickers":"<div class = \"banner-image-container\">\n  <img class = \"banner-image\" src = \"img/decal-towing.jpg\">\n</div>","sublimation":"<div class=\"pure-g sublimation-container\">\n  <div class=\"pure-u-1 pure-u-md-1-2 sublimation-product\"> \n    <h3>Mugs</h3> \n    <p>Single Ceramic Mug $10.00 (6x for $7.00 a piece). Single Travel Mug $12.50. Single color changing $15.00 (when hot liquid is added).</p>\n  </div>\n\n  <div class=\"pure-u-1 pure-u-md-1-2 sublimation-product\"> \n    <h3>Jewelry</h3> \n    <p>This jewelry offers a combination of quality and value that is ideal for schools, sports teams, clubs and organizations, as well as personal gifts.</p>\n  </div>\n  \n  <div class=\"pure-u-1 pure-u-md-1-2 sublimation-product\"> \n    <h3>Tote Bags</h3>\n    <p>We have many sizes, shapes and colors available! Prices range from $10.00 - $24.00.</p>\n  </div>\n  \n  <div class=\"pure-u-1 pure-u-md-1-2 sublimation-product\"> \n    <h3>Mouse Pads</h3> \n    <p>We can digitize any photo of your choice and place it into a 7 x 9 1/8\" thick mouse pad.</p>\n  </div>\n  \n\n  <div class=\"pure-u-1 pure-u-md-1-2 sublimation-product\"> \n    <h3>Buttons</h3> \n    <p>2 1/4\" buttons are available as well as keychains. Call for name tags and key chain options.</p>\n  </div>\n\n</div>"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);
