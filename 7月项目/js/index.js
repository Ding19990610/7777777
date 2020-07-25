(function (doc, win) {
    setRem();
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            setRem();
        };
    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    // doc.addEventListener('DOMContentLoaded', recalc, false);  
})(document, window);

function setRem() {
    var docEl = document.documentElement;
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) {
        return;
    }
    docEl.style.fontSize = 10 * (clientWidth / 1080) + 'px';
}

var home = document.querySelector("#home");
var dl = document.querySelector("#dl");
var register = document.querySelector("#register");
var shopCar = document.querySelector("#shopCar");
var exit = document.querySelector("#exit");
var res = $("#ifrm")[0].contentWindow;
// 获取dom对象
var login = res.document.querySelector("#login");
var navLists = document.querySelectorAll(".navLists");
var Car = document.querySelector(".Car");
// console.log(navLists);
exit.onclick = function () {
    home.style.borderBottom = "2px solid #c269b3";
    home.style.color = "red";
    dl.style.borderBottom = "none";
    dl.style.color = "black";
    dl.style.display = "block";
    register.style.display = "block";
    exit.style.display = "none";
    shopCar.style.display = "none";
    window.localStorage.clear();
    $(".Tip").css({
        top:"40px"
    }).delay(500).fadeOut(300);
    $(".Car").show().delay(500).fadeOut(300);
}
home.onclick = function () {
    home.style.borderBottom = "2px solid #c269b3";
    home.style.color = "red";
    dl.style.color = "black";
    register.style.color = "black";
    dl.style.borderBottom = "none";
    register.style.borderBottom = "none";
    shopCar.style.borderBottom = "none";
    shopCar.style.color = "black";
    $(".Car").show().delay(1000).fadeOut(300);
}
dl.onclick = function () {
    dl.style.borderBottom = "2px solid #c269b3";
    dl.style.color = "red";
    home.style.color = "black";
    register.style.color = "black";
    home.style.borderBottom = "none";
    register.style.borderBottom = "none";
    $(".Car").show().delay(1000).fadeOut(300);
}
register.onclick = function () {
    register.style.borderBottom = "2px solid #c269b3";
    register.style.color = "red";
    home.style.color = "black";
    dl.style.color = "black";
    home.style.borderBottom = "none";
    dl.style.borderBottom = "none";
    $(".Car").show().delay(1000).fadeOut(300);
}
shopCar.onclick = function () {
    shopCar.style.borderBottom = "2px solid #c269b3";
    shopCar.style.color = "red";
    home.style.color = "black";
    exit.style.color = "black";
    home.style.borderBottom = "none";
    exit.style.borderBottom = "none";
    $(".Car").show().delay(1000).fadeOut(300);
}

if (localStorage.getItem("username")) {
    dl.style.display = "none";
    register.style.display = "none";
    exit.style.display = "block";
    shopCar.style.display = "block";
}