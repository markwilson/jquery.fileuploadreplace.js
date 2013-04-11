/**
 * jquery.fileuploadreplace.js 0.1
 * https://github.com/markwilson/jquery.fileuploadreplace.js
 *
 * Copyright (c) 2013 Mark Wilson (http://89allport.co.uk)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/03/21
 **/
(function ($) {
    $.fn.fileUploadReplace = function (options) {
        var settings = $.extend({
            dataName: 'replace',
            onchange: function () { }
        }, options);

        $(this).each(function (i, e) {
            var element = $(e),
                replacement = $('#' + element.data(settings.dataName));

            if (replacement.length === 0) {
                throw Error('No replacement file input found');
            }

            var wrapper = $('<div/>').css({
                height: 0,
                width: 0,
                overflow: 'hidden'
            });
            element.wrap(wrapper);

            element.change(settings.onchange);

            replacement.click(function (e) {
                e.preventDefault();
                element.click();
            });

            replacement.show();
        });
    }
})(jQuery);
