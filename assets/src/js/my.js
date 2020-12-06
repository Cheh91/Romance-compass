'use strict';

// (function () {

jQuery(document).ready(function () {
    initDropdown();
    openHeaderMenu();
    initSlider();

});

    function initDropdown(){
        $(".search__drop-menu").click(function (e) {
          e.preventDefault();
            $(this).parent().toggleClass("active");
            // console.log("привет")
        })

        $(".search__drop-sub-menu li").click(function(e){
          e.preventDefault();
            let currentele = $(this).html();
            $(".search__drop-menu li").html(currentele);
            $(this).parents(".search__drop-item").removeClass("active");
        })
    }

    function openHeaderMenu(){
      // $(".header__btn-open").click(function(){
      //   $(".header__nav").show();
      // })

      // $(".header__nav-btn-close").click(function(){
      //   $(".header__nav").hide();
      // })

      $(".header__btn-open").click(function(){
        $(".header__btn-open span").toggleClass("active")
        $(".header__nav").toggle(500);
      })
    }

    function initSlider(){
      $('.slick-slider').slick({
        // dots: true,
        // infinite: true,
        // speed: 1000,
        // slidesToShow: 1,
        // centerMode: true,
        // centerPadding: "120px",
        // variableWidth: false,
        // autoplay: true,
        // fade: true,
    })
  }

    // function initSlider(){
    //   new Swiper(".swiper-container")
    // }
    //   var mySwiper = new Swiper('.swiper-container', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   })
    // }



    
// })
