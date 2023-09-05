const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', (event) => {
  keys.forEach((key) => {
    if (key.getAttribute('id') === event.key.toLowerCase()) {
      key.classList.add('down');
    }
  })
});

