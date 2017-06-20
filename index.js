
//通过json数组获取左边ul li
$.ajax({
    type:"get",
    dataType:"json",
    url:"index.json",
    success:function(data){
        $(data).each(function(i,o){
            $(".main_topl li").eq(i).html("<a>"+ o.a1+"</a><a> "+ o.a2+"</a><a> "+ o.a3+"</a>" +
                "<a> "+ o.a4+"</a><span class='span'>"+ o.ss+"</span>")
                .append("<div class='div"+i+"'></div>");
            $(o.content).each(function(j,m) {
                $(".main_topl li div").eq(i).append("<h1>" + m.title + "</h1>"
                    +"<img src='" + m.src1 + "'/>" + "<img src='" + m.src2 + "'/>" +
                    "<img src='" + m.src3 + "'/>");
            })
        });
    }
});
$(function(){
    //图片定位移动；
    $(".odiv").each(function(i,o){
        $(o).hover(function(){
            $(".odiv img").eq(i).animate({"top":"-5px"},300);
        },function(){
            $(".odiv img").eq(i).animate({"top":"0px"},300);
        });
    });
    $(".ddiv .iimg").each(function(i,o){
        $(o).hover(function(){
            $(".ddiv img").eq(i).animate({"left":"-5px"},300);
        },function(){
            $(".ddiv img").eq(i).animate({"left":"0px"},300);
        });
    });
    $(".lou .aa").each(function(i,o){
        $(o).hover(function(){
            $(".lou img").eq(i).animate({"left":"-5px"},300);
        },function(){
            $(".lou img").eq(i).animate({"left":"0px"},300);
        });
    });
    $(".lou1 .aa").each(function(i,o){
        $(o).hover(function(){
            $(".lou1 img").eq(i).animate({"left":"-5px"},300);
        },function(){
            $(".lou1 img").eq(i).animate({"left":"0px"},300);
        });
    });
});
var i=0;
var timer;
$(function(){
    $(".main_topl .cr li").each(function(i,o){
        $(this).hover(function(){
            $(".div"+i).css("display","block");
        },function(){
            $(".div"+i).css("display","none");
        });
    });

    bottomLi();
    //轮播方法
    $(".lb_igs").eq(i).fadeIn(500).siblings(".lb_igs").fadeOut(500);
    showTime();

    //span显示隐藏
    $(".main_topc").hover(function(){
        $(".spanx").show();
    },function(){
        $(".spanx").hide();
    });
});
//点击事件
$(".lb_li").click(function(){
    clearInterval(timer);
    i=$(this).index();
    showLB();
    showTime();
});
$("span.xq").click(function(){
    clearInterval(timer);
    if(i==0){i=6;}
    i--;
    showLB();
    showTime();
});
$("span.xh").click(function(){
    clearInterval(timer);
    if(i==5){i=-1;}
    i++;
    showLB();
    showTime();
});
//轮播方法
function showLB(){
    $(".lb_igs").eq(i).fadeIn(500).siblings(".lb_igs").fadeOut(500);
    $(".lb_li").eq(i).addClass("bg").siblings().removeClass("bg")
}
//定时器
function showTime(){
    timer=setInterval(function(){
        i++;
        if(i==$(".lb_li").length){
            i=0;
        }
        showLB();
    },3000);
}

//ul li轮播
//span显示隐藏
$(".content").hover(function(){
    $(".content span").show();
},function(){
    $(".content span").hide();
});
//点击向后

$(".content span.hh").click(function(){
    var oLeft=parseInt($('.content_all').css('left'));
        if(oLeft==0){
            var wh=-($(".content_all li").width());
            $(".content_all").animate({"left":wh},1500,function(){
                $(this).append($(".content_all li").first()).css("left","0");
            });
        }
});
$(".content span.qq").click(function(){
    var oLeft=parseInt($('.content_all').css('left'));
    if(oLeft==0){
        $(".content_all").prepend($(".content_all li").last());
        var wh=-($(".content_all li").width());
        $(".content_all").css("left",wh);
        $(".content_all").animate({"left":0},1500);
    }
});
var $top;
var mark;
var json={"0":"服饰","1":"美妆","2":"通讯","3":"电器","4":"数码","5":"健身",
    "6":"居家","7":"母婴","8":"保健","9":"图书","10":"特价"};
$(function(){
    mark=1;
    $(".fixed_li").click(function () {
            var fHeight=$(".fixed_top").outerHeight();
            mark = 2;
            var k=$(this).index();
            for(var h=1;h<$(".fixed_li").size()+1;h++){
                $(".fixed_li").eq(h-1).html(h+"F");
            }
            $(this).html(json[k]);
            $top =$(".main_lou").eq(k).offset().top+2-fHeight;
            $(this).addClass("hover").siblings().removeClass("hover");
            $("html,body").animate({"scrollTop": $top}, 500, function(){
                mark = 1;
            });
        });

});
$(window).scroll(function(){
    var fHeight=$(".fixed_top").outerHeight();
    var stop = $(this).scrollTop();
    var $li = $(".fixed_li");
    if(stop>=768){
        $(".fixed_top").slideDown(400);
    }else{
        $(".fixed_top").slideUp();
    }
    if(stop<=1115 || stop>=9755){
        $(".ofixed").fadeOut(500);
    }else{
        $(".ofixed").fadeIn(500);
    }
    if(mark==1){
        $(".main_lou").each(function (i,o){
            $top = $(o).offset().top-fHeight;
            if(stop>=$top){
                $li.eq(i).addClass("hover").siblings().removeClass("hover");
                $li.eq(0).html(0+"F");
                for(var h=1;h<$li.size()+1;h++){
                    $li.eq(h-1).html(h+"F");
                }
                $(".hover").html(json[i]);
            }
        });
    }
});

$(".fixed1 li").each(function(i,o){
    $(o).hover(function(){
        $(".fixed1 span").eq(i).animate({"right":"28px"},400);
    },function(){
        $(".fixed1 span").animate({"right":"-80px"},400);
    })
});
$(".fixed1 li").eq(6).click(function(){
    $("html body").animate({"scrollTop":"0"},100);
});

$(".left dd").click(function(){
    var con=$(this).text();
    $(this).css({"background":"#F10215"}).siblings(".left dd").css({"background":"#fff"});
    $(".left .sr").text(con);
});

//最后向上滚播
function bottomLi(){
    var liH=-($(".lou2 li").outerHeight());
    setInterval(function(){
        $(".lou2 ul").animate({"top":liH},500,function(){
            $(".lou2 li").first().appendTo($(".lou2 ul"));
            $(".lou2 ul").css("top","0");
        });
    },3000);
}
