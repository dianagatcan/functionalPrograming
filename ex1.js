const books = [
  { title: "Gone with the wind", pages: 1037 },
  { title: "Animal farm", pages: 112 },
  { title: "The name of the rose", pages: 512 },
];

const sortBooks = function (arr, property, asc) {
  let result = arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  return asc ? result : result.reverse();
};

sortBooks(books, "title", true);
