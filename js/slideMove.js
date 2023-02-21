window.addEventListener('load', function() {
  var slide = document.querySelector('.slide');
document.addEventListener('scroll', function() {
  if(window.pageYOffset >= 650){
      slide.style.position = 'fixed';
      slide.style.top = 600 + 'px'
  }
  if(window.pageYOffset >= 300){
      slide.style.display = 'block'
  }else{
      slide.style.display = 'none';
  }
})

// 点击触发元素
slide.addEventListener('click', function() {
  move(window,0);
})

// 鼠标点击于移入样式
slide.addEventListener('mouseenter', function() {
  slide.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
})
slide.addEventListener('mouseleave', function() {
  slide.style.backgroundColor = 'rgb(246, 244, 244)';
})


// 回到顶部函数
function move(obj,target,callback){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
  var step = 0;
  if((target - window.pageYOffset) > 0){
    step = Math.ceil((target - window.pageYOffset) / 10);
  }else if((target - window.pageYOffset) < 0){
    step = Math.floor((target - window.pageYOffset) / 10);
  }
    if(window.pageYOffset == target){
      clearInterval(obj.timer);
      if(callback){
          callback();
      }
    }
  window.scroll(0, window.pageYOffset + step);
  },15)
}
})
