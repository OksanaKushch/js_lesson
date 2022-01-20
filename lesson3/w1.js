/*Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром.
Данная функция должна обязательно содержать проверку входного параметра, 
потому что принимать она может только число.
```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
``` */

function f(num) {
    let result;
    if (typeof num === 'number'){
        result = num * num * num;
    } else {
        throw new Error('Error: parameter type is not a Number')
    }
    return result;
};
