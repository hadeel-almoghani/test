$('.slider').owlCarousel({
    center: true,
    dots: true,
    loop:true,
    margin:20,
    items: 1,
    rtl: $('html').attr('lang') == 'ar' ? true : false,
    
    responsive: {
        0 : {
            stagePadding: 0,
        },
        700 : {
            stagePadding: 200,
        }
    }
});