$(function(){
    var widHeight = $(window).height();
    var mainHeight = $('.mainContent').height();
    console.log(widHeight,mainHeight);
    if(mainHeight>widHeight){
        $('.mainContent').height(widHeight);
        var article_show = true;
        $('.moreBtn').on('click',bindRead_more);
    }else{
        article_show = true;
        $('.maskBox').hide().addClass('readall_box_nobg');
    }

    function bindRead_more(){
        if(!article_show){
            $('.mainContent').height(widHeight);
            $('.maskBox').show().removeClass('readall_box_nobg');
            article_show = true;
        }else{
            $('.mainContent').height("");
            $('.maskBox').hide().addClass('readall_box_nobg');
            article_show = false;
        }
    }
})
