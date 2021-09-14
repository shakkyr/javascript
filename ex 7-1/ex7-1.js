const myBook = {
    name : 'lord of the pc',
    author : 'shadi',
    year : 2021,
    pages : 200,
    rank : '16+'
}

function books (abook) {
    return `The book: ${abook.name} was written by: ${abook.author} puplished in:${ abook.year}`;
    
}

console.log(books(myBook));