const arr = [4, 5, 3, 6, 7, 1, 2, 9, 8];

const sortArr = function (arr) {
  let even = arr.filter((elem) => elem % 2 === 0).sort((a, b) => a - b);
  let odd = arr.filter((elem) => elem % 2 !== 0).sort((a, b) => b - a);
  return even.concat(odd);
};

console.log(sortArr(arr));
