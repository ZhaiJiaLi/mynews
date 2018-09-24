$(function(){
    var length=$(".newsList ul li").length;
    var liHeight=$(".newsList ul li").outerHeight();
    console.log(length,liHeight);
    if(length>4){
        $(".newsList ul").height(liHeight*4);
        var article_show = true;
        $('.moreBtn').on('click',bindRead_more);
    }else{
        article_show = true;
        $('.maskBox').hide().addClass('readall_box_nobg');
    }

    function bindRead_more(){
        if(!article_show){
            $(".newsList ul").height(liHeight*4);
            $('.maskBox').show().removeClass('readall_box_nobg');
            article_show = true;
        }else{
            $(".newsList ul").height("");
            $('.maskBox').hide().addClass('readall_box_nobg');
            article_show = false;
        }
    }
})
