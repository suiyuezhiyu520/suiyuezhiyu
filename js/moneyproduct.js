/**
 * Created by Administrator on 2018/2/27.
 */

$(".mon_footer").load("footer.html");

suiyue_ajax.moneyctrlproduct($.cookie("moneyproductid"),function(info){
    console.log(info.result[0]);
    $(".p_content .title").html(info.result[0].productName);
    $(".p_content .from").html(info.result[0].productFrom);
    $(".p_content .time").html(info.result[0].productTime);
    $(".p_content .author").html(info.result[0].productTips);
    $(".p_content .p_pic").html(info.result[0].productImg2);
    $(".p_content .p_lgpic").html(info.result[0].productImgLg);
    $(".cu-content-pl").html(info.result[0].productComment);
    $(".city").html(info.result[0].productCity);
})