/**
 * Created by Administrator on 2018/2/27.
 */
$(".mon_footer").load("footer.html");

suiyue_ajax.gsshop(function(info){
    console.log(info);
    $(".mall ul").html(template("temp_mall",{ list : info.result }));
    $(".mall ul li").eq(0).addClass("on");
})

suiyue_ajax.gsshoparea(function(info){
    console.log(info);
    $(".city ul").html(template("temp_city",{ list : info.result }));
    $(".city ul li").eq(0).addClass("on");
})


$(".filters li").on("click",function(){
    //console.log($(this).attr("data_index"));
    $(this).toggleClass("on");
    $(".filter_select").eq($(this).attr("data_index")).toggle();
})


$(".mall ul").on("click","li",function(){
    $(this).addClass("on").siblings().removeClass("on").parents(".filter_select").hide();
    $(".filters span").eq(0).html($(this).text()).attr("shopid",$(this).attr("shopid")).removeClass("on");
    gsproduct();
})

$(".city ul").on("click","li",function(){
    $(this).addClass("on").siblings().removeClass("on").parents(".filter_select").hide();
    $(".filters span").eq(1).html($(this).text().split("（")[0]).attr("areaid",$(this).attr("areaid")).removeClass("on");
    gsproduct();
})


//$(".mall,.city ul").on("click","li",function(){
//    console.log(this);
//    var shopid = $(".filters span").eq(0).attr(shopid)
//})
gsproduct();

function gsproduct (){

    function getSAId (){
        var filter = {};
        filter.shopid = $(".filters span").eq(0).attr("shopid")
        filter.areaid = $(".filters span").eq(1).attr("areaid")
        //console.log(shopid);
        //console.log(areaid);
        return filter;
    }
    var data = getSAId();
    suiyue_ajax.gsproduct(data.shopid,data.areaid,function(info){
        console.log(info);
        $(".product_list ul").html(template("temp_gsproduct",{ list : info.result }));
    })
}
