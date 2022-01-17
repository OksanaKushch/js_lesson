/*Задача 7
Написать код который посчитает сумму всех парных элементов в масиве.
```js
var arr = [1,2,3,4];
``` */
var arr = [1,2,3,4];
var sum = 0;

for (i = 0; i < arr.length; i++) {
if (i % 2 == 0){
sum = sum + arr[i];
};
};
console.log(sum);