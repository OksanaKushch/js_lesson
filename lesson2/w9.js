/*Задача 9
Отсортировать массив по убыванию.
```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
``` */
var arr = [1,2,3,4,5,6];
var arr1;
for (let i = 0; i < arr.length-1; i++) {
 for (let j = i+1; j < arr.length; j++){
<<<<<<< HEAD
 if (arr[i] > arr[j]) {
=======
 if (arr[i] < arr[j]) {
>>>>>>> db2fad07e62e8e1d9f6db6d98c26f83c6a058e4e
   arr1 == arr[i];
   arr[i] == arr[j];
   arr[j] == arr1;
 };
 };
 };
 console.log(arr);
