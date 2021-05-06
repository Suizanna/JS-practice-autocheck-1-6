// goit-js-hw-08 Дом.задание. Репозиторий

import gallery from './gallery-items.js'; 

// Шаг1. Создание и рендер разметки по массиву данных и предоставленному шаблону.  по примеру с вебинара 

const galleryRef = document.querySelector('.js-gallery'); //общий родитель картинок
const lightboxRef = document.querySelector('.js-lightbox'); //модальное окно

const galleryImgRef = document.querySelector('.lightbox__image');
const btnClose = document.querySelector('.lightbox__button');
// const btnClose = document.querySelector('button[data-action ="close-lightbox"]'); //кнопка закрытия модального окна
// const divModal = document.querySelector('.lightbox__content');
const lightboxOverlay = document.querySelector('.lightbox__overlay'); //серый фон в модалке


// Динамическая подстановка значений в шаблонную строку через деструктуризацию.
function createGallery(images) {   
  return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
      ;
    })
    .join('');
}
const cardsGallery = createGallery(gallery); // хранит результат вызова ф-ции создания всей разметки галереи

galleryRef.insertAdjacentHTML('beforeend', cardsGallery); //зарендерим разметку в HTML js-gallery
//или поле myImg.setAttribute("src", "https://aaa"); добавляем в разметку 
// galleryRef.after(myImg); 


// Шаг2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// вешаем слушателя на ul ('.js-gallery')
galleryRef.addEventListener('click', onGalleryClick)

function onGalleryClick (evt) {
 evt.preventDefault(); //отмена перехода по ссылке
  
const isImageEl = evt.target.classList.contains('gallery__image'); // целевой элемент 
const largeImageURL = evt.target.dataset.source; //получаем url большого изображения

 
   if (evt.target.nodeName !== 'IMG') { // имя тега 
    return;
  }
     console.log(evt.target.nodeName);
     console.log(evt.target.dataset.source);
 // 2 вар
  // if(!isImageEl) {  // если не включает class="gallery__image" 
  //   return;
  // }
  // console.log(evt.target);
  
// Подмена значения атрибута src элемента img.lightbox__image.
  galleryImgRef.src = evt.target.dataset.source; 
  galleryImgRef.alt = evt.target.alt; // или
  // galleryImgRef.alt = evt.target.getAttribute('alt');

  //  closeModal() //???
   openModal();
}

// Шаг3. Открытие модального окна по клику на элементе галереи.

function openModal() {    // при нажатии на элемент добавляем класс открытия модального окна. 
  lightboxRef.classList.add('is-open');     //модальное окно

  window.addEventListener('keydown', onPressEscape); // колбек
}

// Закрытие модального окна по клику на кнопку .lightbox__button.

btnClose.addEventListener('click', closeModal) // слушатель для кнопки закрытия('.lightbox__button')

function closeModal() {
  lightboxRef.classList.remove('is-open');
  galleryImgRef.src = ''; // Очистка значения атрибута src элемента img.lightbox__image.
  galleryImgRef.alt = '';

  window.removeEventListener('keydown', onPressEscape);//'keydown реагирует на все клавиши 
  // window.removeEventListener('keydown', onPressRightArrow); //для (вариант 1)
  // window.removeEventListener('keydown', onPressLeftArrow);

  // window.addEventListener('keydown', closeModal); // закрыв от любой клавиши

  // const currentActiveImg = document.querySelector('.js-lightbox.is-open');
  // if(currentActiveImg) {
  //   currentActiveImg.classList.remove('is-open');
  // }
}


// Закрытие модального окна по клику на div.lightbox__overlay.

lightboxOverlay.addEventListener('click', onOverlayClick);

function onOverlayClick(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}
// Закрытие модального окна по нажатию клавиши ESC.
lightboxOverlay.addEventListener('click', onEscKeyPress)

// закрытие по клику на ESC
function onPressEscape(evt) {
  if (evt.code === 'ESCAPE') {
    closeModal();
  }
}

// function onPressEscape(evt) {
//   const isEscape = evt.code === 'Escape';
// console.log(evt);
//   if (isEscape) {
//   closeModal();
//   }
// }

// (вариант 1)
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
window.addEventListener('keydown', onPressRightArrow);
window.addEventListener('keydown', onPressLeftArrow);
//ArrowLeft
function onPressLeftArrow(evt) {
  const pressLeft = evt.code === 'ArrowLeft';

  if (pressLeft) {
    const sources = gallery.map(({ original }) => original);
    let indexOfCurrentImg = sources.indexOf(galleryImgRef.src);

    if (indexOfCurrentImg === 0) {
      indexOfCurrentImg = sources.length;
    }
    galleryImgRef.src = sources[indexOfCurrentImg - 1];
    console.log(indexOfCurrentImg);
  }
}

//ArrowRight
function onPressRightArrow(evt) {
  const pressRight = evt.code === 'ArrowRight';

  if (pressRight) {
    const sources = gallery.map(({ original }) => original);
    let indexOfCurrentImg = sources.indexOf(galleryImgRef.src);

    if (indexOfCurrentImg + 1 > sources.length - 1) {
      indexOfCurrentImg = -1;
    }
    galleryImgRef.src = sources[indexOfCurrentImg + 1];
    console.log(indexOfCurrentImg + 1);
  }
}

// ========= функция для пролистывания изображений в модалке (вариант 2) =========
window.addEventListener('keydown', changeImage); // добавляет слушатель на < > .

const images =  gallery.map((el) => el.original)
let currentImg = 0
function changeImage(event) {
  if (event.code === 'ArrowRight') {
    if (currentImg === images.length - 1) {
      return
    } else {
      currentImg += 1;
    }
    galleryImgRef.src = images[currentImg]
    galleryImgRef.alt =  gallery[currentImg].description
    }
  if (event.code === 'ArrowLeft') {
    if (currentImg === 0) {
      return
    } else {
      currentImg -= 1;
    }
    galleryImgRef.src = images[currentImg]
    galleryImgRef.alt =  gallery[currentImg].description
  }
}
// ========= функция для пролистывания изображений в модалке (вариант 3) =========
function changeImage(event) {
  const pressRight = event.code === 'ArrowRight';
  const pressLeft = event.code === 'ArrowLeft';
  let currentImage =  galleryImgRef.src; 

  gallery.forEach((el, index, images) => {
    const nextImg = images[index + 1];
    const prevImg = images[index - 1];

    if (pressRight && nextImg &&  galleryImgRef.src === el.original) {
      currentImage = nextImg.original;
    }

    if (pressLeft && prevImg &&  galleryImgRef.src === el.original) {
      currentImage = prevImg.original;
    }
  });
  if (galleryImgRef.src !== currentImage) {
    galleryImgRef.src = currentImage;
  }
}

//===========================
// //Слайдер с ютуб
let index = 0;

const activeSlide = n => {  // n - параметр, картинка
console.log(n);
for(slide of slides){
  slide.classList.remove('active');
}
slides[n].classList.add('active');
}

//вперед
const nextSlide = () => {
  if(index == slides.length - 1) {
     index = 0;
     activeSlide(index);
  } else {
     index++;
     activeSlide(index);
  }

}
// назад клик
const prevSlide = () => {
  if(index == 0) {
  index = slides.length-1;
     activeSlide(index);
  } else {
     index--;
     activeSlide(index);
  }
}
// const galleryRef = document.querySelector('.js-gallery'); //общий родитель картинок
// galleryRef.addEventListener('click', nextSlide);

next.addEventListener('click', nextSlide); // если кнопка next есть
prev.addEventListener('click', prevSlide);

//=====================================================