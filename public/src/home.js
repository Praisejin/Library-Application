const getTotalBooksCount = (books)=> {
  return books.length;
}



const getTotalAccountsCount = (accounts)=> {
  return accounts.length;
}



function getBooksBorrowedCount(books) {
  
  let bookChecked = books.filter((book)=> book.borrows.filter((record)=>record.returned === false).length > 0);
  
  return bookChecked.length;
}





function getMostCommonGenres(books) {
  let result = [];
   books.forEach((book) => {
let genreExists = result.find((genre) => genre.name === book.genre);
if(!genreExists) {
  result.push({ name: book.genre, count: 1 }); }
     else { genreExists.count += 1; } })
  return result.sort((a,b) => b.count - a.count).slice(0, 5);
}
  




function getMostPopularBooks(books) {
  return books.map((book)=> {
    return {name:book.title, count:book.borrows.length};
  }).sort((a,b)=> (a.count < b.count ? 1 :-1)). slice (0, 5);
}






function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author)=> { 
  let theAuthor = {
    name: `${author.name.first} ${author.name.last}`, count:0
  };
  
    books.forEach((book)=> {
      if (book.authorId === author.id){
        theAuthor.count += book.borrows.length;
      }
    });
    result.push(theAuthor);
  
  });
  
   return sortAuthorsByPopularity(result).slice(0,5);
}

function sortAuthorsByPopularity(authors) {
    return authors.sort((a,b)=> b.count - a.count);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
