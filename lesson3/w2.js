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
function f(...rest) {
	var arr=rest;
    var n=arr.length;
    var sum = 0;
           for(var i=0; i < n; i++){
               if(typeof arr[i] === 'number'){
                   sum= sum + arr[i]
            } else {throw new Error('Error: all parameters type should be a Number')
            }
    }console.log(sum);
}

f(1,2,3);
f(1,1,1,1,1,1,1,1);
f(1,2,'s',4);
