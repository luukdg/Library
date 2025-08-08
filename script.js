// Book library
const myLibrary = [
    {
        title: "Lord of the Rings - The Fellowship of the Ring",
        author: "J.R.R Tolkien",
        pages: 423,
        read: true,
        ID: self.crypto.randomUUID()
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.ID = self.crypto.randomUUID();
    }
}

// This function adds a new book to the library array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// Loops over array and displays each book
function loopOverLibrary() {
    for (const book of myLibrary) {
        if (!document.getElementById(`book${book.ID}`)) {
            cloneBookCard(book.title, book.author, book.pages, book.read, book.ID);
        }
}};

// Cloning a book card and changing the content
function cloneBookCard(title, author, pages, read, ID) {
    const newDiv = document.querySelector("#book1");
    const clone = newDiv.cloneNode(true);

    clone.id = `book${ID}`;
    clone.classList.remove("book-card-hidden");
    clone.classList.add("book-card");

    clone.querySelector("#book-title").textContent = title;
    clone.querySelector("#book-author").textContent = author;
    clone.querySelector("#book-pages").textContent = pages; 
    clone.querySelector("#book-read").textContent = read ? "Read" : "Not read";

    // Inject into DOM
    newDiv.after(clone);
}

// Query selectors
const popUpForm = document.querySelector(".form-popup");
const popUpButton = document.querySelector(".add-book-btn");
const closeButton = document.querySelector(".close-btn");
const submitBook = document.querySelector(".submit-book")
const libraryContainer = document.querySelector(".container");
const overlay = document.getElementById('overlay');

// Function to open the popup form
function openPopup() {
    overlay.classList.add('active');
    popUpForm.classList.add("open-popup");
}

// Function to close the popup form
function closePopup() {
    popUpForm.classList.remove("open-popup");
    overlay.classList.remove('active');
}

// Remove form field answers
function resetFormAnswer() {
    document.querySelector(".form-popup").reset()
}

// BUTTON "Delete" -> Delete div
libraryContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const bookCard = e.target.closest(".book-card");
    if (bookCard) bookCard.remove();
    }
});

// BUTTON "Delete" -> Remove book from library
libraryContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const bookCard = e.target.closest(".book-card");
    if (bookCard) {
        const id = bookCard.id;
        removeBookByID(id);
        console.log(myLibrary);
    };
    }
})

// Remove book from library by ID
function removeBookByID (id) {
    myLibrary.splice(myLibrary.findIndex(a => a.id === id), 1)
} 

// BUTTON "Add Book" -> Open/Close popup
popUpButton.addEventListener("click", () => {
    if (!popUpForm.classList.contains("open-popup"))
        openPopup();
    else {
        closePopup();
    }
});

// BUTTON "Close" -> Close popup
closeButton.addEventListener("click", () => {
    closePopup();
});

// BUTTON "Submit" -> add book to library
submitBook.addEventListener("click", (e) => {
    // Prevent submit
    e.preventDefault();

    // Selecting all the values
    const title = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const pages = parseInt(document.querySelector("#pages").value);
    const read = document.querySelector("#read").checked;

    if (title.length < 1 || author.length < 1 || pages < 1 || isNaN(pages)) {
        alert("Fill in every form to submit.")
    } else {
        const formData = new Book(title, author, pages, read);
        addBookToLibrary(formData);
        loopOverLibrary();
        closePopup();
        resetFormAnswer();
        console.log(myLibrary);
    }   
});

loopOverLibrary();
