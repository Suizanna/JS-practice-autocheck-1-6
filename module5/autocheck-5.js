// 5 модуль
  // 2/19 Задача. Цепочка прототипов
  // ancestor  прототипом для parent 
  const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };
  
  const parent = Object.create(ancestor);
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;
  
  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;

// 3/19 Функция-конструктор
  function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  const mango = new Car('Audi', 'Q3', 36000);
  console.log(mango);
  const poly = new Car('BMW', 'X5', 58900);
  console.log(poly);


  // 4/19 Объект настроек
  function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  const mango = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
  
    console.log(mango);

    // 5/19 Свойство prototype
    function Car({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    Car.prototype.getPrice = function() {
        return this.price;
    };
    Car.prototype.changePrice = function (newPrice) {
        this.price = newPrice;
    };
    // 5/19 Пример в автопроверке
    function User({ name, email }) {
      this.name = name;
      this.email = email;
    }
    
    User.prototype.getEmail = function () {
      return this.email;
    };
    
    User.prototype.changeEmail = function (newEmail) {
      this.email = newEmail;
    };
    
    const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
    
    console.log(mango.getEmail()); // mango@mail.com
    mango.changeEmail('mango@supermail.com');
    console.log(mango.getEmail()); // mango@supermail.com

    // 6/19 
    // С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров.
    // Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items. 
    function Storage(items) {
      this.items = items;
     };
    //  Добавь методы на прототип: getItems , addItem, removeItem 
     Storage.prototype.getItems = function() {
       return this.items;
     };
     Storage.prototype.addItem = function(newItem) {
       this.items.push(newItem);
     };
     Storage.prototype.removeItem = function(item) {
         return this.items.splice(this.items.indexOf(item), 1);
      };
     const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
     console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
     storage.addItem('Дроид');
     console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
     storage.removeItem('Пролонгер');
     console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

    //  7/19
//     Конструктор строк
// Задание
// С помощью Function Declaration напиши функцию-конструктор StringBuilder, 
// которая принимает один параметр baseValue - произвольную строку, 
// которая записывается на создаваемый объект в свойство value.
// Добавь методы на прототип: getValue(), padEnd(str) и тд.
    function  StringBuilder(baseValue) {
      this.value = baseValue;
    };
     StringBuilder.prototype.getValue = function() {
           return this.value;
         };
     StringBuilder.prototype.padEnd = function(str) {
       return this.value= this.value + str;
     };
     StringBuilder.prototype.padStart = function(str)  {
        return this.value= str + this.value;
     };
     StringBuilder.prototype.padBoth = function(str)  {
        return this.value= str + this.value +  str;
     };
    // Пиши код выше этой строки
    const builder = new StringBuilder('.');
    console.log(builder.getValue()); // '.'
    builder.padStart('^');
    console.log(builder.getValue()); // '^.'
    builder.padEnd('^');
    console.log(builder.getValue()); // '^.^'
    builder.padBoth('=');
    console.log(builder.getValue()); // '=^.^='

 
// // 9/19
// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
class Car {
  brand; 
  model;
  price;

 constructor({  brand, model, price  }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
 }
}
console.log(Car);

// 10/19
// Задание
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

getPrice() {
  return this.price;
}
changePrice(newPrice) {
  this.price = (newPrice);
}
}

// // 11/19 
// Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
//  для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
  // Необязательное объявление публичных свойств
model;
  // Обязательное объявление приватных свойств
#brand;
constructor({ brand, model, price }) {
  this.#brand = brand;
  this.model = model;
  this.price = price;
}
getBrand() {
return this.#brand;
}

changeBrand(newBrand) {
this.#brand = newBrand;

}
}

// 12/19
// // Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. 
// // Сделай так, чтобы свойство items было приватным.
// function Storage(items) {
//  this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

class Storage {
  #items;

constructor(items) {
  this.#items = items;
}
getItems() {
return this.#items;
}
addItem(newItem) {
  this.#items.push(newItem);
}
removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
}
}
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// // 13/19
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. 
// Сделай так, чтобы свойство value было приватным.
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
class StringBuilder {
 #value;
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str)
  }
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// 14/19
// Задание
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. 
// Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand,
//  model и price для взаимодействия с приватными свойствами.
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.model;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  get price() {
    return this.price;
  }
  set brand(newBrand) {
     this.#brand = newBrand;
  }
set model(newModel) {
  this.model = newModel;
}S
  set price(newPrice) {
    this.price = newPrice;
  }
}
// 15/19
class Car {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice <= Car.MAX_PRICE)
    this.#price = newPrice;
  }
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000


// // 16/19 
// Пример из автопроверки
class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }
  // Обязательное объявление приватных свойств
  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(
  User.isEmailTaken('poly@mail.com')
); // false

console.log(
  User.isEmailTaken('mango@mail.com')
); // true

// 16/19  // Задание  
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. 
// Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
class Car {
  static #MAX_PRICE = 50000;

static checkPrice(price)  {   
    if(price >Car.#MAX_PRICE) {
 return 'Внимание! Цена превышает допустимую.'
  }
 return 'Всё хорошо, цена в порядке.';

}
  constructor({ price }) { 
    this.price = price;
  }
}
const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// 17/19 И 19/19
// Задание
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
// Объяви класс Admin, который наследует от класса User.
// 19/19
// Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.
// Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
// Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = []; // массив хранящийся в свойстве blacklistedEmails.
  
  blacklist(email){
  this.blacklistedEmails.push(email);  // добавляет значение параметра email в массив blacklistedEmails
}
  isBlacklisted(email) {
  if (this.blacklistedEmails == email) {  // проверяет наличие email в массиве blacklistedEmails
   return true; 
  }
    return false; 
};
  constructor({ email, accessLevel }) {
    super(email);             // вызов конструктора User
    this.accessLevel = accessLevel;
  }
}
const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 


  