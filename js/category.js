//大菜单
suiyue_ajax.categorytitle(function(info){
    $(".category_title").html(template("temp_categorytitle",{list : info.result}));
})
//小菜单
$(".category_title").on("click","a",function(){
    var that = this;
    suiyue_ajax.category($(that).parents("li[data_titleid]").attr("data_titleid"),function(info){
        $(that).siblings("ol").html(template("temp_category",{list : info.result})).stop().slideToggle().parent().siblings().children("ol").slideUp();
    });
})
//小菜单地址链接拼接

$(".category_title").on("click","ol a",function(){
    suiyue_ajax.categorybyid($(this).parent().attr("categoryid"),function(info){
        $.cookie("categoryid",info.result[0].categoryId);
        $.cookie("category",info.result[0].category);
        $.cookie("titleId",info.result[0].titleId);
        window.location.href='productlist.html';
    })
})
