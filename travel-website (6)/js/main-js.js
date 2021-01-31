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




 //back-to-top
 var scrollButton = $('a.back-to-top') ;
   
 $(window).scroll(function(){
  $(this).scrollTop() >= 800?scrollButton.show(): scrollButton.hide();
 });
 scrollButton.click(function(){
     $('body,html').animate({scrollTop : 0});
 });



 //range
 $(".range").ionRangeSlider({
  grid: true,
  min: 100,
  max: 10000,
  from: 50,
  step: 5,
  max_postfix: "+",
  prefix: "$",
  // postfix: " €/ ₽",
});
