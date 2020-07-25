var parentWindow = window.parent;
var regName = /^[0-9a-zA-z]{6,16}$/;
var regPwd = /^[A-Z]\w{7,11}$/;
$('#username').on("blur", function () {
    if (!regName.test($('#username').val())) {
        $('.tips:eq(0)').html("请确认输入的内容(6-12位的数字或字母)");
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
        $('.tips:eq(1)').html("请确认输入的内容(开头为大写字母且密码长度为8-16)");
        $('.tips:eq(1)').css({
            color: "red"
        });
    } else {
        $('.tips:eq(1)').css({
            opacity: 0
        });
    }
})


$('#register').click(function (e) {
    e.preventDefault();
    
    if ((regName.test($('#username').val())) && (regPwd.test($('#password').val()))) {
        console.log('sssss')
        $.ajax({
            url: "http://vebcoder.cn:9527/api/register",
            async: true,
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            type: "get",
            success: function (data) {
                $(".Car").show().delay(500).fadeOut(300);
               
                var parentWindow = window.parent;
                parentWindow.$("#register").css({borderBottom:"none"});
                parentWindow.$("#dl").css({borderBottom : "2px solid #c269b3"}) ;
                parentWindow.$("#register").css({display:"none"});
                parentWindow.$(".Car").show().delay(1000).fadeOut(300);
                parentWindow.$("#dl").css({color : "red"})
                if(data.code == 1){
                    console.log("注册成功");
                    $(window).showDialog("success","注册成功").hideDialog();
                    location.href = "../pages/login.html";
                }
                if(data.code == 0){
                    console.log("注册失败");
                }

                console.log(data.code); //响应数据
            },
            error: function (err) {
                console.log(err, "error!!!");
            }
        });

    }


})