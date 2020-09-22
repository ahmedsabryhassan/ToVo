$(function(){
        $(document).scroll(function(){
            var $nav = $("#mainNavbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });
    //icon 1
    $(".list-1").mouseenter(function()
    {
        $(".icon-1").css("background-color","#18e7d3");
    });
    $(".list-1").mouseleave(function()
    {
        $(".icon-1").css("background-color","#fff");
    });
    //icon 2
    $(".list-2").mouseenter(function()
    {
        $(".icon-2").css("background-color","#18e7d3");
    });
    $(".list-2").mouseleave(function()
    {
        $(".icon-2").css("background-color","#fff");
    });
    //icon 3
    $(".list-3").mouseenter(function()
    {
        $(".icon-3").css("background-color","#18e7d3");
    });
    $(".list-3").mouseleave(function()
    {
        $(".icon-3").css("background-color","#fff");
    });
    //icon 4
    $(".list-4").mouseenter(function()
    {
        $(".icon-4").css("background-color","#18e7d3");
    });
    $(".list-4").mouseleave(function()
    {
        $(".icon-4").css("background-color","#fff");
    });
})