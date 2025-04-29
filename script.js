// Находим все картинки с классом clickable-img
const images = document.querySelectorAll('.clickable-img');

images.forEach(img => {
  img.addEventListener('click', function() {
    this.classList.toggle('scaled');
  });
});

// кнопка для подсказки
function toggleHints(element) {
  element.classList.toggle("active");
}