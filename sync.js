let x = 0;
function callBack() {
  x = x + 1;
  console.log(x);
}

setInterval(callBack, 1000);

console.log("will this print?? -> yes, this will print first");

let num = 0;
for (let i = 0; i < 400000000; i++) {
  num = num + i;
}

console.log(num); // this will print first and then our timer will clg even it started earlier because it written that it should not disturb the cpu task if going on.
