$(document).ready(function(){

  // Preloader 
  //  preloader remove
$(window).on('load', function(){
  $('#preloader').fadeOut(1500);
});

// search sm
$('#smSearchBtn').click(function(){
    $('.searchSm').addClass('active')
})
$('.searchSm .closeBtn').click(function(){
    $('.searchSm').removeClass('active')
})


// mobile bottom header
$('.mobileBottomIcon').click(function(){
    $('#mobileBottom').addClass('.active')
})

 // BANNER Section
 $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 20000,
    prevArrow: "#bannerLeftArrow",
    nextArrow: "#bannerRightArrow",
    dots: true,
    dotsClass: "banner-dots",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          
          dots: false,
        },
      },
     
    ],
  });
// Mix It Up Begins
  var mixer = mixitup('.mixitup');

// featured2 Begins
$('.featured2Items .allItem').slick({
  centerMode: true,
  centerPadding: '60px',
  arrows: false ,
  prevArrow: "#featuredLeftArrow",
  nextArrow: "#featuredRightArrow",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


// review section Begins
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


// countdown
var countDownDate = new Date("jan 23, 2025 12:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
}, 1000);



})