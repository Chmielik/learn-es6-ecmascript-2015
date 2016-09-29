let message = "hello";

{
  let message = "hiho";
  console.log(message);
}

console.log(message);

let fs = [];
for (let i = 0; i < 10; i++) {
  fs.push(() => console.log(i))
}

fs.forEach((f) => f())