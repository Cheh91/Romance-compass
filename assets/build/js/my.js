'use strict';


jQuery(document).ready(function () {
    initDropdown();
    openHeaderMenu();
    initSlider();
    searchRange();
    girlsOnline();

});

    function initDropdown(){
      $(".drop-box").click(function (e) {
        e.preventDefault();
        $(this).find(".drop-menu").toggleClass("active");
        $(this).find(".drop-btn").toggleClass("active");
      })
    }

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

function searchRange(){
  $(".search__range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
  })
}

function girlsOnline(){
  $(".videochat__online-wrap").slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    slidesToShow: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 10,
          rows: 1,
          variableWidth: true,
        }
      }
    ]
  })
}




//# sourceMappingURL=my.js.map
