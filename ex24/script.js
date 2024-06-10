// Vitória Karoline de Carvalho Bernardo 
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const stopBtn = document.getElementById('stop-btn');
  
    playBtn.addEventListener('click', function() {
      audio.play();
    });
  
    pauseBtn.addEventListener('click', function() {
      audio.pause();
    });
  
    stopBtn.addEventListener('click', function() {
      audio.pause();
      audio.currentTime = 0;
    });
  });
  