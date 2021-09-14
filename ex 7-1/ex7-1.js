let myBook = {
    name : 'lord of the pc',
    author : 'shadi',
    year : 2021,
    pages : 200,
    rank : '16+'
}

function books (abook) {
    let whatsAbout = ( 'The book: ${abook.name} was written by: ${abook.author}puplished in:${ abook.year}');
    return whatsAbout;
}

console.log(books(myBook));