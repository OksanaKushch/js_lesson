/*
Задача 3
Перепишите код, заменив оператор `switch` на оператор `if..else`:
```js
switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;
default:
console.log( 'unknown' );
}
*/
if (val = a) {
    console.log( 'a' );
    break;
    }
    else {
    if(val = b){
    console.log( 'others' );
    }
    else {
    if(val = c){
    console.log( 'others' );
    }
    else {
    if(val = d){
    console.log( 'others' );
    }
    else {
    if(val = e){
    console.log( 'others' );
    break;
    }
    else {
    console.log( 'unknown' );
    }
    }
    }
    }
    }
    