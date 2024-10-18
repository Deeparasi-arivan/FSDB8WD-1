var baskets = [2, 4, 6, 8];

function appleCount(total, apple) {
  return total + apple;
}

var totalApples = baskets.reduce(appleCount, 0); // 0 is the starting point

console.log(totalApples);
