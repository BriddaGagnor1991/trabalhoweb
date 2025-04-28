// menu
const menu = document.getElementById('menu');

// Função para adicionar a classe "scrolled" ao menu quando rolar a página
window.onscroll = function() {
    if (window.scrollY > 50) { // Quando rolar mais de 50px
        menu.classList.add('scrolled'); // Adiciona a classe 'scrolled'
    } else {
        menu.classList.remove('scrolled'); // Remove a classe 'scrolled' quando voltar ao topo
    }
};

 //slide abaixo

let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Função para mostrar o slide atual
function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0; // Volta ao primeiro slide
  } else if (index < 0) {
    currentSlide = totalSlides - 1; // Vai para o último slide
  } else {
    currentSlide = index;
  }

  // Esconde todos os slides
  slides.forEach((slide, i) => {
    slide.style.display = 'none';
  });

  // Mostra o slide atual
  slides[currentSlide].style.display = 'block';
}

// Função para mover automaticamente para o próximo slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Inicializa o carrossel e define a troca de slides a cada 6 segundos
showSlide(currentSlide);
setInterval(nextSlide, 6000);  // 6000ms = 6 segundos

