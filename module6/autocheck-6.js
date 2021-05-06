// 6 модуль Автопроверка 
// 1/44
// // пример
// const numbers = [5, 10, 15, 20, 25];
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// 1/44
// Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
//  и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
// //   // Классический for
// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //    totalPrice += orderedItems[i];
// //   }
// //   // Перебирающий forEach
// orderedItems.forEach(function (orderedItems) {
//  totalPrice += orderedItems;
// });
//   return totalPrice;
// }
// 2 вар стрелка
// orderedItems.forEach(element => {
//      totalPrice += element;
//     });
//       return totalPrice;
//     }

// 2/44
// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
//  в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//    // for (let i = 0; i < numbers.length; i += 1) {
//     //  if (numbers[i] > value) {
//     //    filteredNumbers.push(numbers[i]);
//      // }
//    // }
//  numbers.forEach(function(numbers) { 
//    if(numbers > value) {
//    filteredNumbers.push(numbers);
//    console.log(numbers);
//    }
   
// });
//     return filteredNumbers;
// }
// 2 вар  стрелка
// numbers.forEach((numbers) => { 
//     if(numbers > value) {
//     filteredNumbers.push(numbers);
//     console.log(numbers);
//     }
    
//  });
//      return filteredNumbers;
//  } 
  
// console.log(555);

//   3/44 Задача. Общие элементы. Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//  // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
// firstArray.forEach(function(firstArray) { 
//   if (secondArray.includes(firstArray)) {
//     commonElements.push(firstArray); 
//   } 
//     });
//     return commonElements;  
//   }
//   console.log(557);

// // 6/44 Стрелочные функции как коллбеки
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });
    
//     return totalPrice;
//   }
//   console.log(777);

// // 7/44  Фильтрация массива чисел
  const filterArray = (numbers, value)=>  {
    const filteredNumbers = [];
  
    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    return filteredNumbers;
  }

//   8/44 Общие элементы
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach(element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    return commonElements;
  }


// 9/44 Чистые функции
// // Пример из автопроверки
// const pureMultiply = (array, value) => {
//     const newArray = [];
  
//     array.forEach(element => {
//       newArray.push(element * value);
//     });

//     return newArray;
//   };
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);
  
//   // Не произошло мутации исходных данных
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функция вернула новый массив с изменёнными данными
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 9/44 Чистые функции
// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, 
// а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

 // одноурупник Владир Guns
// function changeEven  (numbers, value) {
//     const newArray = [...numbers];
//  numbers.forEach(number => {
//    if (number % 2 === 0) {
// newArray.splice(newArray.indexOf(number),1,number + value);
//    }
//   });
//    return newArray;
//   }
  // еще вариант
//   function changeEven(numbers, value) {
//     const newArray = [];
//  numbers.forEach(number => {
//    if (number % 2 === 0) {
// newArray.push(number + value);
//    } else { 
//      newArray.push(number)
//    };
//   });
//    return newArray;
//   }
// 2 вариант
// function changeEven(numbers, value) {
//   const arr = [...numbers];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         arr[i] = numbers[i] + value;
//       }
//     }
//     console.log('~ arr', arr);
//   return arr;
//   }
//   changeEven([1, 2, 3, 4, 5], 10);
  
//  3 вариант от Димы Письменный ментор
//   function changeEven(numbers, value) {
//     const res = [];
//  for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         res.push(numbers[i] + value);
//       } else {
//         res.push(numbers[i])
//     }
//   }
//   console.log('res', res);
//     return res;
// }
// changeEven([1, 2, 3, 4, 5], 20);

// // 10/44
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const arr =  [5, 4, 6, 6];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);             

// 11/44 Пример из автопроверки
// Используя метод map() можно перебрать массив объектов,
//  и в коллбек-функции вернуть значение свойства каждого из них.
const students = [
    { name: 'Манго', score: 83 },
    { name: 'Поли', score: 59 },
    { name: 'Аякс', score: 37 },
    { name: 'Киви', score: 94 },
    { name: 'Хьюстон', score: 64 }
  ];
  const names = students.map(student => student.name);
  console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// 11/44
// Задание
// Используя метод map() сделай так, 
// чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  const titles = books.map(book => book.title);
console.log(titles); 

// 12/44 Пример из автопроверки
// массив.flatMap((element, index, array) => {
//     // Тело коллбек-функции
//   });
const students = [
    { name: 'Манго', courses: ['математика', 'физика'] },
    { name: 'Поли', courses: ['информатика', 'математика'] },
    { name: 'Киви', courses: ['физика', 'биология'] },
  ];
  
  students.map((student) => student.courses);
  // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]
  
  const courses = students.flatMap((student) => student.courses);
  // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
  console.log('courses', courses); 

 // 12/44
// Задание
// Используя метод flatMap() сделай так, 
// чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
//   массив всех жанров книг (свойство genres) из массива books
  const genres = books.flatMap((book) => book.genres);
  //Фильтрация уникальных элементов. массив уникальных жанров - без повторений.
  const uniqueGenres = allGenres.filter((genres,index,books) => books.indexOf(genres) === index
);
  console.log(genres);

