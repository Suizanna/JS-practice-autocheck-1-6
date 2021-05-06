// 1 модуль 25 поток
// 4/5 Использование if else и арифметических операторов.
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

// const orderPieces = 4;
// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';
// let totalPrice; // Write code on this line
// let balanceCredit; // Write code on this line
// let message;
// // Write code under this line
//    if(orderPieces === null) {
//     message = CANCELED_BY_USER;
//       console.log(message);
//    } else if (orderPieces * pricePerDroid > credits) {
//      message = ACCESS_DENIED;
//      console.log(message);
//   } else if (orderPieces >= 0) {
//   totalPrice = orderPieces * pricePerDroid;
//   balanceCredit = credits - totalPrice;
//    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit}кредитов`;
// console.log(message);
//   };
// =====================================================================================================
// 3 модуль 30 поток
// 1/41

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // 2/41
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   }

// };

// // 3/41

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;



// // 4/41

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// // 5/41
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // обращение в [] скобках обязательно ' строка ' !!!
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// // 6/41

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// // вложенность в обьекте // owner объект со свойством name 
// apartment.owner.name = 'Генри Сибола';
// // массив тегов в свойстве tags добавив в конец строку 'trusted'
// apartment.tags.push('trusted');


// // 7/41

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Ямайка',
//   city: 'Кингстон',
//   // помнить что свойсвтва разделяются между собой запятыми 
// };

// // 8/41

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Синтаксис коротких свойств (shorthand properties) позволяет использовать имя переменной как имя свойства, а её значение как значение свойства.при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.
//   name,
//   price,
//   image,
//   tags,
// };


// // 9/41

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Значением вычисляемого свойства может быть любое валидное выражение.  Имя этого свойства будет взято из значения переменной
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };


// // 10/41

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   //  Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.
//   values.push(apartment[key]);
//   // тут буквально написано = push в массив values значение ключа из объекта apartment
// };

// // 11/41

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;
// // Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.
// for (const key in apartment) {
//   // при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.
  
//   if (apartment.hasOwnProperty(key)) {

//     // буквально = если у объекта apartment есть собвстенное свойство (имя свойства) т. е. значение = true , тогда добавь в массив 
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }


// // 12/41

// function countProps(object) {
//   let propCount = 0;
 
// for ( const key in object ){
  
//   if (object.hasOwnProperty(key)){
//     propCount +=1
// }
// }
  
//   return propCount;
// }

// // 13/41

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
                        
//   if (apartment.hasOwnProperty(key)){}
// };


// // 14/41
// function countProps(object) {

//   const keys = Object.keys(object);
//   let propCount = keys.length

//   return propCount;
// }

// // 15/41

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // 16/41

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
  
// const values = Object.values(salaries);
//   for (const value of values){
//   totalSalary += value
//   };
 
//   return totalSalary;
// }

// // 17/41


// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex) 
//   // если в объекте colors есть имя свойсвта hex тогда пуш его в новый массив 
//   rgbColors.push(color.rgb)
// };


// // 18/41

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
 
//   for (const product of products) {
    
//     if (product.name === productName) {
      
//       return product.price
//     }
 
// }
//   return null
// };

// // 19/41

// function getAllPropValues(propName) {
 
//  const values = [];
//   for (let prod of products) {

//     const keys = Object.keys(prod);
//     for (let key of keys) {

//       if (key === propName) {
        
//         values.push(prod[key])
//       }
//     }
//   }
//     return values;
// }
  
// // 20/41


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
  
// for (const  product of products){
// if (product.name === productName) {
      
//     totalPrice = product.price * product.quantity
//     }
// }
//  return totalPrice ;
// };

// // 21/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// //
// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // 22/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures

// const meanTemperature = (yesterday + today + tomorrow) / 3;


// // 23/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon : highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // 24/41

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.
// // Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной color 

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
  
//   }

// //  25/41

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // глубокая деструктуризация объекта
// const { 
//   // присвоение локальной перенной другое имя low: lowToday
// today: { low: lowToday, high : highToday , icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
//   // присвоение значения несуществующей переменной - icon: todayIcon =
// tomorrow: {low: lowTomorrow,high:  highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}

// } = forecast

// // 26/41
// // Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.
// function calculateMeanTemperature(forecast) {

// // Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.
//   const { 
//     today: { low: todayLow, high : todayHigh },
//     tomorrow: {low: tomorrowLow,high: tomorrowHigh,}
     
//   } = forecast;
 
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25,high: 29} }));

// // 27/41
// // Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

// // Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

// // Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

// // Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.
// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// // 28/41
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.
// const allScores = [...firstGroupScores ,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// // 29/41
// // Операция spread позволяет распылить свойства произвольного количества объектов в один новый
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// // Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

// // 30/41
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
    
//   return  {
//   completed, category, priority, ...data
// };





// 33/41 Задача. Массив совпадений.
// Функция findMatches() принимает произвольное количество аргументов. 
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) 
// должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(number, ...args) {
//   const matches = []; // Не изменяй эту строку
 
