$(document).ready(function (){


    $('.pp').click(function () { 

        $('.eeee').toggle();

    
});


$('.x').click(function () { 

    $('.sportt').toggle();
});


$('.tt').click(function () { 

    $('.gs').toggle();
});

$('.o').click(function () { 

    $('.oo').toggle();
});
$('.gg').click(function () { 

    $('.ggr').toggle();
});



document.onkeydown= function(){return false;}


document.onkeyup= function(){return false;}




document.oncontextmenu = function(){return false;}


document.onmousedown = function () {return false;}



function evitarSeleccion( target ) {
   if ( typeof target.onselectstart != "undefined" ) {
       target.onselectstart = function( ) { return false; }
    }
    else if ( typeof target.style.MozUserSelect != "undefined" ) {
       target.style.MozUserSelect = "none"
    }
    else {
       target.onmousedown = function( ) { return false; }
    }
    
    target.style.cursor = "default"
 }
  
 evitarSeleccion( document.body );




  
 
});




//log
window.addEventListener('load', function () {
    const loader = document.querySelector(".lds-hourglass");
    loader.className += "hidden";
});