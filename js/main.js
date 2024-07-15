
$(window).scroll(function(){

    let domain = $(".domain").offset().top;
    let wScroll = $(window).scrollTop();

    if(wScroll >= domain){

        $('#slideUp').fadeIn(500);
    }
    else {
        $('#slideUp').fadeOut(500);
    }
})

// scroll to top
$('#slideUp').click(function(){

    $('html , body').animate({scrollTop: 0}, 1500)
})



// link scroll to section
$('.nav-link').click( function(e) {

    let section = $(e.target).attr('href');
    let secOffset = $(section).offset().top;
  
    $('body , html').animate({scrollTop: secOffset}, 2000);
    
  })



