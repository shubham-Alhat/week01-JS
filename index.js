import fs from "fs";

fs.readFile("huge-file.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

console.log("This runs immediately!");

const a = 2;
const b = 6;

function callBack() {
  console.log(a + b);
}

setTimeout(callBack, 2000);

console.log("this will run immediately");
console.log("this will run immediately");
