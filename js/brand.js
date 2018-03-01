/**
 * Created by Administrator on 2018/2/28.
 */
$(".mon_header").load("header.html");
$(".mon_bijia").load("mon_bijia.html");
$(".mon_footer").load("footer.html");

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


suiyue_ajax.brand(data.brandTitleId,function(info){
    //console.log(info);
    $(".brand_title ul").html(template("temp_brandtitle",{ list : info.result }));
})

suiyue_ajax.brandproductlist(data.brandTitleId,4,function(info){
    data.brandproductlist = info.result[0] || " ";
    console.log(info);
    console.log(data.brandproductlist.productId);
    $(".product_list ul").html(template("temp_productlist",{ list : info.result }));


    suiyue_ajax.productcom(data.brandproductlist.productId,function(info){
        console.log(info);
        //console.log(template("temp_productcom", {list: info.result, titimg: data.brandproductlist}));
        $(".product_com ul").html(template("temp_productcom",{ list : info.result,titimg : data.brandproductlist }));

    })

})

