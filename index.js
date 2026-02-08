import fs from "fs";

fs.readFile("huge-file.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});

console.log("This runs immediately!");
