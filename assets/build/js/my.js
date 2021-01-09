'use strict';


jQuery(document).ready(function () {
  initDropdown();
  openHeaderMenu();
  initSlider();
  searchRange();
  girlsOnline();
  rangeSlider();
  openSearchMenu();


});

function initDropdown() {
  $(".drop-btn").click(function (e) {
    e.preventDefault();
    // $(this).closest(".drop-box").toggleClass("active");
    // $(this).closest(".drop-box").find(".drop-btn").toggleClass("active");


    let alldropBox = $(".drop-box");
    let currentDropBox = $(this).closest(".drop-box");

    if(currentDropBox.hasClass("active")){
      currentDropBox.removeClass("active");
    } else {
      alldropBox.removeClass("active");
      currentDropBox.addClass("active");
    }
    
  })

  $("body").click(function (e){
    let block = $(".drop-box");

    if(block.has(e.target).length == 0){
      block.removeClass("active");
    }
  })
}


function openHeaderMenu() {
  $(".header__btn-open").click(function () {
    $(".header__btn-open span").toggleClass("active");
    $(".header__nav").toggleClass("open");
  })
}

function initSlider() {
  $('.profile__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000
  })
}


function openSearchMenu(){
  $(".search-btn").click(function(){
    $(".search__block").addClass("active");
    $(".modal").addClass("active");
    $("body").css("overflow-y", "hidden");
  })

  $(".search__top-btn").click(function(){
    $(".search__block").removeClass("active");
    $(".modal").removeClass("active");
    $("body").css("overflow-y", "auto");
  })
}


function searchRange() {
  $(".search__range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
  })
}

function girlsOnline() {
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
          swipeToSlide: true
        }
      }
    ]
  })
}

function rangeSlider() {
  $(".js-range-slider").ionRangeSlider({
    
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
   
  });
}



//# sourceMappingURL=my.js.map
