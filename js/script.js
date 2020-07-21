$(document).ready(function () {
    $('.hapo-message-icon').click(function () {
        $('.hapo-wrap-message').toggle();
    });
    $('.close').click(function () {
        $('.hapo-wrap-message').hide();
    });
});
