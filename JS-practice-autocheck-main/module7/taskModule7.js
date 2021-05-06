// goit-js-hw-07 Дом.задание. Репозиторий
// Taks 1
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4.

const categoriesAndElements = () => {
    const categoriesRef = document.querySelectorAll(".item");
    console.log(`В списке ${categoriesRef.length} категории`);

    categoriesRef.forEach(element => {
        console.log(`Категория: ${element.querySelector("h2").textContent}`);
        console.log(`Колочество элементов: ${element.querySelectorAll("li").length}`);
// // 2 вар
    // categoriesRef.forEach(element => {
    //   console.log(`Категория: ${element.firstElementChild.textContent}`)
    //    console.log(`Количество элементов: ${element.lastElementChild.children.length}`);

    });

}
categoriesAndElements();

// Taks 2
// для каждого элемента массива ingredients создастm отдельный li,
// вставитm все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientslistRef = document.querySelector('#ingredients');

const makeIngredientsList = ingredients.map(ingredient => {
      const itemsRef =  document.createElement('li'); //создаем <li> теkстовым значением которого будет itemsRef.textContent = ingredient
      itemsRef.textContent = ingredient;  // то что приходит из массива 
          console.log(itemsRef)
          return itemsRef;
    });
    
ingredientslistRef.append(...makeIngredientsList);

// Taks 3
//  Напиши скрипт для создания галлереи изображений по массиву данных.
//  В HTML есть список ul#gallery.
//  Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().
//  Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//  Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. `` 

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
// 1 вар
  const galleryRef = document.querySelector('#gallery');
  console.log(galleryRef);
  
  const  createGallery = ({ url, alt }) => {
  return `<li> <img src = '${url}', alt = '${alt}' width='300' height='200'> </li>`;
  }

  // добавляем в DOM  
const createImages = images.map(createGallery).join(' '); 

galleryRef.insertAdjacentHTML(`beforeend`, createImages);
galleryRef.setAttribute("style", "list-style-type:none;");
console.log(createImages);

// 2 вар
const getListId = document.getElementById('gallery');

getListId.style.display = 'flex';
getListId.style.alignItems = 'center';
getListId.style.justifyContent = 'space-between';

const createListItem = images.map(image => {
  const itemEl = document.createElement('li');
  itemEl.style.listStyle = 'none';
  itemEl.insertAdjacentHTML(
    'afterbegin',
    `<img src='${image.url}' alt='${image.alt}' width='400px'>`,
  );

  return itemEl;
});

getListId.append(...createListItem);


// Task 4. Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//1. Получаем ссылки на элементы
const valueSpanRef = document.querySelector('#value');

const decrBntRef = document.querySelector('[data-action="decrement"]');
const incrBntRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1; // увеличивает значение
    valueSpanRef.textContent = counterValue; 
};
const decrement = () => {
    counterValue -= 1;
    valueSpanRef.textContent = counterValue; // изменяет значение по ссылке 
}

//  вешаем слушатель событий. При каком событии должена будет выполниться функция 
decrBntRef.addEventListener('click', () =>  decrement() ); // не ожидает аргумент, передавать не нужно
incrBntRef.addEventListener('click', () => increment()); // не ожидает аргумент, передавать не нужно

// incrBntRef.addEventListener('click', increment);
// decrBntRef.addEventListener('click', decrement);


// Свойство dataset - объект всех дата атрибутов которые на них находятся
console.log(decrBntRef.dataset.action); // action идет как ключ , а decrement как свойсвто значения {action : decrement}

// второй метод получить тоже самое - getAttribute('data-action')



// Task 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой,
//   в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
// 1 вр
inputRef.addEventListener('input', () => {
    outputEl.textContent = inputRef.value === '' ? 'незнакомец' : inputRef.value;
  });

  // 2 вар
inputRef.addEventListener('input', changeName); 

function changeName(event) {
    if(event.value === '' ) {
        outputRef.textContent =  'незнакомец';
    } else {
        nameOutputRef.textContent = event.value;
    }
 // outputRef.textContent = event.value === '' ? 'незнакомец' : event.value;
}

  console.log(outputRef.textContent);


//Задание 6
//Проверить 6 символов или нет

const inputValidationRef = document.querySelector('#validation-input');
console.dir(inputValidationRef);

  inputValidRef.addEventListener('blur', validation); // blur потеря фокуса
inputValidRef.addEventListener('focus', validation); // input получил фокус

inputValidRef.addEventListener('input', validation); // каждое изменение внутри input 


const validLength = Number(inputValidationRef.dataset.length);

function validation(event) {
  // console.log('Импут получил фокус');
  console.log(event.currentTarget.value);

    if (inputValidationRef.value.length === validLength) {
        inputValidationRef.classList.add('valid');
        inputValidationRef.classList.remove('invalid');
    } else if (inputValidationRef.value.length === 0) {
        inputValidationRef.classList.remove('invalid');
        inputValidationRef.classList.remove('valid');
    } else {
        inputValidationRef.classList.add('invalid');
        inputValidationRef.classList.remove('valid');
    }
  }

//Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputControlRef = document.querySelector('#font-size-control');
const spantextRef =  document.querySelector('#text');
console.dir(inputControlRef)
console.dir(spantextRef)

inputControlRef.addEventListener("input", onInputChange);

function onInputChange(event) {
 // event.currentTarget.value это ссылка на элемент в котором лежит слушатель inputControlRef.addEventListener
    spantextRef.style.fontSize = event.currentTarget.value  + "px"; 
 // spantextRef.style.fontSize = inputControlRef.value  + "px"; // не оень вариант
};


   //Задание 8
//Cкрипт создания и очистки коллекции элементов.
const refs = {
    inputSumElements: document.querySelector('#controls input'),
    renderCollection: document.querySelector('button[data-action="render"]'),
    clearCollection: document.querySelector('button[data-action="destroy"]'),
    boxesAmount: document.querySelector('#boxes'),
  };
  refs.renderCollection.addEventListener('click', () => createBoxes(refs.inputSumElements.value));
  
  refs.clearCollection.addEventListener('click', destroyBoxes); // добав слушателя на кнопку очистки

  function getRandomInt() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function createBoxes(amount) {
    const divBoxes = [];
    for (let i = 0; i < amount; i += 1) {
      const size = 30 + i * 10;
      const element = document.createElement('div');
        element.style.backgroundColor = getRandomInt();
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        divBoxes.push(element);
    }
    refs.boxesAmount.append(...divBoxes);
  }
  
  function destroyBoxes() {
    refs.inputSumElements.value = '';
    refs.boxesAmount.innerHTML = '';
  }
  //===============
  // Задача 8 не сделана
//   const refs = {
//     inputElementsRef : document.querySelector('#controls input'),
//     renderBtn: document.querySelector('button[data-action="render"]'), //[] это селекр атрубуты
//     destroyBtn: document.querySelector('button[data-action="destroy"]'),

//    renderDiv: document.querySelector('#boxes'),

// };

// refs.renderBtn.addEventListener('click', () => createBoxes(refs.inputElementsRef.value));

// refs.destroyBtn.addEventListener('click', destroyBoxes); // добав слушателя на кнопку очистки

// function createBoxes(amount) {
//     const divBoxes = [];
//     for (let i = 0; i < amount; i += 1) {
//         const element = document.createElement('div');
//         divBoxes.push(element);
//     }
// }
// function destroyBoxes() {
//    refs.destroyBtn.textContent = ' ';
// }
