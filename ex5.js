const arr = [2, 1, -4, 5, 6, 7, 2, 3, 4];

const sumK = function (arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (k == arr[i] + arr[j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

console.log(sumK(arr, 11));
