var parentWindow = window.parent;
var regName = /^[0-9a-zA-z]{6,16}$/;
var regPwd = /^[A-Z]\w{7,11}$/;
$('#username').on("blur", function () {
    if (!regName.test($('#username').val())) {
        $('.tips:eq(0)').html("请确认输入的内容(6-16位的数字或字母)");
        $('.tips:eq(0)').css({
            color: "red"
        });
        $('.tips:eq(0)').css({
            opacity: 1
        });
        $('.tips:eq(1)').css({
            opacity: 0
        });
    } else {
        $('.tips:eq(0)').css({
            opacity: 0
        });
        $('.tips:eq(1)').css({
            opacity: 1
        });
    };
})
$('#password').on("blur", function () {
    if (!regPwd.test($('#password').val())) {
        $('.tips:eq(1)').html("请确认输入的内容(开头为大写字母且密码长度为8-12)");
        $('.tips:eq(1)').css({
            color: "red"
        });
    } else {
        $('.tips:eq(1)').css({
            opacity: 0
        });
    }
})

var parentWindow = window.parent;
$('#login').click(function (e) {
    e.preventDefault();
   
    if ((regName.test($('#username').val())) && (regPwd.test($('#password').val()))) {
        $.ajax({
            url: "http://vebcoder.cn:9527/api/login",
            async: true,
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            type: "get",
            success: function (data) {
                console.log(data);
                $(".Car").show().delay(500).fadeOut(300);
                if (data.token != null) {
                    console.log("登录成功");
                    // $(window).showDialog("success","登录").hideDialog();
                    // location.href  = "../pages/home.html"
                    // localStorage.setItem("token",data.token);
                }
                if (data.code == 0) {
                    console.log("登录失败");
                    $(window).showDialog("success","登录成功").hideDialog("success",200);
                    var obj = {
                        code:1,
                        token:"tangsangzhenshigedashadiao"
                    }
                    for(var k in obj){
                        localStorage.setItem(k,obj[k])
                    }
                    console.log(localStorage);
                    localStorage.getItem("token");
                   
                    
                parentWindow.$("#register").css({
                    display: "none"
                });
                parentWindow.$("#dl").css({
                    display: "none"
                });
                parentWindow.$("#shopCar").css({
                    display: "block"
                });
                parentWindow.$("#exit").css({
                    display: "block"
                });
                parentWindow.$("#home").css({
                    borderBottom: "2px solid #c269b3"
                });
                parentWindow.$("#home").css({
                    color: "red"
                })
                parentWindow.$("#dl").css({
                    borderBottom: "none"
                });
                parentWindow.$("#dl").css({
                    color: "black"
                })
                parentWindow.$(".Car").show().delay(1000).fadeOut(300);
                // parentWindow.$.("success","登录成功!!");
                 location.href  = "../pages/home.html"
                }
            },
            error: function (err) {
                console.log(err, "error!!!");
            }
        });

    }


})