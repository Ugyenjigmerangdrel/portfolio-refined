$(document).ready(function(){
   
  let btns = $('.service-area .button-group');

  btns.click(function(e){
    let btns = $('.service-area .button-group .slider').removeClass('.slider-active');
    e.target.classList.add('.slider-active');

    let selector = $(e.target).attr('data-filter');

    $('.service-area .mixer').isotope({
      filter:selector
    });

    $('.service-area .about-title').isotope({
      filter:selector
    });
    return false;


  })
})

$('.test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });

$(".owl-carousel").owlCarousel({
      loop:true,
      autoplay:true,
      dots:true,
      responsive:{
        0:{
            items:1
        },
        544:{
            items:1
        }
      }
  });

let nav_offset_top = $('.header_area').height()+50;

function navbarFixed(){
  if($(".header_area").length){
    $(window).scroll(function(){
      let scroll = $(window).scrollTop();
      if(scroll>=nav_offset_top){

      }else{
        $('header_area .main-menu').addClass('navbar_fixed');
      }
    })
  }
}
 
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});
