// Header Search Expansion
var submitIcon = $('.ss-searchbox-icon');
var inputBox = $('.ss-searchbox-input');
var searchBox = $('.ss-searchbox');
var isOpen = false;
submitIcon.click(function(){
    if(isOpen == false){
        searchBox.addClass('ss-searchbox-open');
        inputBox.focus();
        isOpen = true;
    } else {
        searchBox.removeClass('ss-searchbox-open');
        inputBox.focusout();
        isOpen = false;
    }
});  
 submitIcon.mouseup(function(){
        return false;
    });
searchBox.mouseup(function(){
        return false;
    });
$(document).mouseup(function(){
    if(isOpen == true){
        $('.ss-searchbox-icon').css('display','block');
        submitIcon.click();
    }
});
function buttonUp(){
    var inputVal = $('.ss-searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if ( inputVal !== 0){
        $('.ss-searchbox-icon').css('display','none');
    }
    else {
        $('.ss-searchbox-input').val('');
        $('.ss-searchbox-icon').css('display','block');
    }
}
// Header Search Expansion End


// Product Carousel
$("#bestselling-pro-crsl.owl-carousel, #featured-pro-crsl.owl-carousel").owlCarousel({
    items: 4,
    margin: 15,
    nav: true,
    navText: ["<img src='images/arrow_left-404040.svg'>","<img src='images/arrow_right-404040.svg'>"],
    dots: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
            // margin: 10
        },
        769: {
            items: 3
        },
        993: {
            items: 4
        }
    }
});
$("#testimonial-crsl.owl-carousel").owlCarousel({
    items: 1,    
    navigation: true,
    dots: true,
    mouseDrag: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
        769: {
            items: 2
        }
    }
});
// Product Carousel End

// categoryList Carousel
$("#categoryList-crsl.owl-carousel").owlCarousel({
    items: 4,
    margin: 25,
    nav: true,
    navText: ["<img src='images/arrow_left-404040.svg'>","<img src='images/arrow_right-404040.svg'>"],
    dots: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        },
        769: {
            items: 4
        }
    }
});
// categoryList Carousel End


// Brand Carousel
$("#brand-crsl").owlCarousel({
    items: 5,
    loop: true,
    nav: true,
    navText: ["<img src='images/arrow_left-404040.svg'>","<img src='images/arrow_right-404040.svg'>"],
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0:{
            items: 2
        },
        550:{
            items: 3
        },
        769:{
            items: 4
        },
        992:{
            items: 5
        }
    }
});
// Brand Carousel End

// Mobile Push Menu
// $(document).ready(function(){    
    $(document).on('click','.navbar-toggle.toggle-menu',function(){
        if(!$('#ss-navbar-collapse').hasClass('ss-spmenu-open'))
        {            
            $('#ss-navbar-collapse').addClass('ss-spmenu-open');
        }
    });
    $(document).on('click','#ss-navbar-collapseClose',function(){ 
        $('#ss-navbar-collapse').removeClass('ss-spmenu-open');
    });
// });
// Mobile Push Menu End

$(document).ready(function () {
    if($(window).width() <= "767"){
        var clone = $(".settings-sec").clone();
        $(".settings-sec").html("");
        $(clone).appendTo(".setting-area");
    }
    $(window).resize(function(){
        if($(window).width() <= "767"){
            if ($('.setting-area').is(':empty')){
                var clone = $(".settings-sec").clone();
                $(".settings-sec").html("");
                $(clone).appendTo(".setting-area");       
            }
        }else{
             $('.setting-area').find('.settings-sec').each(function() {
                var className = $(this).attr("data-name");
                //$(".container-fluid ."+className).html($(this).html());
                $(".container-fluid [data-name="+className+"]").html($(this).html());
             });
             $('.setting-area').html("");
        }
    });
});