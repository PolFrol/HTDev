const prev = document.querySelector('.button-prev');
const next = document.querySelector('.button-next');
const nextStaff = document.querySelector('.button-next--staff');
const nextOffer = document.querySelector('.button-next--offer');
const slides = document.querySelectorAll('.slide');
const slidesStaff = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const dotsStaff = document.querySelectorAll('.dot-staff');
const dotsOffer = document.querySelectorAll('.dot-slider');
const slidesOffer = document.querySelectorAll('.staff__slider');

let index = 0;
let indexStaff = 0;
let indexOffer = 0;

const activeSlide = n => {
  for(let slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(let dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
});


const activeSlideStaff = n => {
  for(let item of slidesStaff) {
    item.classList.remove('active');
  }
  slidesStaff[n].classList.add('active');
}

const activeDotStaff = n => {
  for(let dot of dotsStaff) {
    dot.classList.remove('active');
  }
  dotsStaff[n].classList.add('active');
}

const prepareCurrentSlideStaff = ind => {
  activeSlideStaff(ind);
  activeDotStaff(ind);
}

const nextSlideStaff = () => {
  if(indexStaff == slidesStaff.length - 1) {
    indexStaff = 0;
    prepareCurrentSlideStaff(indexStaff);
  } else {
    indexStaff++;
    prepareCurrentSlideStaff(indexStaff);
  }
}

const prevSlideStaff = () => {
  if(indexStaff == 0) {
    indexStaff = slidesStaff.length - 1;
    prepareCurrentSlideStaff(indexStaff);
  } else {
    indexStaff--;
    prepareCurrentSlideStaff(indexStaff);
  }
}

dotsStaff.forEach((item, indexDotStaff) => {
  item.addEventListener('click', () => {
    indexStaff = indexDotStaff;
    prepareCurrentSlideStaff(index);
  })
});


const activeSlideOffer = n => {
  for(let element of slidesOffer) {
    element.classList.remove('active');
  }
  slidesOffer[n].classList.add('active');
}

const activeDotOffer = n => {
  for(let dot of dotsOffer) {
    dot.classList.remove('active');
  }
  dotsOffer[n].classList.add('active');
}

const prepareCurrentSlideOffer = ind => {
  activeSlideOffer(ind);
  activeDotOffer(ind);
}

const nextSlideOffer = () => {
  if(indexOffer == slidesOffer.length - 1) {
    indexOffer = 0;
    prepareCurrentSlideOffer(indexOffer);
  } else {
    indexOffer++;
    prepareCurrentSlideOffer(indexOffer);
  }
}

const prevSlideOffer = () => {
  if(indexOffer == 0) {
    indexOffer = slidesOffer.length - 1;
    prepareCurrentSlideOffer(indexOffer);
  } else {
    indexOffer--;
    prepareCurrentSlideOffer(indexOffer);
  }
}

dotsOffer.forEach((item, indexDotOffer) => {
  item.addEventListener('click', () => {
    indexOffer = indexDotOffer;
    prepareCurrentSlideOffer(indexOffer);
  })
});

next.addEventListener('click', nextSlide);
nextStaff.addEventListener('click', nextSlideOffer);
nextOffer.addEventListener('click', nextSlideStaff);

setInterval(nextSlide, 2500);
setInterval(nextSlideStaff, 2500);
