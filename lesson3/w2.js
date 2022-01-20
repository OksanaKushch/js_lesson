/*Задача 2
Напишите функцию `f` которая возвращает сумму всех параметров.
Количество параметров может быть любым.
Данная функция должна обязательно содержать проверку входных параметров,
потому что принимать она может только числа.
```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```*/
function f(num) {
    let result;
    if (typeof num === 'number'){
        result = num * num * num;
    } else {
        throw new Error('Error: parameter type is not a Number')
    }
    return result;
};