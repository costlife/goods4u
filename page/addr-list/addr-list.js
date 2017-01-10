$(function () {
    $('.addr-option-item').click(function () {
        $(this).toggleClass('checked');
    });
    $('.item-delete').click(function () {
        $(this).parents('.addr-item').remove();
    });
});