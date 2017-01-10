$(function () {
    var counter = 0
    $('.catetory-item').click(function () {
        $('.catetory-item.active').removeClass('active');
        $(this).addClass('active');
        $('.detail-item div').text('测试' + counter ++ );
    });
});