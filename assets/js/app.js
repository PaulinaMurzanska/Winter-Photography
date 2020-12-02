// $('.slider .owl-carousel').owlCarousel({
//     loop: true,
//     margin: 0,
//     nav: false,
//     items: 1,

// })

// $('.testimonials .owl-carousel').owlCarousel({
//     loop: true,
//     margin: 20,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         767: {
//             items: 2
//         },
//         992: {
//             items: 3
//         }
//     }

// })
AOS.init();

$(window).on('scroll', function () {
    if ($(document).scrollTop() > 500) {
        $('body').addClass('move');
    } else {
        $('body').removeClass('move');
    }
})





// $('.hamburger').on('click', (event) => {
//     $('.hamburger').toggleClass('is-active');
//     $('body').toggleClass('menu-open');

// })

// $('.pop-up').on('click', (event) => {
//     $('.pop-up').toggleClass('is-active');
//     $('.pop_up').fadeToggle('slow')


// })

$('.hamburger-btn').on('click', (event) => {
    $('.menu-hidden').addClass('visible');

})

$('.menu-hidden .fas').on('click', (event) => {
    $('.menu-hidden').removeClass('visible');


})



