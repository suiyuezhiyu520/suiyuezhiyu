/**
 * Created by Administrator on 2018/2/27.
 */


$(".mon_footer").load("footer.html");

console.log(location.search);

var str = location.search.split("?")[1];
str = str.split('&')[1].split("=")[1];
//console.log(str.split('&')[1].split("=")[1]);
console.log(str);

$(".couponname").html(decodeURI(str));


function getUrlKV (str){
    console.log(str.split("?"));
    var value = str.split("?")[1];
    console.log(value);
    var arr = value.split("&");
    console.log(arr);
    var data = {};
    arr.forEach(function(ele){
        console.log(ele);
        data[ele.split("=")[0]] = decodeURI(ele.split("=")[1]);

    })
    return data;
}

var data = getUrlKV(location.search);

suiyue_ajax.couponproduct(data.couponId,function(info){
    console.log(info);
    $(".coupon_list ul").html(template("temp_couponproduct",{ list : info.result }));
})