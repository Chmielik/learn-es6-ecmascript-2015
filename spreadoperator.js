let test = [1, 2, 3, 4, 5];

let test2 = [1, 2, 3, 4, 5];

function addThreeThings(a, b, c) {
  let result = a + b + c;
  return result;
}

console.log(addThreeThings(...test));