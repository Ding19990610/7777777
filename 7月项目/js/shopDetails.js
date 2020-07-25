var parentWindow = window.parent;
$(function () {
    var Shops = sessionStorage.getItem('goodShop');
    Shops = JSON.parse(Shops);
    var temp = `<div class="btn">
                    返回
                </div>
                <div class="left">
                    <div class = "bigImg">
                        <img src="${Shops[0].img_list_url}" alt="" class = "BIGimgs">
                        <div class="mark"></div>
                    </div>
                    <div class="smImg"></div> 
                </div>
                <div class = "glassView">
                    <img src="${Shops[0].img_list_url}" alt="" class = "GLASSimgs">
                </div>
                <div class="right">
                    <h3>${Shops[0].title}</h3>
                <p class = "nice">库存：${Shops[0].nice}</p>
                <p class="price">价格：￥${Shops[0].price}</p>
                <p>3.7</p>
                <div class="addCar">添加到购物车</div>
                </div>
                <div>
                <h3>类似商品</h3>
                <hr/>
                    <div class = "sameGoods">
                    
                    </div>   
                </div>
                    `;
                    $(".glass").append(temp);
                    var imgs = Shops[0].imgs;
                    imgs = JSON.parse(imgs);
                    var SMImg = "";
                    for (var key in imgs) {
                        SMImg += `<img src="${imgs[key]}" class = "smallImgs">`
                    }
                    $(".smImg").append(SMImg);
    var ShopType = Shops[0].type_one;
    console.log(ShopType);
    $.ajax({
        url: `http://vebcoder.cn:9527/api/goodList`,
        method: 'get',
        dataType: 'json',
        data:{
            type_one:ShopType
        },
        success: function (data) {
            console.log(data);
            var tempss = "";
            for(var i=0;i<10;i++){
                tempss += ` <div class="goodsItems" data-id="${data[i].Id}">
                <img src="${data[i].img_list_url}" alt="">
                <h4>${data[i].title}</h4>
                <span class="goodsPrice">￥${data[i].price}</span>
                <p class="mack">${data[i].mack}</p>
                </div> `;
             }
             $(".sameGoods").append(tempss);
            // console.log(temps);
            // var shopList = JSON.stringify(data);
            // sessionStorage.setItem("goodShop", shopList);
            // location.href = "../pages/shopDetails.html";
        }
    })
                    
});


$(window).ready(function () {
    // 返回上一次操作的页面
    $(".btn").on("click",function(){
        history.go(-1);
    });
    $(".glassView").css({
        display: "none"
    });
    $(".mark").css({
        display: "none"
    })
    $(".smallImgs").on("click",function(){
       $(this).css({
           border:"1px solid red"
       })
       $(this).siblings().css({
        border:"none"
        })
        $(".BIGimgs")[0].src = $(this)[0].src;
        $(".GLASSimgs")[0].src = $(this)[0].src;
    })
    $(".bigImg").on("mouseover", function () {
        $(".mark").css({
            display: "block"
        });
        $(".glassView").css({
            display: "block"
        });
        $(".bigImg").on("mousemove", function (e) {
            // 获取 鼠标 位置
            var pageX = e.pageX;
            var pageY = e.pageY;
            // 获取 大图  在整个文档中的偏移位置
            var offsetX = $(this).offset().left;
            var offsetY = $(this).offset().top;
            // 计算   鼠标    在   大图   中的相对位置
            var relativeX = pageX - offsetX;
            var relativeY = pageY - offsetY;
            // 把鼠标 放在  mark层的正中间
            var moveX = relativeX - $(".mark").width() / 2;
            var moveY = relativeY - $(".mark").height() / 2;

            moveX < 0 ? moveX = 0 : moveX;
            moveY < 0 ? moveY = 0 : moveY;
            var maxX = $(this).width() - $(".mark").width();
            moveX > maxX ? moveX = maxX : moveX;
            var maxY = $(this).height() - $(".mark").height();
            moveY > maxY ? moveY = maxY : moveY;

            $(".mark").css({
                left: moveX + "px",
                top: moveY + "px"
            });
            $(".glassView img").css({
                left: -(1.5 * moveX) + 'px',
                top: -(1.5 * moveY) + 'px'
            });
        })
    });
    $(".bigImg").on("mouseleave", function () {
        $(".mark").css({
            display: "none"
        });
        $(".glassView").css({
            display: "none"
        });
    })
})