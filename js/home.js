$(document).ready(function() {
    $('#work-ingle').mouseenter(function(){
        $('#work-ingle-desc').animate({
            left: '1.7em',
            opacity: 1
        })
    });

    $('#work-ingle').mouseleave(function(){
        $('#work-ingle-desc').animate({
            left: '-200px',
            opacity: 0
        })
    });
});
