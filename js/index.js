suiyue_ajax.indexMenu(function(info){
    $(".mmp_nav ul").html(template("temp_nav",{list : info.result}));
    $(".mmp_nav ul li:nth-child(n+9)").hide();
    $(".mmp_nav ul li").eq(7).on("click",function(){
        $(".mmp_nav ul li:nth-child(n+9)").slideToggle();
    })
});

suiyue_ajax.indexmoneyctrl(function(info){
    //console.log(info);
    //console.log(template("temp_moneyctrl", {list: info.result}));
    $(".product_list ul").html(template("temp_moneyctrl",{list : info.result}))
});