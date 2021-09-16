// ------------------ 1------------------------


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

// ----------------------- 2--------------------------------
const bookUtils = {

  // ----- 3-----------
  getFirstPublished: function (book1, book2) {
    if (book1.year > book2.year) 
        return book2;
    else return book1;
},

// ------------ 4-------------
setNewEdition: function (book, editionYear) {
  
  if ( book.year <= editionYear)
      return book.setNewEdition = editionYear;
  //     return book.year = `${book.year} and aupdated in ${editionYear}`;
      else book.setNewEdition = book.year;
  // else 
  //     return book.bookeditionYear =  `${book.year} updated`;
},


// --------------------------5 ---------------------------
setLanguage : function (book , lang) {
      book.language = lang;
},


// -------------------------- 6 ------------------------------
setTranslation : function (book , lang , trans){
      book.translatioin = {translator:trans, language:lang};
},

// ---------------------------- 7 ------------------------------
setPublisher : function (book, nm, locat){
      book.publisher = {name:nm, location:locat};
},

// ------------------------- 8 ----------------------------------
isSamePublisher : function (bk1, bk2) {
  this.setPublisher(bk1, 'snr', 'golan heights');
  this.setPublisher(bk2, 'snr', ' heights');
          if (bk1.publisher.name === bk2.publisher.name && bk1.publisher.location === bk2.publisher.location)
                          return `yes they is the same publisher`;
          else 
                          return `no they is not from the same publisher`;

}
}

console.log(bookUtils.isSamePublisher(book1, book2));



// bookUtils.setNewEdition(book1,2000);
// console.log(bookUtils.setNewEdition(book2, 3000));

// console.log(bookUtils.getFirstPublished(book1, book2));
// console.log(book1,book2);
// bookUtils.setLanguage(book2 , 'hebrew');
// console.log(book2);

// bookUtils.setTranslation (book1 , 'arabic' ,'shadi rada' );
// console.log(book1);
// bookUtils.setPublisher (book1, 'snr', 'golan heights' );
// console.log(book1);

