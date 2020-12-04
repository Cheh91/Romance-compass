'use strict';

// (function () {

jQuery(document).ready(function () {
    initDropdown();
    openHeaderMenu();

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



    
// })
