/*Задача 10
Отсортировать массив по возрастанию.
```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
``` */
var arr = [6,5,4,3,2,1];
var arr1;
for (let i = 0; i < arr.length-1; i++) {
 for (let j = i+1; j < arr.length; j++){
 if (arr[i] > arr[j]) {
   arr1 == arr[i];
   arr[i] == arr[j];
   arr[j] == arr1;
 };
 };
 };
 console.log(arr);
