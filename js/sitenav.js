/**
 * Created by Administrator on 2018/2/28.
 */

$(".mon_footer").load("footer.html");


suiyue_ajax.sitenav(function(info){
    console.log(info);
    $(".nav").html(template("temp_sitenav",{ list : info.result }));
})