//   13/44 Имена пользователей. Массив объектов пользователей
// Дополни функцию getUserNames(users) так,
//  чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
const  users  = 
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// простой вариант
// const getUserNames =  users.map((user) => {
//     return user.name;
// });
const getUserNames = users => users.map((user) => user.name);
//это запись тоже найдет name.Можно изменить название объекта
const getUserNames = playUsers => users.map((user) => user.name);
//14/44   Почты пользователей.
// возвращает массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
const getUserEmails = users => users.map((user) => user.email);
// 18/44 возвращает массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
const getUsersWithEyeColor = (users, color)  =>  users.filter(user => user.eyeColor === color);
console.log(getUserNames(users));
// 19/44 Дополни функцию getUsersWithAge(users, minAge, maxAge) так, 
// чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
// 20/44 возвращает массив пользователей у которых есть друг с именем в параметре friendName.
//  Массив друзей пользователя хранится в свойстве friends.
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName)); 
    };


// Пример из конспекта
const users = [
  { name: 'Mango', isActive: true },
  { name: 'Poly', isActive: false },
  { name: 'Ajax', isActive: true },
];

// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map(user => user.name);

console.log(names); // ["Mango", "Poly", "Ajax"]

// 15/44 Методы filter и find
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);


// 16/44 //Фильтрация уникальных элементов. 
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // массив всех жанров книг (свойство genres) из массива books.
const allGenres = books.flatMap((book) => book.genres);
// массив уникальных жанров - без повторений.
const uniqueGenres = allGenres.filter((genres,index,books) => books.indexOf(genres) === index
); //  или (genres,index,array)  => array.indexOf(genres) === index
// правило array.filter(callback[currentValue, index, array])

// 17/44
// Пример в автопроверке
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон.

// 17/44 Метод filter() и массив объектов.
// В переменной topRatedBooks получился массив книг 
// рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг 
// написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = 'Бернард Корнуэлл';
  // Пиши код ниже этой строки
  const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter((book) => book.author === AUTHOR);


//18/44 возвращаает массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

// 19/44 Дополни функцию getUsersWithAge(users, minAge, maxAge) так, 
// чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
// 20/44 возвращает массив пользователей у которых есть друг с именем в параметре friendName.
//  Массив друзей пользователя хранится в свойстве friends.
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName)); 
    };
// 21/44.Список друзей. Массив объектов пользователей.
const users =
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]
// Задание
// Дополни функцию getFriends(users) так, 
// чтобы она возвращала массив друзей всех пользователей (свойство friends).
//  У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
const getFriends = (users) => 
users.flatMap((users) => users.friends).filter((friends, index, users) => users.indexOf(friends) === index
 );
 const getFriends = (users) => {
  return users.flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);

};
// //  22/44
// Дополни функцию getActiveUsers(users) так,
//  чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
const getActiveUsers = (users) => users.filter(user => user.isActive); // убрать (users) 
console.table(getActiveUsers);
// 23/44 возвращала массив неактивных пользователей.
const getInactiveUsers = (users) => users.filter(user => !user.isActive);

// 24/44 Метод find()
// Пример в автопроверке
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// colorPickerOptions.find((option) => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === 'white'); // undefined
//   console.log(colorPickerOptions); 

// 24/44 Метод find()
// В переменной bookWithTitle получился объект книги
//  название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги
//  автор который (свойство author) совпадает со значением переменной AUTHOR.
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки
const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

// 25/44 Пользователь с почтой. в 21 задече массив users
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
//  почта которого (свойство email) совпадает со значением параметра email.
const getUserWithEmail = (users, email) => users.find((user) => user.email === email);


