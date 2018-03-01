/**
 * Created by Administrator on 2018/2/24.
 */

(function(window){
    var suiyue_ajax = {
        initialUrl : "http://127.0.0.1:9090",
    }


    suiyue_ajax.extend = function(obj){
        for(var k in obj ){
            if(obj.hasOwnProperty(k)){
                this[k] = obj[k];
            }
        }
    }

    //index页面的ajax请求
    suiyue_ajax.extend({
        indexMenu : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getindexmenu";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        },
        indexmoneyctrl : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getmoneyctrl";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    });

    //category页面的ajax请求

    suiyue_ajax.extend({
        categorytitle : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getcategorytitle";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        },
        category : function(titleid,back){
            var url = suiyue_ajax.initialUrl + "/api/getcategory";
            $.ajax({
                url : url,
                data : {titleid : titleid},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        },
        categorybyid : function(categoryid,back){
            var url = suiyue_ajax.initialUrl + "/api/getcategorybyid";
            $.ajax({
                url : url,
                data : {categoryid : categoryid},
                type  : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //商品列表ajax请求

    suiyue_ajax.extend({
        productlist : function(categoryid,pageid,back){
            var pageid = pageid || 0;
            var categoryid = categoryid || 1;
            var url = suiyue_ajax.initialUrl + "/api/getproductlist";
            $.ajax({
                url : url,
                data : {
                    pageid : pageid,
                    categoryid : categoryid
                },
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })

        }
    })


    //商品信息页面ajax请求
    suiyue_ajax.extend({
        product : function(productid,back){
            var url = suiyue_ajax.initialUrl + "/api/getproduct";
            $.ajax({
                url : url,
                type : "get",
                data : {productid : productid},
                success : function(info){
                    back && back(info);
                }
            })
        },
        productcom : function(productid,back){
            var url = suiyue_ajax.initialUrl + "/api/getproductcom";
            $.ajax({
                url : url,
                type : "get",
                data : {productid : productid},
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //moneyctrl页面ajax请求
    suiyue_ajax.extend({
        moneyctrl : function(pageid,back){
            var url = suiyue_ajax.initialUrl + "/api/getmoneyctrl";
            var pageid = pageid || 0;
            $.ajax({
                url : url,
                data : {pageid : pageid},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //moneyproduct页面的ajax请求
    suiyue_ajax.extend({
        moneyctrlproduct : function(productid,back){
            var url = suiyue_ajax.initialUrl + "/api/getmoneyctrlproduct";
            var productid = productid || 1;
            $.ajax({
                url : url,
                data : {productid : productid},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })

    //国内折扣
    suiyue_ajax.extend({
        inlanddiscount : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getinlanddiscount";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })

    //白菜价

    suiyue_ajax.extend({
        baicaijiatitle : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getbaicaijiatitle"
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        },

        baicaijiaproduct : function(titleid,back){
            var url = suiyue_ajax.initialUrl + "/api/getbaicaijiaproduct";
            var titleid = titleid || 0;
            $.ajax({
                url : url,
                data : { titleid : titleid},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //优惠券

    suiyue_ajax.extend({
        coupon : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getcoupon";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //优惠券详情页

    suiyue_ajax.extend({
        couponproduct : function(couponId,back){
            var url = suiyue_ajax.initialUrl + "/api/getcouponproduct";
            var couponId = couponId;
            $.ajax({
                url : url,
                data : { couponid : couponId},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //凑单页面

    suiyue_ajax.extend({
        gsshop : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getgsshop";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        },

        gsshoparea : function(back) {
            var url = suiyue_ajax.initialUrl + "/api/getgsshoparea";
            $.ajax({
                url: url,
                type: "get",
                success: function (info) {
                    back && back(info);
                }
            })
        },
        gsproduct : function(shopid,areaid,back){
            var url = suiyue_ajax.initialUrl + "/api/getgsproduct";
            var shopid = shopid || 0;
            var areaid = areaid || 0;
            $.ajax({
                url : url,
                data : {
                    shopid : shopid,
                    areaid : areaid
                },
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //sitenav
    suiyue_ajax.extend({
        sitenav : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getsitenav";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })


    //brandtitle
    suiyue_ajax.extend({
        brandtitle : function(back){
            var url = suiyue_ajax.initialUrl + "/api/getbrandtitle";
            $.ajax({
                url : url,
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }
    })

    //brand
    suiyue_ajax.extend({
        brand : function(brandtitleid,back){
            var url = suiyue_ajax.initialUrl + "/api/getbrand";
            var brandtitleid = brandtitleid || 0;
            $.ajax({
                url : url,
                type : "get",
                data : { brandtitleid : brandtitleid},
                success : function(info){
                    back && back(info);
                }
            })
        }
    })

    //brand页面

    suiyue_ajax.extend({
        brand : function(brandtitleid,back){
            var url = suiyue_ajax.initialUrl + "/api/getbrand";
            var brandtitleid = brandtitleid || 0;
            $.ajax({
                url : url,
                data : { brandtitleid : brandtitleid},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        },
        brandproductlist : function(brandtitleid,pagesize,back){
            var brandtitleid = brandtitleid || 0;
            var pagesize = pagesize || 0;
            var url = suiyue_ajax.initialUrl + "/api/getbrandproductlist";
            $.ajax({
                url : url,
                data : {
                    brandtitleid : brandtitleid,
                    pagesize : pagesize
                },
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })

        },
        productcom : function(productid,back){
            if(!productid) {
                return " ";
            }
            var productid = productid || 0;
            var url = suiyue_ajax.initialUrl + "/api/getproductcom";
            $.ajax({
                url : url,
                data : {productid : productid},
                type : "get",
                success : function(info){
                    back && back(info);
                }
            })
        }

    })


    window.suiyue_ajax = suiyue_ajax;
})(window);