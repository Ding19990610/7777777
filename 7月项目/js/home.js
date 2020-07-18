var imgs=document.querySelectorAll("img");
    imgs[0].style.display="block";
   
    var index=0;
    function zd(){
        index++;
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].className = '';
        };
        if (index > 4) {
            index = 0;
        }
        imgs[index].className = "show";
    }
    setInterval(zd,500)