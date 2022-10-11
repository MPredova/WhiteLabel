$('.owl-carousel').owlCarousel({ 
    items: 9,
    loop: true,
    margin: 35,
    // autoplay: true,
    // slideTransition: 'linear',
    // autoplayTimeout: 3000,
    // autoplaySpeed: 3000,
    // autoplayHoverPause: false
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        800:{
            items:5
        },
        1000:{
            items:7
        },
        1200:{
            items:9
        }
    }
})
// $(document).ready(function () {
//     var owl = $('.owl-carousel');
//     owl.owlCarousel({
//         items: 9,
//         loop: true,
//         margin: 35,
//         // autoplay: true,
//         // slideTransition: 'linear',
//         // autoplayTimeout: 3000,
//         // autoplaySpeed: 3000,
//         // autoplayHoverPause: false

//     });

// });