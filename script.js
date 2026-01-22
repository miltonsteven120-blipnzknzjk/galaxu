const tulips = document.querySelectorAll('.tulip');
const message = document.getElementById('message');

tulips.forEach(tulip => {
  tulip.addEventListener('click', () => {
    tulips.forEach(t => t.classList.remove('open'));
    tulip.classList.add('open');

    message.textContent = tulip.dataset.text;
    message.classList.add('show');
  });
});
