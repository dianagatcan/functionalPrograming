const arr = [2, 1, -4, 5, 6, 7, 2, 3, 4];

const sumK = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (k == arr[i] + arr[j]) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(sumK(arr, 11));
