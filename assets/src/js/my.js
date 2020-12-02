// 'use strict';

// $(function(){
//   $(".search__drop-menu").delegate(".search__drop-menu", "click", function(e) {
//     e.preventDefault();
//     value("sfse")
//     // $(this).find(".search__drop-sub-menu").toggleClass("active");
//   })
// })

// function dropDownMenu(){
//   $(".search__drop-menu").click(function(e){
//     e.preventDefault();
//     $(this).parent().toggleClass(active);
//   })
// }

function dropdownMenu(){
  $(".search__drop-menu").click(function(){
    $(this).parent(".search__drop-item").show();
  })
}