
// navgation

 var scrolltoOffset = $('#header').outerHeight() - 1;
 $(document).on('click', '.nav-menu1 a, .mobile-nav a, .scrollto', function(e) {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     if (target.length) {
       e.preventDefault();

       var scrollto = target.offset().top - scrolltoOffset;

       if ($(this).attr("href") == '#header') {
         scrollto = 0;
       }

       $('html, body').animate({
         scrollTop: scrollto
       }, 1500, 'easeInOutExpo');

       if ($(this).parents('.nav-menu1, .mobile-nav').length) {
         $('.nav-menu1 .active, .mobile-nav .active').removeClass('active');
         $(this).closest('li').addClass('active');
       }

       if ($('body').hasClass('mobile-nav-active')) {
         $('body').removeClass('mobile-nav-active');
         $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
         $('.mobile-nav-overly').fadeOut();
       }
       return false;
     }
   }
 });

 // Activate smooth scroll on page load with hash links in the url
 $(document).ready(function() {
   if (window.location.hash) {
     var initial_nav = window.location.hash;
     if ($(initial_nav).length) {
       var scrollto = $(initial_nav).offset().top - scrolltoOffset;
       $('html, body').animate({
         scrollTop: scrollto
       }, 1500, 'easeInOutExpo');
     }
   }
 });

 // Mobile Navigation
 if ($('.nav-menu1').length) {
  var $mobile_nav = $('.nav-menu1').clone().prop({
    class: 'mobile-nav d-lg-none'
  });
  $('body').append($mobile_nav);
  $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
  $('body').append('<div class="mobile-nav-overly"></div>');

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    $('.mobile-nav-overly').toggle();
  });

  $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').fadeOut();
      }
    }
  });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  $(".mobile-nav, .mobile-nav-toggle").hide();
}

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.nav-menu1, #mobile-nav');

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function() {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
    if (cur_pos < 300) {
      $(".nav-menu1 ul:first li:first").addClass('active');
    }
  });
});

// Toggle .header-scrolled class to #header when page is scrolled
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}


 // Intro carousel
 var heroCarousel = $("#heroCarousel");

 heroCarousel.on('slid.bs.carousel', function(e) {
   $(this).find('h2').addClass('animate__animated animate__fadeInDown');
   $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
 });



//Testimonial
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,

  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  infinite: true,

  focusOnSelect: true
});

//hony moon
$('.honymoon1').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3 ,
  dots: true,
  speed: 300,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 } 
      }
     ]
});





 //back-to-top
 var scrollButton = $('a.back-to-top') ;
   
 $(window).scroll(function(){
  $(this).scrollTop() >= 800?scrollButton.show(): scrollButton.hide();
 });
 scrollButton.click(function(){
     $('body,html').animate({scrollTop : 0});
 });



 //loading
 $(window).on('load', function(){
   $('.loading svg').fadeOut(2500 , function(){
     $(this).parent().fadeOut(2000, function(){
       (this).remove();
     });
   });
 });