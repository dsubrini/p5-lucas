const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const imgBannerElement = document.querySelector('.banner-img');
const pBannerElement = document.querySelector('#banner p');
const dotContainerElement = document.querySelector('.dots');

let index = 0;

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

const changeImgElement = () => {
  imgBannerElement.src = `./assets/images/slideshow/${slides[index].image}`;
  pBannerElement.innerHTML = slides[index].tagLine;
};

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === index) {
    dot.classList.add('dot_selected');
  }
  dotContainerElement.appendChild(dot);
}

const changeDotSelectedClass = () => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((item) => item.classList.remove('dot_selected'));
  dots[index].classList.add('dot_selected');
};

arrowLeftElement.addEventListener('click', (e) => {
  index--;
  changeImgElement();
  changeDotSelectedClass();
});

arrowRightElement.addEventListener('click', (e) => {
  index++;
  changeImgElement();
  changeDotSelectedClass();
});
