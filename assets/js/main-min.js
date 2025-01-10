$(function () {
  "use strict";
  
  // Preloader
  $(window).on("load", function () {
    $(".preloader").delay(500).fadeOut(500);
  });

  // Sticky header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() < 20) {
      $(".header_navbar").removeClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo-header_CSJ.svg");
    } else {
      $(".header_navbar").addClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo-header_CSJ.svg");
    }
  });

  // Scroll spy
  var scrollSpy = $(".page-scroll");
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    scrollSpy.each(function () {
      if ($(this.hash).offset().top - 73 <= scrollPos) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  // Navbar collapse
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // Navbar toggler
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

});