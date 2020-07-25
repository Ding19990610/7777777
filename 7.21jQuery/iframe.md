### 注意
1、iframe 是独立窗口，有 window对象
2、浏览器窗口也有window对象
3、窗口之间通信，按照同源策略---->>导致启动页面时，需要启动live serve
4、浏览器窗口中 页面 为 父页面 window为父window
    4.1  如何获取子window
        ```
            var childWindow = document.getElementsByTagName("iframe")[0].contentWindow;
        ```
    4.2  如何获取 子window的dom元素
        ```
            var childDOM = childWindow.document.xxxx() //dom的API
        ```
    4.3  如何把父页面数据传递到子页面
        ```
            var data = window.data;  //data表示父页面的数据
            childWindow.data = window  // 给 子window 添加 全局属性，并赋值附window属性

        ```
5、iframe 加载的页面 为 子页面   该页面写js中window 为 iframe window  :子window
    5.1  如何获取父window
        ```
            var parentWindow = window.parent
        ```
    5.2  如何将子页面数据a  传递给 父页面 b
        ```
            var data = window.a; //获取子页面数据
            parentWindow.b = data;  //把子页面数据 传递给 父页面变量b
        ```
6、注意
 - 每个window  都有location localStorage document...
 - 在子页面当中location.href = ""  重新加载的是子窗口的页面 而不是父窗口的
 - 在子页面中  localStorage.setItem 是往子窗口的localStorage中传值，而不是父窗口，父窗口访问不到 

### iframe 如何传递数据

 - localStorage
 - 共同的父窗口