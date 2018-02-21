;$(function(){
    "use strict";
    $("#footer").on("click",function()
    {
        $("#all_content").css({filter:"blur(12px)"});
        $("#maskp").css({visibility:"visible"});
    });
    $("#maskp").on("click",function()
    {
        $("#all_content").css({filter:""});
        $("#maskp").css({visibility:"hidden"});
    });

});
