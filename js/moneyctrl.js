/**
 * Created by Administrator on 2018/2/27.
 */


$(".mon_footer").load("footer.html");


suiyue_ajax.moneyctrl(0,function(info){
    console.log(info);
    $(".product_list ul").html(template("temp_moneyctrl",{list : info.result}))
    pagenation.setpage({
        total : info.totalCount,
        success : function(){
            suiyue_ajax.moneyctrl(pagenation.index,function(info){
                console.log(info);
                $(".product_list ul").html(template("temp_moneyctrl",{list : info.result}))
            })
        }
        //change : function(){
        //    suiyue_ajax.moneyctrl($("option:selected").val(),function(info){
        //        console.log(info);
        //        $(".product_list ul").html(template("temp_moneyctrl",{list : info.result}))
        //    })
        //}
    })
})


$(".product_list ul").on("click","li",function(e){
    e.preventDefault();
    $.cookie("moneyproductid",$(this).attr("productid"));
    window.location.href = "moneyproduct.html";

})