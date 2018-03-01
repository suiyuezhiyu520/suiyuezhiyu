/**
 * Created by Administrator on 2018/2/28.
 */

$(".mon_header").load("header.html");
$(".mon_bijia").load("mon_bijia.html");
$(".mon_footer").load("footer.html");


suiyue_ajax.brandtitle(function(info){
    console.log(info);
    $(".brandtitle ul").html(template("temp_brandtitle",{ list : info.result }));
})