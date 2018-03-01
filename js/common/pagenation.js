/**
 * Created by Administrator on 2018/2/26.
 */

;(function(window,undefine){
    var pagenation = {
        pages : function(obj){
            var total = obj.total || 1;
            var onepage = obj.onepage || 10;
            var pages = Math.ceil(total / onepage);
            return pages;
        },
        setpage : function(obj){
            pagenation.count = pagenation.pages(obj);
            var str = "";
            for(var i = 1 ; i <= pagenation.count ; i++){
                str += '<option value="'+ i +'">'+ i +'/' + pagenation.count + '</option>'
            }
            $("#pages").html(str);
            pagenation.success(obj);
        },
        //count : $("#pages option").length,
        index : 0,

        success : function(obj){


                $("#pages").change(function(e){

                    //obj.change && obj.change();
                    //suiyue_ajax.productlist($.cookie("categoryid"),$("option:selected").val(),function(info){
                    //    $(".product_list ul").html(template("temp_productlist",{list : info.result}));
                    //})
                    pagenation.index = $("option:selected").val() - 1;
                    //$("#pages option").eq($("option:selected").val()).prop(true);
                    //pagenation.index = $("option:selected").val();
                    //suiyue_ajax.productlist($.cookie("categoryid"),pagenation.index,function(info){
                    //    $(".product_list ul").html(template("temp_productlist",{list : info.result}));
                    //    //$("#pages option").eq(pagenation.index - 1).prop("selected",true);
                    //})
                    obj.success && obj.success();
                })



                $(".pre").click(function(){
                    pagenation.index--;
                    if(pagenation.index <= 1){
                        pagenation.index = 1;
                    }

                    obj.success && obj.success();


                    //suiyue_ajax.productlist($.cookie("categoryid"),pagenation.index,function(info){
                    //    $(".product_list ul").html(template("temp_productlist",{list : info.result}));
                    //    //$("#pages option").eq(pagenation.index - 1).prop("selected",true);
                    //})

                    pagenation.prenext();
                })

                $(".next").click(function(){
                    pagenation.index++;
                    if(pagenation.index >= pagenation.count){
                        pagenation.index = pagenation.count;
                    }

                    obj.success && obj.success();

                    //suiyue_ajax.productlist($.cookie("categoryid"),pagenation.index,function(info){
                    //    $(".product_list ul").html(template("temp_productlist",{list : info.result}));
                    //    //$("#pages option").eq(pagenation.index - 1).prop("selected",true);
                    //
                    //})
                    pagenation.prenext();
                })
        },

        prenext : function(){
            $("#pages option").eq(pagenation.index - 1).prop("selected",true);
        }

    }

    window.pagenation = pagenation;
})(window)