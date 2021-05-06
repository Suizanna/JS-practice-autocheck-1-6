//  1/5
// const name = '«Генератор защитного поля»';
// let price = '1000';
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

// console.log(firstMessage);
// console.log(secondMessage);

// 2/5
const invoice = 100;
const stock = 100;

const message =
  invoice <= stock
    ? `Заказ оформлен, с вами свяжется менеджер`
    : `На складе недостаточно товаров!`;
console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'

// 3/5
const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message; 

if (userPassword === null) {
  message = CANCELED_BY_USER;
  console.log(message);
} else if (userPassword == ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
  console.log(message);
} else if (userPassword != ADMIN_PASSWORD) {
  message = ACCESS_DENIED;
  console.log(message);
}

// Write code under this line

// console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

// Задача 1-3
// Использование if else
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:

// const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
// null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
// Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
// Используйте if else if else для написания скрипта.


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
// 
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
// или 
// } else if (orderPieces === 0 && orderPieces * pricePerDroid <= credits) {
//   totalPrice = orderPieces * pricePerDroid;
//   balanceCredit = credits - totalPrice;
//   message = `Вы купили ${orderPieces} дроидов, цена покупки составила ${totalPrice}, на счету осталось ${balanceCredit} кредитов`;
//   console.log(message);


// 5/5  1 модуль автопроверка №2. Использование switch, if и методов slice, toUpperCase, toLowerCase
const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();// Write code on this line
  switch (country) {
  // Write code under this line
      case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price !== 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'