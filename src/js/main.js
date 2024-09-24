// lazyload for images
function img_loader() {
    setTimeout(function(){
        $('body').find('img[data-src]').each(function(){
            var src = $(this).attr('data-src');
            var srcset = $(this).attr('data-srcset');
            var classes = $(this).attr('class');
            var alt = $(this).attr('alt');
            var title = $(this).attr('title');
            if (src) {
              var img = new Image();
              $(img).hide();
              $(img).on('load', function(){
                $(this).fadeIn(400);
                setTimeout(function(){
                    $(img).addClass('transition');
                },400);
              });
              $(img).attr('srcset', srcset );  
              $(img).attr('src', src );
              $(img).attr('alt', alt);
              $(img).attr('title', title);
              $(img).addClass(classes);
              $(this).replaceWith(img);
            }
        });
    }, 150);
}


// calc block position in viewport
$.fn.percentOfViewport = function() {
    var viewportHeight = $(window).height();

    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).height();

    
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + viewportHeight;
    var viewportCenter = viewportTop + (viewportHeight/2);

    var top_to_top_percent = (elementTop - viewportTop) / viewportHeight * 100;
    var bottom_to_top_percent = (elementBottom - viewportTop) / viewportHeight * 100;

    var top_to_bottom_percent = (viewportBottom - elementTop) / viewportHeight * 100;
    var bottom_to_bottom_percent = (viewportBottom - elementBottom) / viewportHeight * 100;

    return {
        ELtop_to_VPtop:     top_to_top_percent,
        ELbottom_to_VPtop:  bottom_to_top_percent,
        ELtop_to_VPbottom:  top_to_bottom_percent,
        ELbottom_to_VPbottom:  bottom_to_bottom_percent,
        viewportHeight: viewportHeight
    };
};


// check is block is in viewport
$.fn.isInViewport = function() {
    var p = $(this).percentOfViewport();

    return  p.ELtop_to_VPtop < 100 && 
            p.ELbottom_to_VPtop > 0;
};





