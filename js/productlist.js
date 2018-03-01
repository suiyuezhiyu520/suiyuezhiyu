$(".mon_header").load("header.html");
$(".mon_bijia").load("mon_bijia.html");
$(".mon_footer").load("footer.html");

suiyue_ajax.productlist($.cookie("categoryid"),1,function(info){
    $(".category").text($.cookie("category"));
    $(".product_list ul").html(template("temp_productlist",{list : info.result}));
    pagenation.setpage({
        total: info.totalCount,
        success : function(){
            suiyue_ajax.productlist($.cookie("categoryid"),pagenation.index,function(info){
                $(".product_list ul").html(template("temp_productlist",{list : info.result}));
                //$("#pages option").eq(pagenation.index - 1).prop("selected",true);
            })
        },
        change : function(){
            suiyue_ajax.productlist($.cookie("categoryid"),$("option:selected").val(),function(info){
                $(".product_list ul").html(template("temp_productlist",{list : info.result}));
            })
        }
    })
})

$(".product_list ul").on("click","li",function(){
    $.cookie("productid",$(this).attr("productid"));
    window.location.href = "bijia.html";
})




