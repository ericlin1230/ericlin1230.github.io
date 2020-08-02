var $window = $(window);
var $aboutblock = $("#aboutblock1")
var $contact1 = $(".contact-text")

function isScrolledIntoView(elem, $window) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();
    
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($aboutblock, $window)) {
        $aboutblock.addClass("animation1");
        console.log("WOWOEEE")
    }else{
        $aboutblock.removeClass("animation1");
        $aboutblock.css("color", "#191919");
    }

});

