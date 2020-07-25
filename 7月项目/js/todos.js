// 显示元素封装     show(el)
function show(el){
    el.style.display = "block";
    var val = 0;
    el.style.opacity = val;
    var timer = setInterval(function(){
        val +=0.1;
        if(val >=1){
            el.style.opacity = 1; 
            clearInterval(timer);
            return ;
        }
        el.style.opacity = val;
    },50);
    return el;
}
// 隐藏元素封装         hide(el)
function hide(el){
    var val = 1;
    el.style.opacity = val;
    var timer = setInterval(function(){
        val -=0.1;
        if(val <=0){
            el.style.opacity = 0;
            el.style.display = "none";
            clearInterval(timer);
            return ;
        }
        el.style.opacity = val;
    },50);
    return el;
}

// 修改html内元素的内容          html(el,str)
function html(el,str){
    el.innerHTML = str ;
    return el;
}

// dom选择器的封装               getElement(str)
function getElement(str){
    console.log(str.charAt(0));
    if(str.charAt(0) ==="."){
        return document.getElementsByClassName(str);
    }else if(str.charAt(0) ==="#"){
        return document.getElementById(str);
    }else{
        return document.getElementsByTagName(str);
    }
}
// toggle  控制显影
function toggle(el){
    var none = getComputedStyle(el,null)["display"];
    if(none =="none"){
        el.style.display = "block";
        // el.style.opacity = 0;
    }else{
        el.style.display = "none";
    }
 }

 
/*
 * 该函数是返回的是指定格式的日期,是字符串类型
 * 参数:date ----日期
 * 返回值: 字符串类型的日期
 * */
function getDatetoString(date) {
    var strDate;//存储日期的字符串
    //获取年
    var year=date.getFullYear();
    //获取月
    var month=date.getMonth()+1;
    //获取日
    var day=date.getDate();
    //获取小时
    var hour=date.getHours();
    //获取分钟
    var minute=date.getMinutes();
    //获取秒
    var second=date.getSeconds();
    hour=hour<10?"0"+hour:hour;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    //拼接
    strDate=year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;//隐藏问题,关于变量声明的位置
    return strDate;
}

//根据id获取元素对象
function my$(id) {
    return document.getElementById(id);
}


/*
 *
 * innerText属性IE中支持
 * textContent火狐中支持
 * dvObj.innerText="您好";设置innerText的值
 * console.log(dvObj.innerText);获取innerText的值
 * 因为上述原因,inerText有时候需要设置值，有时候需要获取值
 * 所以,需要写一个兼容的代码能在火狐中使用,也可以在IE中使用
 *
 *
 * */

/*
 *设置innerText属性的值
 * element-----为某个元素设置属性值
 * content-----设置的值
 * */
function setInnerText(element,content) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        element.innerText=content;
    }else{
        element.textContent=content;
    }
}
/*
 * 获取innerText属性的值
 * element 要获取的元素
 * 返回的是该元素的innerText值
 * */
function getInnerText(element) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        return element.innerText;
    }else{
        return element.textContent;
    }
}


//获取当前元素前一个元素
function getPreviousElement(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var ele=element.previousSibling;
        while (ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}
//获取当前元素的后一个元素
function getNextElement(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var ele=element.nextSibling;
        while(ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}

//获取父元素中的第一个元素
function getFirstElementByParent(parent) {
    if(parent.firstElementChild){
        return parent.firstElementChild;
    }else{
        var ele=parent.firstChild;
        while (ele&&ele.nodeType!==1){
            ele=ele.nextSibling;
        }
        return ele;
    }
}
//获取父元素中的最后一个元素
function getLastElementByParent(parent) {
    if(parent.lastElementChild){
        return parent.lastElementChild;
    }else{
        var ele=parent.lastChild;
        while(ele&&ele.nodeType!==1){
            ele=ele.previousSibling;
        }
        return ele;
    }
}

//获取兄弟元素
function getsiblings(ele) {
    if(!ele)return;//判断当前的ele这个元素是否存在
    var elements=[];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el=ele.previousSibling;//当前元素的前一个节点
    while (el){
        if (el.nodeType===1){//元素
            elements.push(el);//加到数组中
        }
        el=el.previousSibling;
    }
    el=ele.nextSibling;
    while(el){
        if(el.nodeType===1){
            elements.push(el);
        }
        el=el.nextSibling;
    }
    return elements;
}
//    //能力检测多个浏览器为同一个对象注册多个事件
var EventTools= {
    //为对象添加注册事件
    addEventListener: function (element, eventName, listener) {
        if (element.addEventListener) {
            element.addEventListener(eventName, listener, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, listener)
        } else {
            element["on" + eventName] = listener;
        }
    },
    //为对象移除事件
    removeEventListener: function (element, eventName, listener) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, listener, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + eventName, listener);
        } else {
            element["on" + eventName] = null;
        }
    },
    //获取参数e
    getEvent: function (e) {
        return e || window.event;
    },
    getPageX: function (e) {
        if (e.pageX) {
            return e.pageX;
        } else {
            //有的浏览器把高度设计在了文档的第一个元素中了
            //有的浏览器把高度设计在了body中了
            //document.documentElement.scrollTop;//文档的第一个元素
            //document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return e.clientX + scrollLeft;
        }
    },
    getPageY: function (e) {
        if (e.pageY) {
            return e.pageY;
        } else {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            return e.clientY + scrollTop;
        }
    }

};

