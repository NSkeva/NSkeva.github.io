//navbar da bude črni
var x = window.matchMedia("(max-width: 990px)")
$(window).scroll(function () {
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0 && !x.matches) {
        $('#navbar').css('background', "#212529");
    } else if($scroll >= 0 && x.matches) {
        $('#navbar').css('background', '#212529');
    }
    else if($scroll <= 0 && !x.matches) {
        $('#navbar').css('background', 'transparent');
    }
    else if($scroll <= 0 && x.matches){
        $('#navbar').css('background', 'transparent');
    }
});

//carousel
$('.reviews-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    items:1,
    smartSpeed: 600,
});

$('.blog-carousel').owlCarousel({
    loop:true,
    margin:32,
    items:1,
    nav:false,
    smartSpeed: 600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
});


//na scroll makne navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 300) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}

//mobile kad se klikne link makne se navbar
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//onclick kopira text
function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
}

//animacije


