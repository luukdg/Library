// Library
const myLibrary = [];

// This is a constructor function to create a new book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.ID = self.crypto.randomUUID() 
}

// This function adds a new book to the library array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// Query selectors
const popUpForm = document.querySelector(".form-popup");
const popUpButton = document.querySelector(".add-book-btn");
const closeButton = document.querySelector(".close-btn");
const submitBook = document.querySelector(".submit-book")

// Function to open the popup form
function openPopup() {
    popUpForm.classList.add("open-popup");
}

// Function to close the popup form
function closePopup() {
    popUpForm.classList.remove("open-popup");
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
    }   
});