// 26/44
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(firstArray => firstArray % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(firstArray => firstArray % 2 !== 0)

const eachElementInSecondIsEven = secondArray.every(secondArray => secondArray % 2 === 0); 
const eachElementInSecondIsOdd = secondArray.every(secondArray => secondArray % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(thirdArray => thirdArray % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(thirdArray => thirdArray % 2 !== 0);

// 27/44  Все ли пользователи активны. в 21 задече массив users
// Задание 
// Дополни функцию isEveryUserActive(users) так,
//  чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
const isEveryUserActive = (users) => 
 users.every(user => user.isActive);

//  28/44 Метод some()
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(firstArray => firstArray % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(firstArray => firstArray % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(secondArray => secondArray % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(secondArray => secondArray % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(thirdArray => thirdArray % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(thirdArray => thirdArray% 2 !== 0);
// 29/44  Есть ли активные пользователи
const isAnyUserActive = users => 
   users.some(user => user.isActive);

  //  30/44
  // Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
  //  Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  const totalPlayTime =  playtimes.reduce((playtime, number) => playtime + number
   );
  const averagePlayTime = totalPlayTime / playtimes.length;

  // 31/44  Пример
  // При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. 
  // Например, есть массив студентов с баллами за тест. Необходимо получить средний бал.
  const students = [
    { name: 'Манго', score: 83 },
    { name: 'Поли', score: 59 },
    { name: 'Аякс', score: 37 },
    { name: 'Киви', score: 94 },
    { name: 'Хьюстон', score: 64 },
  ];
  
  // Название аккумулятора может быть произвольным, это просто параметр функции
  const totalScore = students.reduce((total, student) => {
    return total + student.score;
  }, 0);
  const averageScore = totalScore / students.length;

  // 31/44 Метод reduce() и массив объектов
  // Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, 
  // и получить общую сумму этих времён. Рассчитать время для каждого из игроков, 
  // можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
  const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
  ];
  
  const totalAveragePlaytimePerGame = players.reduce((total, player) => 
  total + player.playtime  / player.gamesPlayed, 0);

  // 32/44 Общий баланс пользователей
//   Задание
// Дополни функцию calculateTotalBalance(users) так, 
// чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
  const calculateTotalBalance = users => users.reduce((total, user) => {
    return (total + user.balance);
 },0);

// //  33/44
// Дополни функцию getTotalFriendCount(users) так, 
// чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
const getTotalFriendCount = users => users.reduce((allFriends, user) => allFriends + user.friends.length,
 0,
 );

//  34/44
// Пример
// Массив чисел будет отсортирован по возврастанию
const scores = [61, 19, 74, 35, 92, 56];
// scores.sort(); // здесь меняет исходный массив.это плохо
const ascendingScores = [...scores].sort(); // не меняет исходный массив
console.log(scores); // [19, 35, 56, 61, 74, 92]

// Массив строк сортируется по алфавиту
const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];
// students.sort(); //здесь меняет исходный массив.это плохо
const ascendingstudets = [...students].sort();
console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// При этом порядковый номер заглавных букв меньше чем у прописных
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']
// 34/44
// Дополни код так, чтобы в переменной ascendingReleaseDates 
// получилась отсортированная по возрастанию копия массива releaseDates, 
// а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Массив чисел будет отсортирован по возврастанию и по алфавиту. 
const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();
  
// // 35/44 Свой порядок сортировки чисел
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, 
// по её возрастанию или убыванию. Дополни код так, 
// чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
//  а в переменной descendingReleaseDates копия отсортированная по убыванию.
//   const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 36/44
// Задание
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, 
// в алфавитном и обратном алфавитном порядке. Дополни код так, 
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, 
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];

const authorsInAlphabetOrder =[... authors].sort((a, b) => a.localeCompare(b)); 
const authorsInReversedOrder = [...authors].sort((a, b)  => b.localeCompare(a)); 

// 37/44 Сортировка объектов
// Пример
// При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. 
// Например, есть группа студентов с баллами за тест.
//  Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
//отсортированный по имени автора в алфавитном порядке.
const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName =  [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
//массив книг отсортированный по возрастанию рейтинга.
const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// 38/44
// Дополни функцию sortByAscendingBalance(users) так, 
// чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
const sortByAscendingBalance = users => [...users].sort((firstUser, secondUser) => firstUser.balance -  secondUser.balance);                                               

// 39/44 Сортировка по количеству друзей. Массив объектов пользователей
// Дополни функцию sortByDescendingFriendCount(users) так,
//  чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
 const sortByDescendingFriendCount = users => 
 [...users].sort((firstUser, secondUser) =>  secondUser.friends.length - firstUser.friends.length);   
//[...users].sort((a,b)=>b.friends.length-a.friends.length);

// 40/44 Сортировка по имени. массив объектов мы будем передавать в параметр users 
// Дополни функцию sortByName(users) так,
//  чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
const sortByName = users =>
[...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));    

// 41/44
// Цепочки методов (чейнинг, chaining)
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;

const names = [...books].filter((book) => book.rating > MIN_BOOK_RATING)
.map((book) => book.author)
.sort((a, b) => a.localeCompare(b));

// 42/44 Пользователи и друзья
// Дополни функцию getNamesSortedByFriendCount(users) так, 
// чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
const getNamesSortedByFriendCount = users => 
   [...users].sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name);

//  43/44
// Дополни функцию getSortedFriends(users) так,
//  чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
const getSortedFriends = users =>
[...users]
.flatMap(user => user.friends)
.filter((friends, index, users) => users.indexOf(friends) === index)
.sort((firstUser, secondUser) => firstUser.localeCompare(secondUser));

// 44/44 Общий баланс
// Дополни функцию getTotalBalanceByGender(users, gender) так,
//  чтобы она возвращала общий баланс пользователей (свойство balance), 
// пол которых (свойство gender) совпадает со значением параметра gender.
const getTotalBalanceByGender = (users, gender) =>
users.filter(user => user.gender === gender).reduce((total, user) => {
    return (total + user.balance);
 },0);
