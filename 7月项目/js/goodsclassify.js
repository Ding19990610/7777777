var parentWindow = window.parent;
$(window).ready(function () {
    var typeOne = sessionStorage.getItem("type_one");
    $.ajax({
        url: `http://vebcoder.cn:9527/api/goodList`,
        method: 'get',
        dataType: 'json',
        data: {
            type_one: typeOne
        },
        success: function (data) {
            var arr = [];
            for (var key in data) {
                arr.push(data[key].type_two);;
            }
            var typeONE = [];
            for (var j = 0; j < arr.length; j++) {
                if (typeONE.indexOf(arr[j]) == -1) {
                    typeONE.push(arr[j])
                }
            }
            for (var i = 0; i < typeONE.length; i++) {
                var temp2 = `<span>${typeONE[i]}</span>`
                var temp = `<h2>${typeONE[i]}</h2><div class="goodsList">`;
                for (var key in data) {
                    var {img_list_url,title,mack,price} = data[key];
                    if (typeONE[i] == data[key].type_two) {
                        // console.log(data);
                        temp += `<div class="goodsItems">
                        <img src="${img_list_url}" alt="">
                        <h4>${title}</h4>
                        <span class="goodsPrice">￥${price}</span>
                        <p class="mack">${mack}</p>
                    </div>`;
                    
                    }
                }
                temp += `</div>`;
                
                $(".classify").append(temp);
                $(".leftNav").append(temp2);
            }
            console.log($("h2"));//获取所有的块
            console.log($(".leftNav"));//获取左边导航所有的type_two
            console.log($(".leftNav span"));//获取左边导航所有的span
            var itemsHeight = [];//存放每个块距离顶部的高度
            
            for(var i=0;i<$("h2").length;i++){
                console.log($("h2")[i].offsetTop);
                itemsHeight.push($("h2")[i].offsetTop - 50);
            }
            $(`.leftNav span:eq(0)`).css({
                color:"red"
            })
            console.log(itemsHeight);
            // 滚动事件  修改标签颜色
            window.onscroll = function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条滚动高度
                    for(var i=0;i<itemsHeight.length;i++){
                        if (itemsHeight[i] - scrollTop <= 300) {
                            $(`.leftNav span:eq(${i})`).css({
                                color:"red"
                            })
                            $(`.leftNav span:eq(${i})`).siblings().css({
                                color:"black"
                            })
                        }
                    } 
                // $(".leftNav").on("click",'span',function(){
                //         console.log($(this).index());
                //         $(window).scrollTop() = itemsHeight[index];
                //         // console.log($("h2").index());
                // });
            }
            
        }
    })
    $(".goodsClassify").on("click",function(){
        // console.log($(this)[0].innerHTML);
        sessionStorage.setItem("type_one",$(this)[0].innerHTML);
        location.href = "../pages/goodsclassify.html";
        $(".Car").show().delay(500).fadeOut(300);
    });
})  

         

