$(document).ready(function(){
    $('#mission').hover(function(){
        $('#about-mission').removeClass('hide');
        $('#header-mission').addClass('hide');
    },function(){
        $('#about-mission').addClass('hide');
        $('#header-mission').removeClass('hide')
    });
    $('#vision').hover(function(){
        $('#about-vision').removeClass('hide');
        $('#header-vision').addClass('hide');
    },function(){
        $('#about-vision').addClass('hide');
        $('#header-vision').removeClass('hide')
    })

});