$.fn.extend({
    initDialog(status, message) {
        var node = document.createElement("div");
        node.className = "dialog";
        if (message) {
            node.innerHTML = message;
        } else {
            node.innerHTML = '宝宝忘记提示你了'
        }
        document.querySelector("body").appendChild(node);
        var dialog = document.querySelector(".dialog");
        dialog.style.minWidth = "380px";
        dialog.style.minHeight = "45px";
        if (status === "success") {
            dialog.style.backgroundColor = "#f0f9eb";
            dialog.style.color = "#67c23a";
            dialog.style.border = "1px solid #c2e7b0";
        } else if (status == 'warning') {
            dialog.style.backgroundColor = "#fdf6ec";
            dialog.style.color = "#e6a23c";
            dialog.style.border = "1px solid #f5dab1";
        } else if (status === 'danger') {
            dialog.style.backgroundColor = "#fef0f0";
            dialog.style.color = "#f56c6c";
            dialog.style.border = "1px solid #fbc4c4";
        } else if (status === 'default') {
            dialog.style.backgroundColor = "#ecf5ff";
            dialog.style.color = "#409eff";
            dialog.style.border = "1px solid #b3d8ff";
        } else {
            dialog.style.backgroundColor = "#f4f4f5";
            dialog.style.color = "#909399";
            dialog.style.border = "1px solid #d3d4d6";
        }

        dialog.style.fontSize = "20px";
        dialog.style.textAlign = "center";
        dialog.style.lineHeight = "45px";
        dialog.style.position = "fixed";
        dialog.style.left = "50%";
        dialog.style.transform = "translate(-50%, 0)";
    },
    showDialog(status, message) {
        $(this).initDialog(status,message);
        var dialog = document.querySelector(".dialog");
        var start = getComputedStyle(dialog, null)["height"];
        start = -parseFloat(start);
        console.log(start);
        var timer = setInterval(() => {
            start += 1;
            $(dialog).css({ top: start + "px" });
            if (start >= 30) {
                start = 30;
                $(dialog).css({
                    top: start + "px",
                    display: "block",
                    opacity: 1,
                });
                clearInterval(timer);
            }
        }, 10);
    },
    hideDialog() {
        var opacity = 1;
        var dialog = document.querySelector(".dialog");
        var timer = setInterval(function () {
            opacity -= 0.1;
            dialog.style.opacity = opacity;
            if (opacity <= 0) {
                dialog.style.opacity = 0;
                dialog.style.display = "none";
                clearInterval(timer);
            }
        }, 16.7);
    },
});

// 获取元素的当前位置,移动,每次移动多少像素
function animate(element,target) {
    //每次调用这个函数的时候先清理之前的计时器
    clearInterval(element.setId);
    element.setId=setInterval(function () {
        //获取元素当前的位置
        var current=element.offsetLeft;
        //每次移动的像素
        var step=15;
        //判断移动的步数应该是正数还是负数
        step=current<target?step:-step;
        //当前的位置=之前的当前位置+移动的步数
        current=current+step;
        if(Math.abs(target-current)<Math.abs(step)){
            //把计时器清理
            clearInterval(element.setId);
            element.style.left=target+"px";
        }else{
            //赋值给要移动的元素
            element.style.left=current+"px";
        }
    },20);
}


$.fn.extend({
    initDialog(status, message) {
        var node = document.createElement("div");
        node.className = "dialog";
        if (message) {
            node.innerHTML = message;
        } else {
            node.innerHTML = '宝宝忘记提示你了'
        }
        document.querySelector("body").appendChild(node);
        var dialog = document.querySelector(".dialog");
        dialog.style.minWidth = "380px";
        dialog.style.minHeight = "45px";
        if (status === "success") {
            dialog.style.backgroundColor = "#f0f9eb";
            dialog.style.color = "#67c23a";
            dialog.style.border = "1px solid #c2e7b0";
        } else if (status == 'warning') {
            dialog.style.backgroundColor = "#fdf6ec";
            dialog.style.color = "#e6a23c";
            dialog.style.border = "1px solid #f5dab1";
        } else if (status === 'danger') {
            dialog.style.backgroundColor = "#fef0f0";
            dialog.style.color = "#f56c6c";
            dialog.style.border = "1px solid #fbc4c4";
        } else if (status === 'default') {
            dialog.style.backgroundColor = "#ecf5ff";
            dialog.style.color = "#409eff";
            dialog.style.border = "1px solid #b3d8ff";
        } else {
            dialog.style.backgroundColor = "#f4f4f5";
            dialog.style.color = "#909399";
            dialog.style.border = "1px solid #d3d4d6";
        }

        dialog.style.fontSize = "20px";
        dialog.style.textAlign = "center";
        dialog.style.lineHeight = "45px";
        dialog.style.position = "fixed";
        dialog.style.left = "50%";
        dialog.style.transform = "translate(-50%, 0)";
    },
    showDialog(status, message) {
        $(this).initDialog(status,message);
        var dialog = document.querySelector(".dialog");
        var start = getComputedStyle(dialog, null)["height"];
        start = -parseFloat(start);
        console.log(start);
        var timer = setInterval(() => {
            start += 1;
            $(dialog).css({ top: start + "px" });
            if (start >= 30) {
                start = 30;
                $(dialog).css({
                    top: start + "px",
                    display: "block",
                    opacity: 1,
                });
                clearInterval(timer);
            }
        }, 10);
    },
    hideDialog() {
        var opacity = 1;
        var dialog = document.querySelector(".dialog");
        var timer = setInterval(function () {
            opacity -= 0.1;
            dialog.style.opacity = opacity;
            if (opacity <= 0) {
                dialog.style.opacity = 0;
                dialog.style.display = "none";
                clearInterval(timer);
            }
        }, 16.7);
    },
});