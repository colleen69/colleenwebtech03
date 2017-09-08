$('.video1').height('100%')

$('.video2').height('100%') 

$('.video3').height('100%') 

$('.video4').height('100%')  

$( 'cd-section' ).height('100%');

$(document).ready(function(){
      $('.crew').slick({
      centerMode: true,
      centerPadding: '60px',
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
          
      responsive: [{
      breakpoint: 768,
      settings: {
      arrows: true,

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
    });	

/*On page scroll start to play */
$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

media.each(function(index, el) {
        var yTopMedia = $(this).offset().top;
        var yBottomMedia = $(this).height() + yTopMedia;
if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
        $(this).get(0).play();
        $('.gal,.slick-dots').hide().delay(0).fadeIn(900);
        $('svg').hide().delay(0).fadeIn(800);
        $('.buy-info,buy-dvd-button-div,.container').hide().delay(0).fadeIn(1000);
        
        } else {
        $(this).get(0).pause();
        }
if(scrollTop < yBottomMedia){
    $('.homepagetitle').delay(1000).fadeIn(1000);

    } else { $('.homepagetitle').hide();
}
});
    }   
    $(document).on('scroll', checkMedia);
});

// autoplay video1 only
$(".video1")[0].play();

$(".homepagetitle").fadeOut(4500); 

$('.scroll-title-container').hide().delay(3000).fadeIn(4000);

$(document).on('scroll', function(){
    $('.scroll-title-container').fadeOut(500);
});




