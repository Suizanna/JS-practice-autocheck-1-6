/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
  };
  
  // playlist.qwe = 5;
  
  // playlist.rating = 10;
  
  // console.log(playlist);
  
  // console.log(playlist);
  // console.log(playlist.tracks);
  // console.log(playlist.name);
  // console.log(playlist.trackCount);
  
  const propertyName = 'tracks';
  
  // console.log(playlist.rating);
  // console.log(playlist['rating']);
  
  // console.log(playlist.propertyName);
  // console.log(playlist[propertyName]);
  
  /*
   * Короткая запись свойств
   */
  const username = 'Mango';
  const email = 'mango@mail.com';
  
  const signupData = {
    username,
    email,
  };
  
  // console.log(signupData);
  
  /*
   * Вычисляемые свойства
   */
  
  //  <input name="color" value="tomato" >
  
  const inputName = 'color';
  const inputValue = 'tomato';
  
  const colorPickerData = {
    [inputName]: inputValue,
  };
  
  // console.log(colorPickerData);
  
  /*
   * Ссылочный тип {} === {}
   */
  
  // console.log({ a: 1 } === { a: 1 });
  // console.log([] === []);
  
  // const a = { x: 1, y: 2 };
  // const b = a;
  
  // console.log(b === a);
  
  // a.hello = 100;
  // b.hello = 150;
  
  // console.log(a);
  // console.log(b);
  
  /*
   * Массивы и функции это объекты
   */
  
  // const a = [1, 2, 3];
  
  // a.hello = ':)';
  
  // console.log(a);
  
  // const fn = function () {
  //   console.log('hello');
  // };
  
  // fn.hello = ';)';
  
  // console.dir(fn.hello);


  /*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'Мой супер плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    changeName(newName) {
      console.log('this внутри changeName: ', this);
  
      this.name = newName;
    },
    addTrack(track) {
      this.tracks.push(track);
    },
    updateRating(newRating) {
      this.rating = newRating;
    },
    getTrackCount() {
      return this.tracks.length;
    },
  };
  
  console.log(playlist.getTrackCount());
  
  playlist.changeName('Новое имя');
  
  playlist.addTrack('новый трек 1');
  console.log(playlist.getTrackCount());
  
  playlist.addTrack('новый трек 2');
  console.log(playlist.getTrackCount());
  
  playlist.updateRating(4);
  
  console.log(playlist);


  /*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  
  console.table(friends);
  
  /*
   * Ищем друга по имени
   */
  
  const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
      // console.log(friend);
      // console.log(friend.name);
  
      if (friend.name === friendName) {
        return 'НАШЛИ!!!';
      }
    }
  
    return 'НЕ НАШЛИ :(';
  };
  
  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));
  
  /*
   * Получаем имена всех друзей
   */
  
  const getAllNames = function (allFriends) {
    const names = [];
  
    for (const friend of allFriends) {
      console.log(friend.name);
  
      names.push(friend.name);
    }
  
    return names;
  };
  
  // console.log(getAllNames(friends));
  
  /*
   * Получаем имена только друзей которые онлайн
   */
  const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend);
      console.log(friend.online);
  
      if (friend.online) {
        onlineFriends.push(friend);
      }
    }
  
    return onlineFriends;
  };
  
  // console.log(getOnlineFriends(friends));
  
  const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend.online);
  
      if (!friend.online) {
        offlineFriends.push(friend);
      }
    }
  
    return offlineFriends;
  };
  
  // console.log(getOfflineFriends(friends));
  
  // создать 2 массива онлайн и офлайн?
  // если тру - в первый, если нет - во второй
  
  const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
      online: [],
      offline: [],
    };
  
    for (const friend of allFriends) {
      if (friend.online) {
        friendsByStatus.online.push(friend);
        continue;
      }
  
      friendsByStatus.offline.push(friend);
  
      // const key = friend.online ? 'online' : 'offline';
      // friendsByStatus[key].push(friend);
    }
  
    return friendsByStatus;
  };
  
  console.log(getFriendsByStatus(friends));


  /*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  
  console.table(friends);
  
  /*
   * Ищем друга по имени
   */
  
  const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
      // console.log(friend);
      // console.log(friend.name);
  
      if (friend.name === friendName) {
        return 'НАШЛИ!!!';
      }
    }
  
    return 'НЕ НАШЛИ :(';
  };
  
  // console.log(findFriendByName(friends, 'Poly'));
  // console.log(findFriendByName(friends, 'Chelsy'));
  
  /*
   * Получаем имена всех друзей
   */
  
  const getAllNames = function (allFriends) {
    const names = [];
  
    for (const friend of allFriends) {
      console.log(friend.name);
  
      names.push(friend.name);
    }
  
    return names;
  };
  
  // console.log(getAllNames(friends));
  
  /*
   * Получаем имена только друзей которые онлайн
   */
  const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend);
      console.log(friend.online);
  
      if (friend.online) {
        onlineFriends.push(friend);
      }
    }
  
    return onlineFriends;
  };
  
  // console.log(getOnlineFriends(friends));
  
  const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend.online);
  
      if (!friend.online) {
        offlineFriends.push(friend);
      }
    }
  
    return offlineFriends;
  };
  
  // console.log(getOfflineFriends(friends));
  
  // создать 2 массива онлайн и офлайн?
  // если тру - в первый, если нет - во второй
  
  const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
      online: [],
      offline: [],
    };
  
    for (const friend of allFriends) {
      if (friend.online) {
        friendsByStatus.online.push(friend);
        continue;
      }
  
      friendsByStatus.offline.push(friend);
  
      // const key = friend.online ? 'online' : 'offline';
      // friendsByStatus[key].push(friend);
    }
  
    return friendsByStatus;
  };
  
  console.log(getFriendsByStatus(friends));


