$(function () {
    $('.decrease-count').click(function () {
        var $target = $(this).siblings('.current-count');
        var value = $target.html() - 1;
        $target.html(value > 0 ? value : 0);
    });
    $('.increase-count').click(function () {
        var $target = $(this).siblings('.current-count');
        var value = $target.html() - 0 + 1;
        $target.html(value);
    });
    $('.cart-item').click(function () {
        $(this).find('.select-icon').toggleClass('selected');
    });
    $('.selection').click(function () {
        var selectAll = $(this).find('.select-icon').hasClass('selected');
        if (selectAll) {
            $('.select-icon').removeClass('selected');
        } else {
            $('.select-icon').addClass('selected');
        }
    });
});