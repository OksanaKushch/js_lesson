var arr = [1,2,3,4];
var arr1;
for (i = 0; i < arr.length-1; i++) {
 for (j = i+1; j < arr.length; j++){
 if (arr[i] < arr[j]) {
   arr1 == arr[i];
   arr[i] == arr[j];
   arr[j] == arr1;
 };
 };
 };
 console.log(arr);