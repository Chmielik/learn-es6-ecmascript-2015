var color = "red";
var speed = 10;
let drive = "go";
var car = {
  color,
  speed,
  drive: () => console.log("vroom")
};

car.drive();