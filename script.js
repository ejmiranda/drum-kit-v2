const keys = document.querySelectorAll('.key');

// Activate key with key stroke
window.addEventListener('keydown', (event) => {
  activateKey(event.key.toLowerCase());
});

// Activate key with click
keys.forEach((key) => {
  key.addEventListener('click', (event) => {
    activateKey(event.target.getAttribute('id'));
  });
});

// Deactivate key after the longest transition ends
keys.forEach((key) => {
  key.addEventListener('transitionend', (event) => {
    if(event.propertyName === 'transform') {
      key.classList.remove('down');
    }
  });
});

function activateKey(selectedKey) {
  keys.forEach((key) => { 
    if (key.getAttribute('id') === selectedKey) {
      key.classList.add('down');
      const audio = document.getElementById(`audio-${key.getAttribute('id')}`);
      audio.currentTime = 0;
      audio.play();
    }
  })
}