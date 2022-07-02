$(document).ready(function(){

    $("body").on("click","[data-scroll]", function (event) {
        event.preventDefault();
        var id  = $(this).attr('data-scroll'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

});