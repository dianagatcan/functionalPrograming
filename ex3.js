const authorObj = {
  name: "Haruki Murakami",
  age: 73,
  books: [
    {
      title: "IQ84",
      publicationYear: 2009,
      genre: "alternate history",
    },
    {
      title: "Norwegian Wood",
      publicationYear: 1987,
      genre: "literary fiction",
    },
    {
      title: "Kafka on the shore",
      publicationYear: 2002,
      genre: "magical realism",
    },
  ],
};

const deepClone = (input) => {
  if (typeof input !== "object") {
    return input;
  }
  const copy = Array.isArray(input) ? [] : {};
  for (key in input) {
    const value = input[key];
    copy[key] = deepClone(value);
  }
  return copy;
};

deepClone(authorObj);
