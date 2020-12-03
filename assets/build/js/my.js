'use strict';

// (function () {

jQuery(document).ready(function () {
    initDropdown();

});

    function initDropdown(){
        $(".search__drop-menu").click(function () {
            $(this).parent().toggleClass("active");
            // console.log("привет")
        })

        $(".search__drop-sub-menu li").click(function(){
            let currentele = $(this).html();
            $(".search__drop-menu li").html(currentele);
            $(this).parents(".search__drop-item").removeClass("active");
        })
    }



    
// })

//# sourceMappingURL=my.js.map
