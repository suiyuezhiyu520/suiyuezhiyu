/**
 * Created by Administrator on 2018/2/27.
 */


$(".mon_footer").load("footer.html");



suiyue_ajax.baicaijiatitle(function(info){
    console.log(info);
    $(".warp ul").html(template("temp_baicaijiatitle",{ list : info.result }));
    setulwidth();
})

//设置ul宽
function setulwidth(){
    var total = 0;
    //console.log($(".warp ul").children());
    $(".warp ul").children().each(function(index,ele){
        total += ele.offsetWidth + 1;
    })
    $(".warp ul").css("width",total);
}
suiyue_ajax.baicaijiaproduct($(this).attr("titleid"),function(info){
    console.log(info);
    $(".baicaijiaproduct ul").html(template("temp_baicaijiaproduct",{ list : info.result }));
})
$(".warp ul").on("click","li",function(){
    console.log($(this).attr("titleid"));
    $(this).addClass("active").siblings().removeClass("active");
    suiyue_ajax.baicaijiaproduct($(this).attr("titleid"),function(info){
        console.log(info);
        //console.log(template("temp_baicaijiaproduct", {list: info.result}));
        $(".baicaijiaproduct ul").html(template("temp_baicaijiaproduct",{ list : info.result }));

    })
})