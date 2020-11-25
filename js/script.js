$(document).ready(function () {
    $('.carousel__list').slick({
        dots: true,
        prevArrow: $('.carousel__prev'),
        nextArrow: $('.carousel__next'),
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
        /*
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        */
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $.fn.lightspeedBox({
        showImageTitle: true,
        showImageCount: true,
        showDownloadButton: true,
        showAutoPlayButton: true,
        autoPlayback: false,
        playbackTiming: 3500,
        zIndex: 30,
        locale: {
            nextButton: 'Next image',
            prevButton: 'Previous image',
            closeButton: 'Close',
            downloadButton: 'Download image',
            noImageFound: 'Sorry, no image found.',
            autoplayButton: 'Enable autoplay'
        }
    });
});

$('.counter').countUp();