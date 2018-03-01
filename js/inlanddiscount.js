/**
 * Created by Administrator on 2018/2/27.
 */
$(".mon_footer").load("footer.html");

suiyue_ajax.inlanddiscount(function(info){
    console.log(info);
    console.log(template("temp_inlanddiscount"),{ list: info.result});
    $(".incountry ul ").html(template("temp_inlanddiscount",{list : info.result }))
})