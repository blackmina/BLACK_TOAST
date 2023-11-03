$(function(){
    $('.box img').click(function(){
        $('.popup').fadeIn();//show();
    });
    $('.popup p a').click(function(){
        $('.popup').fadeOut();//hide();
    });
});