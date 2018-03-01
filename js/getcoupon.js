/**
 * Created by Administrator on 2018/2/27.
 */


$(".mon_footer").load("footer.html");


suiyue_ajax.coupon(function(info){
    console.log(info);
    $(".coupon ul").html(template("temp_coupon",{ list : info.result }));

    //$.cookie("couponname",info.result[0].couponTitle)
    //console.log($.cookie("couponname"));

})

$(".coupon_list ul").on("click","li",function(){

})