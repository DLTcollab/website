$(function () {

    $('.progressive-image').each(function () {

        var image = new Image();
        var previewImage = $(this).find('.loadingImage');
        var newImage = $(this).find('.overlay');

        image.onload = function () {
            newImage.css('background-image', 'url(' + image.src + ')');
            newImage.css('opacity', '1');
        };

        image.src = previewImage.data('image');

    });

});