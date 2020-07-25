// 轮播图
 //获取最外面的div
 var box = my$("box");
 //获取相框
 var screen = box.children[0];
 //获取相框的宽度
 var imgWidth = screen.offsetWidth;
 //获取ul
 var ulObj = screen.children[0];
 //获取ul中的所有的li
 var list = ulObj.children;

 var pic = 0; //全局变量
 //创建小按钮----根据ul中的li个数

 //克隆一个ul中第一个li,加入到ul中的最后=====克隆
 ulObj.appendChild(ulObj.children[0].cloneNode(true));

 //自动播放
 var timeId = setInterval(clickHandle, 1000);
 function clickHandle() {
     //如果pic的值是5,恰巧是ul中li的个数-1的值,此时页面显示第六个图片,而用户会认为这是第一个图,
     //所以,如果用户再次点击按钮,用户应该看到第二个图片
     clearInterval();
     if (pic == list.length - 1) {
         //如何从第6个图,跳转到第一个图
         pic = 0; //先设置pic=0
         ulObj.style.left = 0 + "px"; //把ul的位置还原成开始的默认位置
         
     }
     pic++; //立刻设置pic加1,那么此时用户就会看到第二个图片了
     animate(ulObj, -pic * imgWidth); //pic从0的值加1之后,pic的值是1,然后ul移动出去一个图片
     //如果pic==5说明,此时显示第6个图(内容是第一张图片),第一个小按钮有颜色,
 };


 //设置任意的一个元素,移动到指定的目标位置
 function animate(element, target) {
     clearInterval(element.timeId);
     //定时器的id值存储到对象的一个属性中
     element.timeId = setInterval(function () {
         //获取元素的当前的位置,数字类型
         var current = element.offsetLeft;
         //每次移动的距离
         var step = 10;
         step = current < target ? step : -step;
         //当前移动到位置
         current += step;
         if (Math.abs(current - target) > Math.abs(step)) {
             element.style.left = current + "px";
         } else {
             //清理定时器
             clearInterval(element.timeId);
             //直接到达目标
             element.style.left = target + "px";
         }
     }, 10);
 }

var num = 1;
var goods = document.querySelector(".goodsList");
$.ajax({
    url: 'http://vebcoder.cn:9527/api/goodList',
    method: 'get',
    dataType: 'json',
    data: {
        page: num
    },
    success: function (data) {
        var template = "";
        for (var i = 0; i < data.length; i++) {
            var {
                title,
                price,
                img_list_url,
                mack,
                Id
            } = data[i]
            template += `<div class="goodsItems" data-id = ${Id}>
            <img src="${img_list_url}" alt="">
            <h4>${title}</h4>
            <span class="goodsPrice">￥${price}</span>
            <p class="mack">${mack}</p>
        </div>`
        };
        goods.innerHTML = template;
    }
})
var parentWindow = window.parent;


function test() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条滚动高度
    if (scrollTop >= 1250 + 1440 * (num - 1)) {
        
        num++;
        $.ajax({
            url: 'http://vebcoder.cn:9527/api/goodList',
            method: 'get',
            dataType: 'json',
            data: {
                page: num
            },
            success: function (data) {
                console.log(data);
                var temp = "";
                for (var i = 0; i < data.length; i++) {
                    var {
                        title,
                        price,
                        img_list_url,
                        mack,
                        Id
                    } = data[i];
                    temp += `<div class="goodsItems" data-id="${Id}">
                        <img src="${img_list_url}" alt="">
                        <h4>${title}</h4>
                        <span class="goodsPrice">￥${price}</span>
                        <p class="mack">${mack}</p>
                    </div>`;
                };
                goods.innerHTML += temp;
            }
        })
        
    }
}
window.onscroll = function () {
    test();
}
window.onload = function () {
    setInterval(() => {
        var goodsItems = $(".goodsItems");
        goodsItems = [...goodsItems];
        for (var i = 0; i < goodsItems.length; i++) {
            (function (i) {
                goodsItems[i].onclick = function () {
                    // location.href = "../pages/shopDetails.html";
                    $.ajax({
                        url: `http://vebcoder.cn:9527/api/detail?goodId=${Number($(this).attr('data-id'))}`,
                        method: 'get',
                        dataType: 'json',
                        success: function (data) {  
                            var shopList = JSON.stringify(data);
                            sessionStorage.setItem("goodShop", shopList);
                            location.href = "../pages/shopDetails.html";
                        }
                    })
                }
            })(i)
    
        }
    
    
    }, 0)
    
    $(".goodsClassify").on("click",function(){
        console.log($(this)[0].innerHTML);
        sessionStorage.setItem("type_one",$(this)[0].innerHTML);
        location.href = "../pages/goodsclassify.html";
        $(".Car").show().delay(500).fadeOut(300);
    })

    
}

var btn = document.querySelector(".backTop");
        // 单击 返回顶部
        btn.onclick = function () {
            //1、 获取当前滚动条的位置
            $(".Car").show().delay(500).fadeOut(300);
            var top = document.documentElement.scrollTop;
            // 实现js动画效果
            var timer = setInterval(() => {
                top -= 10;
                window.scrollTo({
                    top: top * 2  //滚动条每次滚动的值 是一个动态的值---->>>动画效果
                })

                // 出口
                if (top <= 0) {
                    clearInterval(timer);
                }

            }, 16.2);
        }