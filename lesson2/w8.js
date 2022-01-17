var arr = [1,2,3,4];
var sum = 0;

for (i = 0; i < arr.length; i++) {
if (i % 2 == 0){
 if (arr[i] > 3){
sum = sum + arr[i];
};
};
};
console.log(sum);