const book1 = {
    name : 'lord of the pc',
    author : 'shadi rada',
    year : 2021
};

const book2 = {
    name : 'gamer',
    author : 'nat',
    year : 2020
};

const bookUtils = {
     getFirstPublished : function(book1, book2) {
          if (book1.year > book2.year){
            bookUtils = Object.assign(book1);
          }
          else  {
            bookUtils = Object.assign(book2);
          }
        }
};

console.log(bookUtils);


