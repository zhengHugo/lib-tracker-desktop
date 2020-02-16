window.$ = window.jQuery = require('jquery');

$(document).ready(function(){
    const trackDate = $('#track-date');
    trackDate.attr('value', new Date().toISOString().substring(0,10));
    trackDate.attr('min', new Date().getFullYear() + '-01-01');
    trackDate.attr('max', new Date(). getFullYear() + '-12-31');
});
