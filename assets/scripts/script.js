"use strict";

$(function(){   

    //progress-bar in webpage scroll
    $(document).on("scroll", function(){
        let pixels = $(document).scrollTop();
        let webHeight = $(document).height() - $(window).height();
        let progress = 100 * pixels/webHeight;

        $(".progress-bar").css({"width":progress+"%"});
    });

    //open/close mobile menu
    $(".menu-bar").click(function(){
        $(".sidebar").addClass("sidebar-active");
        $(".back-to-top").addClass("back-to-top-active");
    });

    $(".close-icon").click(function(){
        $(".sidebar").removeClass("sidebar-active");
        $(".back-to-top").removeClass("back-to-top-active");
    });

    //faq wrapper
    $(".pregunta-titulo").click(function() {
        $(this).toggleClass("pregunta-titulo-activo");
        $(this).children(".inner-pt").children(".flechita").toggleClass("flecha-activa");
        $(this).next(".inner-pt-text").slideToggle("fast");
    });

    //back to top button
    $(".back-to-top").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    //close mobile menu if its clicked outside
    $(document).mouseup(function(e){
        let mobileMenu = $(".sidebar");

        if (!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
           mobileMenu.removeClass("sidebar-active");
           $(".back-to-top").removeClass("back-to-top-active");
        }
     });

    //animation for smooth scroll links
    $("a[href^='#']").click(function(){

        let targetLink = this.hash;
        let targetLink2 = $(targetLink);

        $('html, body').stop().animate({
            'scrollTop': targetLink2.offset().top
        }, 100, 'swing', function () {
            window.location.hash = targetLink;
        });

        if ($(".sidebar").hasClass("sidebar-active")) {
            $(".sidebar").removeClass("sidebar-active");
        }

        if ($(".back-to-top").hasClass("back-to-top-active")) {
            $(".back-to-top").removeClass("back-to-top-active");
        }
    });
    
    $(".elipse").click(function(){

        $(".elipse").each(function(){
            if ($(this).attr('src') == './assets/images/EllipseBlack.webp') {
                $(this).attr('src','./assets/images/EllipseWhite.svg');
            }
        });

        $(this).attr('src','./assets/images/EllipseBlack.webp');
    });
});