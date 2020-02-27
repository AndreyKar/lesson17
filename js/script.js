$(document).ready(function() {
    function showModal() {
        $('.overlay').animate({opacity: 'toggle'}, 1000);
        $('.modal').animate({height: 'toggle'}, 1000);
    }

    $('.main_btna').on('click', function() {
        showModal();
    });

    $('.main_btn').on('click', function() {
        showModal();
    });

    $($('.main_nav').find('li')[1]).on('click', function() {
        showModal();
    });

    $('.close').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'}, 1000);
        $('.modal').animate({height: 'toggle'}, 1000);
    });
});