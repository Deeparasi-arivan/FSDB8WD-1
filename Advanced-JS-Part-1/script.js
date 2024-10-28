function task(message) {
  // emulate time consuming task
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}
console.log("Start script...");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
task("Call an API");
// });
console.log("Done!");
