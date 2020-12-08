'use strict';


jQuery(document).ready(function () {
    initDropdown();
    openHeaderMenu();
    initSlider();

});

    function initDropdown(){
      $(".drop-box").click(function (e) {
        e.preventDefault();
        $(this).find(".drop-menu").toggleClass("active");
      })
    }

    // function openHeaderMenu(){
    //   $(".header__btn-open").click(function(){
    //     $(".header__btn-open span").toggleClass("active")
    //     $(".header__nav").toggle(500);
    //   })
    // }

function openHeaderMenu() {
  $(".header__btn-open").click(function () {
    $(".header__btn-open span").toggleClass("active")
    $(".header__nav").toggleClass("open");
  })
}

    function initSlider(){
      $('.profile__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
      })
      
  }


//# sourceMappingURL=my.js.map
