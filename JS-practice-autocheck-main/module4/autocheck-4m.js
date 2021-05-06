// 4/10 4 модуль
// Задание
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, 
// чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,метод order должен возвращать результат вызова колбэка onError, 
// передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//  метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.


const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName,onSuccess,onError) {
    for(let pizza of this.pizzas) {
      if(pizzaName === pizza) {
      return onSuccess(pizzaName) };
    }
      return onError ( `В ассортименте нет пиццы с названием ${pizzaName}.`)
  },
  };
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);
  
// 5/10 ключевое слово this. Контекст вызова функции
  const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `В ассортименте нет пиццы с названием «${pizzaName}».`;
      }
      return `Заказ принят, готовим пиццу «${pizzaName}».`;
    },
  };

// 6/10Аккаунт пользователя
  const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Пиши код ниже этой строки
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Пиши код выше этой строки
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
  


  // 7/10 Метод call
  const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];
  // Пиши код ниже этой строки
  function composeMessage(position) {
     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position +1}-й в очереди.`;
  }

  const messages = orders.map((order, index) => composeMessage.call(order, index));
  console.log(composeMessage.call(orders));

  // 8/10 Метод apply
  const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];
  // Пиши код ниже этой строки
  function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
  }
  const messages = orders.map((order, index) =>
    composeMessage.apply(order, [index + 1])
  );

  // 9/10 Метод bind
  const pizzaPalace = {
    company: 'Pizza Palace',
  };
  const burgerShack = {
    company: 'Burger Shack',
  };

  function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
  }

  const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
  const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
  
  const burgerShackComposer = composeMessage.bind(burgerShack);
  const burgerShackMessage = burgerShackComposer('Поли');

  // 10/10 Метод bind и методы объекта
  // Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. 
  // Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service.
  // Сбор статистики симулируется логированием строки
  const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
      this.mailingList.push(email);
      return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
      this.mailingList = this.mailingList.filter((e) => e !== email);
      return `Почта ${email} удалена из рассылки.`;
    },
  };
  function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
  }
  const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
  console.log(firstInvoke);
  // Почта kiwi@mail.uk добавлена в рассылку.
  
  console.log(service.mailingList);
  /* ['mango@mail.com', 
      'poly@hotmail.de', 
      'ajax@jmail.net', 
      'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
  console.log(secondInvoke);
  // Почта poly@hotmail.de удалена из рассылки.
  
  console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']