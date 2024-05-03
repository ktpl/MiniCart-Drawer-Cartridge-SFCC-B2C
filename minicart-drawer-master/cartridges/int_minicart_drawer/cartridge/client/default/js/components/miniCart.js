'use strict';

var baseMinicart = require('base/components/miniCart');
var updateMiniCart = true;

module.exports = function () {
    // call default minicart functionality from /base/minicart.js
    baseMinicart();

    // prevent hover effect of minicart modal from base
    $('.minicart').off('mouseenter focusin touchstart');
    $('.minicart').off('mouseleave focusout');

    // add click event to open minicart drawer and get the data from MinicartShow pipeline.
    $('body').on('click', '.minicart', function () {
        var url = $('.minicart').data('action-url');
        if ($('.minicart .popover.show').length === 0) {
            if (!updateMiniCart) {
                $('.minicart .popover').addClass('show');
                $('body').addClass('cart-show'); 
                return;
            }
            $('.minicart .popover').spinner().start();
            $.get(url, function (data) {
                $('.minicart .popover').empty();
                $('.minicart .popover').append(data);
                $('.minicart .popover').addClass('show');
                $('body').addClass('cart-show'); 
                $.spinner().stop();
            });
        }
    });
   
    // add click event on minicart-drawer close button
    $('body').on('click','.cart .minicart-close', function () {
        $('.minicart .popover').removeClass('show');
        $('body').removeClass('cart-show'); 
    });
    $('body').on('click','.minicart button.minicart-close' ,function (event) {
        if ((event.type === 'click' && $('.minicart').has(event.target).length > 0)
            || (event.type === 'mouseleave' && $(event.target).is('.minicart .quantity'))
            || $('body').hasClass('modal-open')) {
            event.stopPropagation();
            return;
        }
        $('.minicart .popover').removeClass('show');
    });
    // open minicart-drawer on the product add-to-cart event  
    $(document).ajaxSuccess(function(event, xhr, settings) {
        var url = settings.url;
        var parts = url.split("/");
        var lastpart = parts[parts.length-1];
        if(lastpart === "ReportingEvent-MiniCart"){
            $('.minicart').trigger('click');      
        }
        if ($('.popover.popover-bottom').is(':empty')) { 
            $('body').removeClass('cart-show'); 
        } 
    });
}


