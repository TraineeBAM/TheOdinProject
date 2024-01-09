const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.favorite = favorite;
    this.rating = rating;
}

// function addBookToLibrary(){
//         myLibrary.push(`${this.Book}`)
// };

// let demo_book = new Book(
//     'The Hobbit',
//     'J.R.R Tolkein',
//     310,
//     'read');

const form = document.querySelector("#book-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("title")
    const entries = Object.fromEntries(data.entries());
    myLibrary.push(entries);
    form.reset();

    const content_cards_container = document.getElementById('content_cards_container');
    const new_card = document.createElement('div');
    new_card.classList.add('new_card');
    const { title, author, pages, rating } = entries;
    new_card.innerHTML = `
        <h1>${title}</h1>
        <h2>by ${author}</h2>
        <h3>${pages} pages</h3>
        <h3>${rating}</h3>
    `;
    content_cards_container.appendChild(new_card);

});