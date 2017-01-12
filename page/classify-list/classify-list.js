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
    $('.cover-all-btn').on('click', function () {
        $(this).hide();
        $(this).siblings('.hide-all-btn').show();
        $(this).parents('.cover-zone').find('.cover-brick-hide').css('display', 'inline-block');
    });
    $('.hide-all-btn').on('click', function () {
        $(this).hide();
        $(this).siblings('.cover-all-btn').show();
        $(this).parents('.cover-zone').find('.cover-brick-hide').css('display', 'none');
    });
})