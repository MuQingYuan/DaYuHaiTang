function move(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
    var step = 0;
    if((target - obj.offsetLeft) > 0){
      step = Math.ceil((target - obj.offsetLeft) / 10);
    }else if((target - obj.offsetLeft) < 0){
      step = Math.floor((target - obj.offsetLeft) / 10);
    }
      if(obj.offsetLeft == target){
        clearInterval(obj.timer);
        if(callback){
            callback();
        }
      }
      obj.style.left = obj.offsetLeft + step + 'px';
    },15)
  }
