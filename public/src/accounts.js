const findAccountById= (accounts, id)=> {
  return accounts.find((account)=> account.id === id);

}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB)=>{
  const lastNameA = accountA.name.last;
  const lastNameB = accountB.name.last;
  return lastNameA.toLowerCase()<lastNameB.toLowerCase() ? -1 :1; });
}

function getTotalNumberOfBorrows(account, books) { 
  return books.reduce((previous, current) => {
    if (!previous) {
      return current;
    }
    
    previous.borrows.forEach(borrow => {
      if (!borrow.returned && borrow.id === account.id) {
        current.borrows.push(borrow);
      }
    })
    
    return current;
  }).borrows.length
}



function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let booksPossessedByAccount = [];
  
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.id === accountId && !borrow.returned) {
        
        let author;
        authors.forEach(a => {
          if(a.id === book.authorId) {
            author = a
          }
       });

        booksPossessedByAccount.push({
          id: book.id,
          title: book.title,
          genre: book.genre,
          authorId: book.authorId,
          author: author,
          borrows: borrow
        })
      }
    });
  });
  
  return booksPossessedByAccount;
  
  
/*
[]object { id, title, genre, authorId, author (object), borrows ([]object)}
*/
}

/*
Book {
 id, title, genre, authorId, borrows ([]object)
}

Author {
 id, name (object)
}

Account {
 id, name (object)
}
*/



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
