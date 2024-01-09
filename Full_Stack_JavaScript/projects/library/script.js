const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// function addBookToLibrary(){
//         myLibrary.push(`${this.Book}`)
// };

let demo_book = new Book(
    'The Hobbit',
    'J.R.R Tolkein',
    310,
    'read');

