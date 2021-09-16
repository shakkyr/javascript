const book1 = {
  name: "lord of the pc",
  author: "shadi rada",
  year: 2021,
};

const book2 = {
  name: "gamer",
  author: "nat",
  year: 2020,
};

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    let book = 0;
    if (book1.year > book2.year) 
        book = book2.year;
    else book = book1.year;
      return book;
}
};

bookUtils.getFirstPublished(2300, 2200);
console.log(bookUtils);
