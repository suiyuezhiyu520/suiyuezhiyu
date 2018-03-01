

;(function(){


    var tool = {
        getUrlKV : function(str){
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

    };

})()