/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
  
  // console.table(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  
  // console.table(cart.getItems());
  
  cart.remove('🍎');
  // console.table(cart.getItems());
  
  // cart.clear();
  // console.table(cart.getItems());
  
  // cart.increaseQuantity('🍎');
  // console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
  // console.log('Total: ', cart.countTotalPrice());


  
// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан', 'слива','арбуз'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length -1


const lastElement = fruits[fruits.length -1]

console.log(fruits);
console.log(lastElement);
console.log(lastElementIndex);



// распыление массивов
const lastWeekTemps = [1, 2, 3];
const currentWeekTemps = [4,5,6];
const nextWeekTemps = [7, 8, 9];
// spread 
const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];
console.log(allTemps);
// concat = тоже самое
const allT = lastWeekTemps.concat(currentWeekTemps, nextWeekTemps);



// распыление объектов

const a = { x: 1, y: 2, };
const b = { x: 0, z: 3 };

// старый метод 
// const с = Object.assign({}, a, b);
// первым передаем тот объект куда распылить , а следующими передаем те объекты которые хотите туда распылить 
// const с = {} ; Object.assign(c, a, b); = таже самая запись

// модный способ 

const с = {
    ...a,
    ...b,
};



// Деструктуризация 
const playlist = {

    name: 'мой плейлист',
    rating: 5,
    tracks: [ 'track-1', 'track-2', 'track-3'],
    trackCount: 3,
    
};

const { name, rating, tracks, trackCount : numberOfTracks = 0, author = 'Слэш' } = playlist;
// если нужно присвоить значение по умолчанию то пищем значение автор = равно и значение свойства
// что бы переименовать переменную trackCount : numberOfTracks
// буквально в локальную переменную numberOfTracks положи значение trackCount из объекта playlist
// если нужно задать дефолтное значение = 0 
console.log(playlist);


// глубокая деструктуризация 

const profile = {

    nameUser: 'Mango',
    location: 'Odessa, Ukraine',
    avatar: null,
        stats : {
        likes: 5,
        followers: 12,
    }
};

const { nameUser, location, stats: { likes,followers } } = profile
// followers : myFollowers = 7
console.log(profile);
// Деструктуризация массивов 

