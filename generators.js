function* greet(){
  console.log(`You called 'next()'`);
  yield "hello";
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);



function* greet(){
  let friendly = yield "How";
  friendly = yield friendly + "are";
  yield friendly + "you?";
}
