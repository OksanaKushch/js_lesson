function f1() {
	console.log("f1", arguments);
}

function f2(...rest) {
	console.log("f2", rest);
}

function f3(a, b, c) {
	console.log("f3", a, b, c);
}
function f2(a, b, ...rest) {
    console.log("f2", a, b, rest);
}

f2(1, 2, 3, 4, 5)

f1(1, 2, 3);
f2(1, 2, 3);
f3(1, 2, 3);
