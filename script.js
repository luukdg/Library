const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.ID = self.crypto.randomUUID() 
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// let mockingbird = new Book("To kill a mockingbird", "Harper Lee", 356, "not read");
// let harryPotter = new Book("Harry Potter", "J.K. Rowling", 654, "read");

// Query selectors
const popUpForm = document.querySelector(".form-popup");
const popUpButton = document.querySelector(".add-book-btn");
const closeButton = document.querySelector(".close-btn");
const submitBook = document.querySelector(".submit-book")

// BUTTON -> Add Book
popUpButton.addEventListener("click", () => {
    
    if (!popUpForm.classList.contains("open-popup"))
        popUpForm.classList.add("open-popup");
    else {
        popUpForm.classList.remove("open-popup");
    }

    // if (popUpForm.style.visibility === "visible")
    //     popUpForm.style.visibility = "hidden";
    // else {
    //     popUpForm.style.visibility = "visible";
    // }
});

// BUTTON -> Close
closeButton.addEventListener("click", () => {
    popUpForm.style.visibility = "hidden";
});

// BUTTON -> Add Book to table
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
    
        console.log(myLibrary);
    }   
});
