const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = document.createElement('div');
const nextButton = document.createElement('div');

let currentIndex = 0;

prevButton.className = 'carousel-button carousel-prev';
nextButton.className = 'carousel-button carousel-next';
prevButton.textContent = '<';
nextButton.textContent = '>';

carousel.appendChild(prevButton);
carousel.appendChild(nextButton);

function showImage(index) {
  const totalWidth = images.length * (493 + 8); // Largura total considerando as margens
  const carouselWidth = carousel.clientWidth;
  const offset = Math.min(totalWidth - carouselWidth, index * (493 + 8));

  images.forEach((image, i) => {
    image.style.transform = `translateX(-${offset}px)`;
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);

  // Se chegou à última imagem, volte para a primeira imagem
  if (currentIndex === 0) {
    setTimeout(() => {
      showImage(images.length);
    }, 300); // Tempo de transição, ajuste conforme o valor que você definir no CSS
  }
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);

  // Se chegou à primeira imagem, volte para a última imagem
  if (currentIndex === images.length - 1) {
    setTimeout(() => {
      showImage(-1);
    }, 300); // Tempo de transição, ajuste conforme o valor que você definir no CSS
  }
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

showImage(currentIndex);
