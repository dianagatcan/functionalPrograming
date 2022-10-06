const numberArr = [4, 90, 56, 78, 15, 23];

//.map() function
Array.prototype.mapFunc = function (callbackFunc) {
  return this.reduce((acc, num, i) => {
    acc.push(callbackFunc(num, i));
    return acc;
  }, []);
};

numberArr.mapFunc((num, i) => num + i);

// .filter() function
Array.prototype.filterFunc = function (callbackFunc) {
  return this.reduce((acc, num, i) => {
    if (callbackFunc(num, i)) acc.push(num);
    return acc;
  }, []);
};

numberArr.filterFunc((num) => num > 70);

//.every() functio/.every() function
Array.prototype.everyFunc = function (callbackFunc) {
  const reduced = this.reduce((acc, num, i) => {
    if (callbackFunc(num, i)) {
      acc.push(num);
    }
    return acc;
  }, []);
  return reduced.length === this.length;
};

numberArr.everyFunc((num) => num < 100);

//.some() function
Array.prototype.someFunc = function (callbackFunc) {
  const reduced = this.reduce((acc, num, i) => {
    if (callbackFunc(num, i)) acc.push(num);
    return acc;
  }, []);
  return reduced.length > 0;
};

numberArr.someFunc((num) => num > 30);

//.find() function
Array.prototype.findFunc = function (callbackFunc) {
  return this.reduce((acc, num, i) => {
    if (callbackFunc(num, i)) acc.push(num);
    return acc;
  }, [])[0];
};

numberArr.findFunc((num) => num > 10);

//.indexOf() function
Array.prototype.indexOfFunc = function (callbackFunc) {
  return this.reduce((acc, num, i) => {
    if (callbackFunc(num, i)) acc.push(i);
    return acc;
  }, [])[0];
};

numberArr.indexOfFunc((num) => num > 10);
