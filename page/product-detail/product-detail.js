$(function () {
    $('.product-brick').on('click', function (e) {
        e.preventDefault();
        $('.product-brick.active').removeClass('active');
        $(this).addClass('active');
    });
});