//   for (const arg of args) {
//     if(number.includes(arg)) {
//       matches.push(arg);
//   }
  
//   }

//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);


// 34/41
// Объекты могут хранить не только данные, но и функции для работы с этими данными - методы.
//  Если значение свойства это функция, такое свойство называется методом объекта.
// Задача
// Добавь объекту bookShelf ещё два метода, 
// которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', 
// где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', 
// где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   books: ['Последнее королевство', 'Страж снов'],

//  // Это метод объекта (это функция)
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//    return `Обновляем книгу ${oldName} на ${newName}`;
//   },
 
// };

// console.log(bookShelf);


// // 35/41
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
	
// const bookIndex = this.books.indexOf(oldName);
//  this.books.splice(bookIndex ,1,newName);
//   },
// };

// console.log(bookShelf);
// // console.log(bookShelf.updateBook);

// 36/41  Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// const atTheOldToad = {
//     potions: [],
//  };

// // 37/41
// // Задача. Получаем все зелья
// // Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {

//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//    getPotions() {
//    return  this.potions;
//    },
//   };
//   console.log(atTheOldToad);

// 38/41
// // Дополни метод addPotion(potionName) так,
// //  чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
// // то метод объекта.
//     addPotion(potionName) {
   
//     this.potions.push(potionName); 
//        return  this.potions;
  
//     },
//   };
//   console.log(atTheOldToad);

// 39/41 Задача. Удаляем зелье
// Задание
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//     removePotion(potionName) { 
      
//   const potionIndex = this.potions.indexOf(potionName);    
// return this.potions.splice(potionIndex,1);   
//     },
//   };
// 2 вар короткая запись
// return this.potions.splice((this.potions.indexOf(potionName)),1);

//   console.log(atTheOldToad);

 // 40/41 06.03.2021
// // Задача. Обновляем зелье
// // Задание
// // Дополни метод updatePotionName(oldName, newName) так, 
// // чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     updatePotionName(oldName, newName) {
//       // Пиши код ниже этой строки
//    let  indexOfOldPotion = this.potions.indexOf(oldName);
//   return this.potions.splice(indexOfOldPotion, 1, newName);
//     },
//   };
//   console.log(atTheOldToad);

//  41/41
// // Задача. Расширяем инвентарь
// // Задание
// // Заказчица хочет чтобы каждое зелье было представлено не только именем, 
// // но и ценой, а в будущем может быть и другими характеристиками. 
// // Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     const { potions } = this;
//     return potions;},
//   addPotion(potionName) {
//     const { potions } = this;
//     if (potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;}
//     potions.push(potionName);},
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//     const {name} = potions[i];
//     if (potionName === -1) { return `Зелья ${potionName} нет в инвентаре!`;}
//     if (potionName === name) {//console.log(`Нашли такую позицию: -, ${potionName}`);//console.log(i);
//      potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//    // console.table(this.potions);
//    //        for (let i = 0; i < this.potions.length; i += 1) {   // ЧЕРЕЗ FOR  1 ВАРИАНТ
//   //               // console.log(this.potions[i].name);
//   //          if (oldName === this.potions[i].name) {
//   //                       // console.log(this.potions[i].name);
//   //              this.potions[i].name = newName;
//   //     };
//     for (const potion of this.potions) {                         // ЧЕРЕЗ FOR OF 2  ВАРИАНТ
//            // console.log(this.potions[i].name);
//       if (oldName === potion.name) {
//                    // console.log(this.potions[i].name);
//           potion.name = newName;
//      };
//    };
//   },
// }; 
// console.log(atTheOldToad);


// Задача в Слаке:  07.03.2021
// Нужно сделать функцию которая принимает любое слово.
//  Если длина слова нечетная, вернуть средний символ. 
// Если длина слова четная, вернуть 2 средних символа.

    //    assertEquals(getMiddle("test"),"es");
    // assertEquals(getMiddle("testing"),"t");
    // assertEquals(getMiddle("middle"),"dd");
    // assertEquals(getMiddle("A"),"A")
    // 1 вариант
// const getMiddle = str => {
//     const length = str.length;
//     if (length % 2 === 0) {
//         return [str[length / 2 - 1], str[length / 2]].join("");
//     }
//     return str[Math.floor(length / 2)];
// }
// console.log(getMiddle);

// // 2 вариант с интернета
// function getMiddle(s) {
//     if (s.length % 2 === 0)
//         return s.substring(s.length / 2 - 1, s.length / 2 + 1);
//     else
//         return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
// }
// console.log(getMiddle);
// 3  вариант? В слаке 
// const getMiddle = word => {
//     let position = 0;
//     let length = 0;
//     if (word.length % 2 === 0) {
//       position = word.length / 2 - 1;
//       length = 2;
//     } else {
//       position = word.length / 2;
//       length = 1;
//     }
//     return word.substring(position, position + length);
//   };
//   console.log(getMiddle);




  