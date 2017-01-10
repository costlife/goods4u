$(function () {
    $('.history-delete').on('click', function () {
        $(this).parents('.history-item').remove();
    });
    $('.history-clear').on('click', function () {
        $('.history-container').remove();
    });
});