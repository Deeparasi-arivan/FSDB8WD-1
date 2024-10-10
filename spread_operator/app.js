// spread operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [11, 12, 13, 14, 15];
const new_numbers = [...numbers, ...numbers2];
console.log(Math.max(...new_numbers));
