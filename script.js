const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', (event) => {
  keys.forEach((key) => { 
    if (key.getAttribute('id') === event.key.toLowerCase()) {
      key.classList.add('down');
      const audio = new Audio(getMediaPath(key.getAttribute('id')));
      audio.play();
    }
  })
});

function getMediaPath(key) {
  switch(key) {
    case 'a': return 'media/mario.wav';
    case 's': return 'media/luigi.wav';
    case 'd': return 'media/peach.wav';
    case 'f': return 'media/toad.wav';
    case 'g': return 'media/yoshi.wav';
    case 'h': return 'media/wario.wav';
    case 'j': return 'media/bowser.wav';
    case 'k': return 'media/boo.wav';
    case 'l': return 'media/game-over.wav';
  }
}