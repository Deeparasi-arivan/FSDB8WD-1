let employee = [
  "Manikandan Anbalagan",
  33,
  "Software Engineer",
  function () {
    return "I am a software engineer and a mentor!!!";
  },
];
console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);
console.log(employee[3]()); // method

function addition(a, b) {
  return a + b;
}

console.log(addition(10, 20));
