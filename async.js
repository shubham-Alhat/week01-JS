function callBack() {
  console.log("hello world");
}

setTimeout(callBack, 1000);
setTimeout(callBack, 1000);
setTimeout(callBack, 1000);
setTimeout(callBack, 1000);

let x = 0;
for (let i = 0; i < 400000000; i++) {
  x = x + i;
}

console.log("x - ", x);
