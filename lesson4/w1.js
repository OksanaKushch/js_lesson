/*####Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```*/

function forEach(arr, f){
    if (!Array.isArray(arr)){ 
        throw new Error('Первый параметр обязателен и может принимать только массив')}
        if (typeof f != "function"){ 
            throw new Error('Второй параметр обязателен и может принимать только функцию')}
            for(let i=0; i < arr.length; i++ ){
                f(arr[i], i, arr)
            };
            return arr;
};
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {console.log(item + "["+ i + "]")});

