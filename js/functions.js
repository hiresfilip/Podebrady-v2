$(document).ready(function() {

    $('.img').hover(function() {
        // over
        $(this).animate({ opacity: 0.5 });
    }, function() {
        // out
        $(this).animate({ opacity: 1 }, "fast");
    });

    $('.foto').hover(function() {
        // over
        $(this).animate({ opacity: 0.5 });
    }, function() {
        // out
        $(this).animate({ opacity: 1 }, "fast");
    });

});