window.addEventListener('load', function() {
    var left = this.document.querySelector('.left');
    var right = this.document.querySelector('.right');
    var focus = this.document.querySelector('.focus');
    var ul = this.document.querySelector('.picture');
    var ol = this.document.querySelector('.dian');
    // 左右箭头显示与隐藏
    focus.addEventListener('mouseenter', function() {
        left.style.display = 'block';
        right.style.display = 'block'; 
        //当鼠标移到轮播图里面，暂停播放（移除定时器）
        clearInterval(video);
        viedo = null; //清除定时器变量；
    })
    focus.addEventListener('mouseleave', function() {
        left.style.display = 'none';
        right.style.display = 'none';
        // 当鼠标移到轮播图外面，开始播放（启动定时器）
        video = setInterval(function() {
            //手动调用点击事件
            right.click();
        },2000)
    })
    // 动态生成小圆圈
    var num = ul.children.length - ol.children.length;
    const add = ul.clientWidth;
    for(var i =0 ; i < num; i++){
        ol.style.width = ol.clientWidth + 20+ 'px';
        ul.style.width = ul.clientWidth + add + 'px';
    var li = this.document.createElement('li');
    ol.appendChild(li);
    }
    // 设置小圆圈索引号
    for(var i = 0 ; i < ol.children.length; i++){
        ol.children[i].setAttribute('index',i);
    }
    ol.children[0].className = 'dd';
    // 点击哪个小圆圈，就选中这个小圆圈
    for(var i =0; i < ol.children.length; i++){
        ol.children[i].addEventListener('click', function() {
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].setAttribute('class','');
            }
            this.setAttribute('class','dd');
            // 点击小圆圈移动 是ul在移动
            // 移动的距离是 小圆圈索引号*图片的宽度（注意是负值）
            var index = this.getAttribute('index')
            //注意：修复bugger，小圆圈点击的索引号与点击右侧按钮num不同，所以要把index值给num。
            //注意：修复bugger，小圆圈变化与点击索引号不同，所以要把index值给chir。
            num = index;
            chir = index;
            var juli = -(focus.clientWidth * index);
            // 调用动画函数
            move(ul,juli);
        })
    }

    var ke = ul.children[0].cloneNode(true);
    ul.appendChild(ke);
    // 点击右按钮滚动.及无缝滚动
    var num = 0;
    var chir = 0;
    //节流阀
    var flag = true;
    right.addEventListener('click', function() {
        if(flag){
        flag = false;
        // 点击一次 num 加一 ul的滚动距离为 num* 图片宽度
        if(num == ol.children.length){
            ul.style.left = 0;
            num = 0;
        }
        num++;
        move(ul,-num * focus.offsetWidth, function() {
            flag = true;
        });

        //小圆圈跟随右侧按钮变化
        chir++;
        if(chir == ol.children.length){
            chir = 0;
        }
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[chir].setAttribute('class','dd');
        }
    })


    //点击左侧按钮滚动，及无缝滚动
    left.addEventListener('click', function() {
        if(flag){
        flag = false;
        // 点击一次 num 加一 ul的滚动距离为 num* 图片宽度
        if(num == 0){
            num = ul.children.length - 1;
            ul.style.left = - num * focus.offsetWidth + 'px';
        }
        num--;
        move(ul,-num * focus.offsetWidth, function() {
            //回调函数，让flag = true；
            flag = true;
        });
        //小圆圈跟随左侧按钮变化
        chir--;
        if(chir < 0){
            chir = ol.children.length - 1;
        }
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className = '';
        }
        ol.children[chir].setAttribute('class','dd');
        }
    })


    // 轮播图自动播放（定时器）
    var video = setInterval(function() {
        //手动调用点击事件
        right.click();
    },2000)
})
