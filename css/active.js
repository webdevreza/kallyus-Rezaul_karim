$(document).ready(function () {
    
    var containerEl = document.querySelector('.mix_container');
    var mixer = mixitup(containerEl, {
        selectors: {
            control: '[our-mixitup-control]'
        }
    });

        // Fixed Navbar
        $(window).scroll(function(){
            var ourwindow = $(this).scrollTop();
    
            if(ourwindow>52){
                $('body').addClass('fixed_nav');
            } else{
                $('body').removeClass('fixed_nav');
            }
        })

      // Smooth_Scroll_To_Section
    $('.navbar-nav a[href^="#"]').click(function(){
        var target = this.hash;
        $('html,body').animate({
            scrollTop:$(target).offset().top-106
        },1500);
    });

     // Go_To_Top
    $('.go_top').click(function(){
        $("html,body").animate({
            scrollTop:0
        },1500);
    });

    $('.go_top').hide();

    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();
        if(ourwindow<500){
            $('.go_top').fadeOut();
        } else{
            $('.go_top').fadeIn();
        }
    });




    $('.team_slider, .brand_slider').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    });

    $("body").niceScroll({
        cursorcolor:		"#4caf50",
        cursorwidth: 		"12px",
        cursorborder: 		"0px solid #000",
        autohidemode: 		true,
        hidecursordelay: 	400,
        cursorfixedheight: 	false,
        cursorminheight: 	20,
        enablekeyboard: 	true,
        horizrailenabled: 	true,
        smoothscroll: 		true,
        iframeautoresize: 	true,
        touchbehavior: 		false,
        zindex: 999
        });


});