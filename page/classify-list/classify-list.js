$(function () {
    $('.shaixuan').on('click', function () {
        $('.cover').addClass('active');
    });
    $('.filter-item').on('click', function () {
        $('.filter-item.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.cover-brick').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
    });
})