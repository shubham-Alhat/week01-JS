# Javascript week 01

### compiled vs interpreted languages

- c++,Rust and go are compiled languages and python and JS are interpreted languages

Javascript is simgle threaded language

## Async and sync JS

synchronous eg-

```javascript
import fs from "fs";

const data = fs.readFileSync("huge-file.txt");

console.log(data);
console.log("waits..");
```

```bash
PS C:\Users\SWAYAM\Desktop\week01-JS> node index.js
<Buffer 73 68 75 62 68 61 6d 20 61 6c 68 61 74 0d 0a 0d 0a 4e 6f 2c 20 79 6f 75 27 72 65 20 6d 69 78 69 6e 67 20 75 70 20 2a 2a 66 72 6f 6e 74 65 6e 64 20 63 ... 5521 more bytes>
waits..
PS C:\Users\SWAYAM\Desktop\week01-JS>
```

![alt text](image.png)

---

Async - eg

```javascript
import fs from "fs";

fs.readFile("huge-file.txt", "utf-8", (err, data) => {
  console.log(data); // Runs later when file is ready
});

console.log("This runs immediately!"); // Doesn't wait!
```

Output would be:

```
This runs immediately!
[... then file contents when ready ...]
```

```bash
[nodemon] starting `node index.js`
This runs immediately!
<Buffer 73 68 75 62 68 61 6d 20 61 6c 68 61 74 0d 0a 0d 0a 4e 6f 2c 20 79 6f 75 27 72 65 20 6d 69 78 69 6e 67 20 75 70 20 2a 2a 66 72 6f 6e 74 65 6e 64 20 63 ... 5521 more bytes>
[nodemon] clean exit - waiting for changes before restart
```

---

setInterval async eg

```javascript
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
```

output -

```bash
PS C:\Users\SWAYAM\Desktop\week01-JS> node sync.js
will this print?? -> yes, this will print first
79999999667108900
1
2
3
4
PS C:\Users\SWAYAM\Desktop\week01-JS>
```

---

**The IMP note**
_Callstack is thing which actually store the events or function needs to execute until JS thread becomes free. till then this callStack thing holds those tasks/function_

_see this example and its clear eg._

```javascript
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
```

_Output_

```bash
PS C:\Users\SWAYAM\Desktop\week01-JS> node async.js
x -  79999999667108900
hello world
hello world
hello world
hello world
PS C:\Users\SWAYAM\Desktop\week01-JS>
```

**Here is what happened - control flow will go to first setTimeOut, store it in callstack queue, same for 2nd and 3rd setTimeOut(because 1 seconds waiting), but while this happen, JS thread (JS is single threaded) executes the big heavy `for loop`. In this situation the thread is busy doing `for loop` and when setTimeout have to say or tell that i am done 1 seconds please call that `callBack function`, the thread says no, until the callStack store those `callback function`, after the thread gets freee, then callBacks are called.**

---

### This is above is Async JS Architecture

---
