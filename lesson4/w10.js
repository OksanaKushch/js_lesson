/*####Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра,
а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```*/
function reverse(arr){
    if (!Array.isArray(arr)){ 
        throw new Error('Первый параметр обязателен и может принимать только массив')}
    if (arr.length==0){ 
            throw new Error('Передан пустой массив')}
            const arr1 = [];
            let j=arr.length-1;
             for (let i = 0; i < arr.length; i++) {
                  arr1[i]=arr[j]; 
                  j--
                }
                return console.log(arr1)
             }

const arr = [3,2,1];
reverse(arr)
