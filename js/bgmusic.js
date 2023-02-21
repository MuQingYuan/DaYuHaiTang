window.addEventListener('load', function() {
    var bgmusic = document.querySelector('#bgmusic').querySelector('img');
      var song = document.querySelector('#song');
      var flag = true;
      bgmusic.addEventListener('click', function() {
        if(song.paused && flag == true){
          song.play();
          bgmusic.setAttribute('class', 'songRotate');
          bgmusic.style.animationPlayState = 'running';
          flag = false;
        }else if(song.play && flag == false){
          song.pause();
          bgmusic.style.animationPlayState = 'paused';
          flag = true;
        }
      })
})