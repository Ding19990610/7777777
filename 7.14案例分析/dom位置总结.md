## scrollTop
dom.scrollTop 是视图窗口顶端 距离元素顶端的距离
dom.scrollHeight 表示带有滚动条元素的高度 (当documentElment body 

scrollLeft 是视图窗口左边 距离元素左边的距离
dom.scrollWidth  表示带有滚动条的元素 宽度 (documnetElment body) 表示页面宽度

是可以表示 页面高度)
window.innerHeight 获取浏览器视图敞口的高度
window.innerWidth  获取浏览器视图窗口的宽度

公式
scrollTop最大值 =  scrollHeight - innerHeight;
scrollTop 最小值 = 0 
scrollLeft 最大值 = scrollWidth = innerWidth;
scrollLeft 最小智 = 0 

事件位置属性
e.offsetX 触发位置 距离目标元素的【父元素】左内边距的距离
e.clientX 触发位置： 在浏览器【视图窗口】x轴坐标。 也就是距离视图窗口左边的距离
e.screenX 触发位置；在【屏幕】 x轴坐标。 也就是距离屏幕左边的距离
e.pageX 触发位置 在【页面】 x轴坐标  也就是距离页面左边的距离；有横向滚动条要注意 

e.offsetY 触发位置  在目标元素【父元素】 y轴左边；也就是 距离目标元素父元素的上内边距的距离
e.clientY 触发位置： 在浏览器【视图窗口】y轴坐标。 也就是距离视图窗口顶部的距离
e.screenY 触发位置；在【屏幕】 y轴坐标。 也就是距离屏幕顶部的距离
e.pageY 触发位置 在【页面】 Y轴坐标  也就是距离页面顶部的距离；有纵向滚动条要注意 

### 与滚动条有关的内容
dom.scrollTop dom.scrollLeft
dom.scrollHeight dom.scrollWidth 
滚动条事件； onscroll 
指定滚动坐标  window.scrollTo(x,y); 定值
指定滚动锯鳞  window.scrollBy(x,y); 可变化的滚动位置

视图窗口
window.innerHeIght window.innerWidth 
domcument.documentElment.clientWidth/clientHeight 

父元素有关的位置
dom.offsetLeft dom.offsetTop  找 position

位置属性的应用 很重要：
拖动   无缝轮播   滚动轮播  放大镜   滚动联动
超级高级应用 scroll 可以封装成插件。为所有需要提供位置 滚动效果提供应用。 

## BOM
BOM 是浏览器对象
window 获取浏览器信息的对象；全局对象
   window.scrollBy()
   window.scrollTo()
   window.open()
   window.close()
document 访问html文档接口的dom对象
screen 获取用户屏幕信息的对象
navigator 获取浏览器与操作系统信息的对象
      例如：浏览器版本 浏览器名字 操作系统版本 ....  
localtion 可以用于导航的  重定向；
      
history 历史浏览器记录等....
    back() 上一个也main
    go()  到达第一几个也main   -1 上一个 -2上两个

### 获取静态高度
1：视图窗口高度
2：页面高度
3：屏幕高度
4：某个指定元素高度 offsetHeight

### 获取动态距离
1：滚动条滚动高度
2：event位置
3：dom 的位置

