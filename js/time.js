window.addEventListener('load', function() {
    var dates = document.querySelector('.date');
    var hour = document.querySelector('.hour');
    var minute = document.querySelector('.minute');
    var second = document.querySelector('.second');
    var timebox = document.querySelector('.timebox');
    //制作时间的函数，获取年，月，天，小时，分钟，秒
    function gettime(time){
        var inputtime = + new Date(time);
        var nowtime = + new Date();
        var d = (nowtime - inputtime) / 1000;
        //年份的时间
        var y = parseInt(d / 60 / 60 / 24 / 365);
        // y = y < 10 ? '0' + y : y;
        //月份的时间
        var mon = parseInt(d / 60 / 60 / 24 / 30 % 12);
        mon = mon < 10 ? '0' + mon : mon;
        mon = mon - 1;
        //天数的时间
        var dd = parseInt(d / 60 / 60 / 24 % 30);
        dd = dd < 10 ? '0' + dd : dd;
        dd = dd - 6;
        //小时的时间
        var h = parseInt(d / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h ;
        //分钟的时间
        var m = parseInt(d / 60 % 60);
        m = m < 10 ? '0' + m : m;
        //秒的时间
        var s = parseInt(d % 60);
        s = s < 10 ? '0' + s : s;
        return [y, mon, dd, h, m, s];
    }
    //制作定时器，不间断获取本地时间，来改变盒子的时间
    setInterval(function() {
        var re = gettime('2016-7-8 0:0');//调用时间函数
        //把时间函数获取的时间放入对应的盒子中
        timebox.children[0].innerHTML = re[0] + '年';
        timebox.children[1].innerHTML = re[1] + '月';
        timebox.children[2].innerHTML = re[2] + '天';
        timebox.children[3].innerHTML = re[3] + '时';
        timebox.children[4].innerHTML = re[4] + '分';
        timebox.children[5].innerHTML = re[5] + '秒';
    },1000)
})