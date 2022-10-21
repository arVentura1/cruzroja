"use strict";

$(function(){

    // baner header menu
    
    //esto es para la animacion de las barras del menu hamburguesa
    //
    let hamburgerButton = document.querySelector(".hamburger-button");
    let barra = document.querySelectorAll(".barra");
    //
    $(hamburgerButton).click(function(){
        barra.forEach(barra => barra.classList.toggle("x"));
        //
        //slider menu
        //
    });
    //
    //
    //
    let corporativoRojo = '##F5333F';
    let rgbaCol = 'rgba(' + parseInt(corporativoRojo.slice(-6,-4),16)
        + ',' + parseInt(corporativoRojo.slice(-4,-2),16)
        + ',' + parseInt(corporativoRojo.slice(-2),16)
        +',0.1)';

    // article wrapper
    $(".arti").click(function() {
        if (!$(this).children(".ca-flecha").hasClass("flecha-activa")) {
            $(this).children(".ca-flecha").addClass("flecha-activa");
            $(this).not(".ca-flecha").css({"background-color":rgbaCol});
        }
        else {
            $(this).children(".ca-flecha").removeClass("flecha-activa");
            $(this).css({"background-color":"inherit"});
        }

        $(this).next('.arti-texto').slideToggle("fast");
    });


});