
        var username = document.querySelector("#username");
        var password = document.querySelector("#password");
        var login = document.querySelector("#login");
        var span1 = document.querySelectorAll("span")[0];
        var span2 = document.querySelectorAll("span")[1];
        login.onclick = function (e) {
            e.preventDefault(); //阻止表单  submit的默认行为
            var uname = username.value;
            var pwd = password.value;
            // console.log(uname,pwd);
            // 贪婪匹配，不用顾虑长度问题
            var regName = /^[0-9a-zA-z]{6,16}$/;
            var regPwd = /^[A-Z]\w{7,11}$/;

            // console.log(regName.exec(uname));
            // console.log(regPwd.exec(pwd));

            if (!regName.test(uname)) {
                span1.innerHTML = "请确认输入的内容(6-12位的数字或字母)"
                span1.style.color = "red";
            } else {
                span1.innerHTML = "用户名格式正确"
                span1.style.color = "black";
            }


            if (!regPwd.test(pwd)) {
                span2.innerHTML = "请确认输入的内容(开头为大写字母且密码长度为8-16)"
                span2.style.color = "red";
            } else {
                span2.innerHTML = "密码格式正确"
                span2.style.color = "black";
            }
            if (regName.test(uname) && regPwd.test(pwd)) {
                span1.innerHTML = "";
                span2.innerHTML = "";
                console.log("登录成功");
            }
        }
