function timer(opj){
    $(opj).find('ul').animate({
        marginTop : "-3.5rem"  
        },500,function(){  
        $(this).css({marginTop : "0rem"}).find("li:first").appendTo(this);  
    })  
}
$(function(){
    var num = $('.notice_active').find('li').length;
    var time=setInterval('timer(".notice_active")',3500);
    $('.gg_more a').mousemove(function(){
        clearInterval(time);
    }).mouseout(function(){
        time = setInterval('timer(".notice_active")',3500);
    }); 
    $(".news_ck").click(function(){
        location.href = $(".notice_active .notice_active_ch").children(":input").val();
    })
});