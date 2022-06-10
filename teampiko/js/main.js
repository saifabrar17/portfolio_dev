//scroll reveal

const sr = ScrollReveal({
    distance: '30px',
    duration: 800, 
})

sr.reveal(`.banner-h1, .banner-btns, .wwd-top, .btn-1, .c-detail, .btn-2, .mail-sr, .card-middle, .brand-sr, .offer-right`, {
    origin: 'bottom',
    interval: 200,
})

sr.reveal(`.card-right, .about-right-sr, .sr-right`, {
    origin: 'right',
    interval: 200,
})

sr.reveal(`.card-left`, {
    origin: 'left',
    interval: 200,
})


//sr end


//OWL CAROUSEL START
//on click center start
var $owl = $('.owl-carousel');
$owl.children().each(function (index) {
    $(this).attr('data-position', index);
});
$(document).on('click', '.owl-item>div', function () {
    $owl.trigger('to.owl.carousel', $(this).data('position'));
});
$(function () {
    $('.loops').on('initialized.owl.carousel translate.owl.carousel', function (e) {
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx - 1).addClass('medium');
        $('.owl-item').eq(idx + 1).addClass('medium');
    });
    $('.loops').owlCarousel({
        center: true,
        items: 5,
        loop: true,
        navText: ['<i class="fas nav-arrow-left fa-arrow-left"></i>', '<i class="fas nav-arrow-right fa-arrow-right"></i>'],
        navContainer: '#navdiv-wwd',
        margin: 10,
        autoplay: true,
        autoPlay: 1000,
        //autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
           
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 5,
                nav: false,
            }
        }
    });
});

//OWL CAROUSEL END


//MIXITUP
var mixer = mixitup('.mix-items');

//COUNTER JS

$('.countfect').each(function () { var $this = $(this), countTo = $this.attr('data-num'); delayTo = $this.attr('delay'); if (!delayTo) { delayTo = 4000 } $({ countNum: $this.text() }).animate({ countNum: countTo }, { duration: delayTo, easing: 'linear', step: function () { $this.text(Math.floor(this.countNum)); }, complete: function () { $this.text(this.countNum); } }); });

//second owl carousel
$('.tesimonial-carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    // navText: ['prev', 'netx'],
    navText: ['<i class="fas nav-arrow-left fa-arrow-left"></i>', '<i class="fas nav-arrow-right fa-arrow-right"></i>'],
    navContainer: '#navdiv',
    autoplay: true,
    autoPlay: 1000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        }
    }
});
//third owl carousel

$('.pricing-carousel').owlCarousel({
    items: 3,
    loop: false,
});

//fourth owl carousel

$('.owl-posts').owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoPlay: 1000,
    //autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    }
});


/*==================
header sticky
==================*/
var windows = $(window);
var sticky = $('.header-sticky')
windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
        sticky.removeClass('stick');
    } else {
        sticky.addClass('stick');
    }
});

/*========== SCROLL UP ==========*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


//============================================

