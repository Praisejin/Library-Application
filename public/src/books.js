function findAuthorById(authors, id) {
  return authors.find((author)=>author.id === id);
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {

let bookChecked = books.filter((book)=> book.borrows.some((borrow)=>borrow.returned === false) );
  
let bookReturned= books.filter((book)=> book.borrows.every((borrow)=>borrow.returned === true) );
  
return [[...bookChecked], [...bookReturned]];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow)=> {
    let account = accounts.find((account)=> account.id ===borrow.id);
    return {...account, ...borrow};
  }).slice (0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
