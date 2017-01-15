$(document).ready(function() {
    $('#work-ingle').mouseenter(function(){
        $('#work-ingle-desc').animate({
            left: '1.7em',
            opacity: 1
        })
    }).mouseleave(function(){
        $('#work-ingle-desc').animate({
            left: '-10em',
            opacity: 0
        })
    });

    $('#work-freshbooks').mouseenter(function(){
        $('#work-freshbooks-desc').animate({
            left: '1.7em',
            opacity: 1
        })
    }).mouseleave(function(){
        $('#work-freshbooks-desc').animate({
            left: '-10em',
            opacity: 0
        })

    });$('#work-metroland').mouseenter(function(){
        $('#work-metroland-desc').animate({
            left: '1.7em',
            opacity: 1
        })
    }).mouseleave(function(){
        $('#work-metroland-desc').animate({
            left: '-10em',
            opacity: 0
        })
    });

    $('#work-ibm').mouseenter(function(){
        $('#work-ibm-desc').animate({
            left: '1.7em',
            opacity: 1
        })
    }).mouseleave(function(){
        $('#work-ibm-desc').animate({
            left: '-10em',
            opacity: 0
        })
    });

});
