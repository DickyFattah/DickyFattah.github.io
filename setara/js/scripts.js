/*!
* Start Bootstrap - Business Frontpage v5.0.8 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(function(){
    $(".typed").typed({
      strings: ["website.", "android app.", "iphone app.", "pc software.", "management software.", "online shop."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1000
    });
});

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop:  ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  