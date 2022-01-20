/*Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
а затем возвращает день недели на русском языке. 
Данная функция должна обязательно содержать проверку входного параметра,
потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```*/
function f(num) {
    let result;
    if (typeof num === 'number' && num > 0 && num < 8){
         if (num === 1) {result = "Понедельник"} ;
         if (num === 2) {result = "Вторник"};
         if (num === 3) {result = "Среда"};
         if (num === 4) {result = "Четверг"};
         if (num === 5) {result = "Пятница"};
         if (num === 6) {result = "Суббота"};
         if (num === 7) {result = "Воскресенье"};
    } else {
        if (typeof num != 'number'){throw new Error('Error: parameter type is not a Number')
        }  else {
            throw new Error('Error: parameter should be in the range of 1 to 7')
        }
    }
    return result;
};


