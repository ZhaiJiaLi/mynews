$(function () {
    $(".navList").click(function () {
        let index=$(this).index()
        $(".navList").removeClass("selected").eq(index).addClass("selected")
    })
    console.log($(".item"));
    $(".item").click(function () {
        let index=$(this).index()
        console.log(index);
        $(".item").removeClass("selected").eq(index).addClass("selected")
    })











})