$(document).ready(function(){
    $('.panorama__bg').on('click', function(){
        $(this).addClass('d-none');
    });

    $(function() {

        $(".accordion__title, .projects-main__tbl-l, .steps__title").on("click", function(e) {

            e.preventDefault();
            var $this = $(this);

            if (!$this.hasClass("accordion-active")) {
                $(".accordion__content, .projects-main__tbl-r, .steps__content").slideUp(400);
                $(".accordion__title, .projects-main__tbl-l, .steps__title").removeClass("accordion-active");
            }

            $this.toggleClass("accordion-active");
            $this.next().slideToggle();
        });
    });




    $('.js-more').on('click', function(){
        $(this).prev().toggleClass('is-open');
    });


    $('.js-vd-btn').on('click', function(){
        $('.about-video').toggleClass('is-open');
        document.querySelector('#vd_video-full').play();
    });

    $('.js-vd-btn-skip').on('click', function(){
        document.querySelector('#vd_video-full').pause();
        document.querySelector('#vd_video-full').currentTime = 0;
        $('.about-video').removeClass('is-open');
    });




    var swiper1 = new Swiper(".js-why-slider-nav", {
        spaceBetween: 1,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".js-why-slider-for", {
        spaceBetween: 1,
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: swiper1,
        },
    });

    swiper1.on('click', function () {
        swiper2.autoplay.stop();
    });

    var swiper3 = new Swiper(".js-plan-slider-nav", {
        spaceBetween: 1,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper4 = new Swiper(".js-plan-slider-for", {
        spaceBetween: 1,
        slidesPerView: 1,
        effect: 'fade',
        thumbs: {
            swiper: swiper3,
        }
    });

    var swiper5 = new Swiper(".js-gallery-slider-nav", {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper6 = new Swiper(".js-gallery-slider-for", {
        spaceBetween: 1,
        slidesPerView: 1,
        thumbs: {
            swiper: swiper5,
        },
    });





    var swiper7 = new Swiper(".js-slider-for-i", {
        spaceBetween: 8,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.js-slider-for-next',
            prevEl: '.js-slider-for-prev',
        },
        breakpoints: {

            991: {
                spaceBetween: 1,
                slidesPerView: 1,
            }
        },
        /*on: {

            reachBeginnig: function () {
                //$('.swiper-button-prev').removeClass('swiper-button-disabled').addClass('op');

                $('.swiper-button-prev.op').on('click', function(){
                    //$(this).parent().parent().removeClass('swiper-slide-active').prev().addClass('swiper-slide-active');
                });

                //$('.swiper-slide').removeClass('swiper-slide-active').prev().addClass('swiper-slide-active');

            },
            reachEnd: function () {
                //$('.swiper-button-next').removeClass('swiper-button-disabled').addClass('op');

                $('.swiper-button-next.op').on('click', function(){
                   // $(this).parent().parent().removeClass('swiper-slide-active').next().addClass('swiper-slide-active');
                });

                //$('.swiper-slide').removeClass('swiper-slide-active').next().addClass('swiper-slide-active');

            },
        },*/
    });


    /*
        $('.js-slider-for-next').on('click', function(e){

            if($('.gallery__sl .gallery__slider-for-item.gallery-category1').hasClass('is-active')){
                $('.gallery__slider-nav-category1').addClass('is-active');
            } else{
                $('.gallery__slider-nav-category1').removeClass('is-active');
            }

            if($('.gallery__sl .gallery__slider-for-item.gallery-category2').hasClass('is-active')){
                $('.gallery__slider-nav-category2').addClass('is-active');
            } else{
                $('.gallery__slider-nav-category2').removeClass('is-active');
            }

            if($('.gallery__sl .gallery__slider-for-item.gallery-category3').hasClass('is-active')){
                $('.gallery__slider-nav-category3').addClass('is-active');
            } else{
                $('.gallery__slider-nav-category3').removeClass('is-active');
            }

            if($('.gallery__sl .gallery__slider-for-item.gallery-category4').hasClass('is-active')){
                $('.gallery__slider-nav-category4').addClass('is-active');
            } else{
                $('.gallery__slider-nav-category4').removeClass('is-active');
            }

            if($('.gallery__sl .gallery__slider-for-item.gallery-category5').hasClass('is-active')){
                $('.gallery__slider-nav-category5').addClass('is-active');
            } else{
                $('.gallery__slider-nav-category5').removeClass('is-active');
            }
        });





       var slider = $('.js-slider-for-i');

        slider.each(function(){

            var currentSlider = $(this);

            const swiper55 = new Swiper(currentSlider, {
                on: {
                    transitionStart: function () {
                        slider.removeClass('is-active');
                        currentSlider.prev('.js-slider-for-i').addClass('is-active');
                        console.log(star);

                    },
                    transitionEnd: function () {
                        console.log(end);

                        slider.removeClass('is-active');
                        currentSlider.next('.js-slider-for-i').addClass('is-active');
                    },
                },
            });
        });*/



    var swiper8 = new Swiper(".js-details-slider-nav", {
        spaceBetween: 8,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {

            991: {
                spaceBetween: 1,
                slidesPerView: 6,
            }
        }
    });
    var swiper9 = new Swiper(".js-details-slider-for", {
        spaceBetween: 8,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
        },
        thumbs: {
            swiper: swiper8,
        },
        pagination: {
            el: '.js-details-slider-pagination',
            clickable: true,
        },
        breakpoints: {
            991: {
                spaceBetween: 1,
                slidesPerView: 1,
            }
        }
    });


    var swiper10 = new Swiper(".js-catalog-slider-nav", {
        spaceBetween: 1,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        initialSlide: 2,
        breakpoints: {
            991: {
                initialSlide: 0,
            }
        }

    });
    var swiper11 = new Swiper(".js-catalog-slider-for", {
        spaceBetween: 1,
        slidesPerView: 1,
        autoHeight: true,
        initialSlide: 2,
        breakpoints: {
            991: {
                initialSlide: 0,
            }
        },
        thumbs: {
            swiper: swiper10,
        },

    });



    var swiper12 = new Swiper(".js-tech-slider-nav", {
        //spaceBetween: 1,
        //slidesPerView: 'auto',
        //centeredSlides: true,
        //watchSlidesProgress: true,
        //allowTouchMove: true,

        //simulateTouch: false,
        //freeMode: true,
        //slideToClickedSlide: false,
    });
    var swiper13 = new Swiper(".js-tech-slider-for", {
        spaceBetween: 0,
        slidesPerView: 1,
        watchSlidesProgress: true,
        slideToClickedSlide: true
    });


    var swiper14 = new Swiper(".js-about-like-slider", {
        spaceBetween: 1,
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },

    });

    var swiper15 = new Swiper(".js-banner-catalog-slider", {
        spaceBetween: 1,
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },

    });

    var swiper16 = new Swiper(".js-solutions", {
        spaceBetween: 4,
        slidesPerView: 'auto',
        breakpoints: {

            991: {
                spaceBetween: 1,
                slidesPerView: 4,
            }
        }

    });



    swiper13.on('slideChange', function () {
        $('.tech__drag').addClass('is-close');
    });



    // smooth scrolling to anchor
    $('a.smooth, nav > ul li a').on('click touch', function(){
        var id = $(this).attr('href');
        var loc_url = window.location.pathname;
        var pos = ($(id).offset().top) - $('header').outerHeight() - 49;
        $('html, body').animate({scrollTop: pos }, 1000);
        return false;
    });

    // video play on click
    $('.container').on('click touch', '.js-play-video', function(){
        var video = $(this).siblings('video')[0];
        video.play();
        video.controls="controls";
        $(this).hide();
    });

    // opening popups
    $('body').on('click touch', '.open-dialog, .open-popup, .open-form, .open-modal, .open-dialog a, .open-popup a, .open-form a, .open-modal a', function(){
        var category = $(this).attr('href');
        var categoryForm = $('.dialogs ' + category);
        $('.dialogs .popup').removeClass('active').hide();
        categoryForm.show();
        $('.dialogs').show();
        $('.dialogs').animate({'opacity':1}, 200, function() {
            categoryForm.addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    // closing popups
    $('.dialogs').on('click touch', '.close, .close-bg', function() {
        $('.dialogs .popup').removeClass('active');
        $('.dialogs').animate({'opacity':0}, 200, function() {
            $('.dialogs').hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y':'auto'});
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27) $('.dialogs .popup.active .close').click(); // esc
    });

    // all sliders
    // const swiper = new Swiper('.swiper', {
    //     slidesPerView: 'auto',
    //     speed: 400,
    //     spaceBetween: 20,
    //     navigation: {
    //         nextEl: '.slider-next',
    //         prevEl: '.slider-prev',
    //     },
    //     pagination: {
    //         el: '.slider-pagination',
    //         type: 'bullets',
    //     },
    // });
});	


$(window).on('load scroll', function(){
    var scrollTop = $(window).scrollTop();


    // start animations when it is in viewport but pause when out of it
    // .out-of-viewport doing nothing if animation item can be runned only once
    $('.js-wait-animation').each(function(){
        if ( $(this).isInViewport() ) {
            $(this).addClass('animate')
                        .removeClass('out-of-viewport');
        } else {
            $(this).addClass('out-of-viewport');
        }
    });
});


$(window).on('load', function(){

    img_loader();
    
});