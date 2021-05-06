// // Пример с конспекта
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// 
// Пример с видео-урока Репеты 6 модуль 11 занятие. js-22 группа
// Задача 
// const numbers2 = [5, 10, 15, 20, 25];
// // 1 вариант с изменением массива с помощью index, array
// numbers2.forEach(function(number, index, array) { // function это callback финкция без => стрелки
//     console.log('number:', number);

//     array[index] = 20; // меняет массив. Но  в основном мы не хотим менять ничего.
// });
// console.log(numbers2);

// // Задача бeз изменения массива
// const numbers3 = [5, 10, 15, 20, 25];
// // 2 вариант 
// numbers3.forEach(function(number) { 
//     console.log('number:', number);
// });
// console.log(numbers3);

// // Задача
const numbers = [5, 10, 15, 20, 25];

const doubedNums = numbers.map(function (number) {
    console.log(number);
    return number * 3;
});
console.log('doubledNums', doubedNums); //function вернула новый массив number * 3
console.log('numbers', numbers); // старый массив

//
const  players  =  [
    {  id : 'player-1' ,  name : 'Mango' ,  timePlayed : 310 ,  online : false  } ,
    {  id : 'player-2' ,  name : 'Poly' ,  timePlayed : 470 ,  online : true  } ,
    {  id : 'player-3' ,  name : 'Aiwi' ,  timePlayed : 230 ,  online : true  } ,
    {  id : 'player-4' ,  name : 'Ajax' ,  timePlayed : 150 ,  online : false  } ,
    {  id : 'player-5' ,  name : 'Chelsey' ,  timePlayed : 80 ,  online : true  } ,
];
// // Получаем массив всех играков  // явный возврат 1 вар
const playerNames = players.map(player => { //доступ к каждому player. фун-ция колбек
    // console.log(player);
    return player.name;
});
console.log(' playerNames ',  playerNames );
console.log('players',  players); // оригинал массив
// 2вар
// // неявный возврат
// const playerNames = players.map(player => player.name);
// console.log(' playerNames ',  playerNames );

// const  playerIds = players.map(player => player.id);
// console.log('playerIds',  playerIds);



// // 1 вар
// const res = players.map(({name, online}) => {
//     return {
//      name, 
//     online,
//     }
// }
// );
// console.log('res',  res);

// 2 вар короткая запись
const res = players.map(({name, online}) => ({
    name, 
    online,
})

);
console.log('res',  res);
