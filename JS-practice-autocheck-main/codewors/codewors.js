// 4 базовые матем. операции
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
// ВОПРОСЫ на собесед.
// что выведет в консоль

// const greet = 'Hello';
// greet[0] = 'b';
// console.log(greet); //'Hello'

// секундомер. считает каждую секунду с задержкой
const func = (a = 1) => {
    console.log(a);
    setTimeout(() => func(a + 1), 1000 + a * 10 ) 
}
func();

// проверить слово является ли palindrom
function palindrom(str) {
    //нижний регистр
str = str.toLowerCase();// мутирует оригинал это плохо
return str == str.split('').reverse().join('');
// // // 2 вар 
// const string =  str.toLowerCase().str.split('').reverse().join('');
// return string;
}
//  3 вар лучше cо стрелкой
const palindrom = (str) => {
str = str.toLowerCase();  // мутирует оригинал 
return str == str.split('').reverse().join('');
}
console.log(palindrom('hello'));