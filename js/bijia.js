/**
 * Created by Administrator on 2018/2/26.
 */


$(".mon_header").load("header.html");
$(".mon_bijia").load("mon_bijia.html");
$(".mon_footer").load("footer.html");

$(".category").html($.cookie("category"));

suiyue_ajax.product($.cookie("productid"),function(info){
    $(".p_name").html(info.result[0].productName)
    $(".product").html(info.result[0].productName.split(" ")[0]);
    $(".p_pic").html(info.result[0].productImg);
    $(".p_buy").html(info.result[0].bjShop);
})

suiyue_ajax.productcom($.cookie("productid"),function(info){
    console.log(info);
    $(".p_comlist ul").html(template("temp_comment",{ list : info.result }));
})