$(document).ready(function(){
    // Navbar-nav-active
    $('.navbar-nav .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // scroll-top-btn
    $('.scroll-top-btn').click(function(){
        $("html,body").animate({
            scrollTop:0
        },1500);
    });

    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();
        if(ourwindow<500){
            $('.scroll-top-btn').fadeOut();
        } else{
            $('.scroll-top-btn').fadeIn();
        }
    });

    //our-fixed-menu-top
    
    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();

        if(ourwindow>700){
            $('body').addClass('our-fixed-menu-top');
        } else{
            $('body').removeClass('our-fixed-menu-top');
        }
    });
    // our-menu-target
    $('.navbar-nav a[href^="#"]').click(function(){
        var target = this.hash;
        $('html,body').animate({
            scrollTop:$(target).offset().top-88
        },1500)
    });

    // wow 
    new WOW().init();


    $("body").niceScroll({
        cursorcolor:		"#FB414E",
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