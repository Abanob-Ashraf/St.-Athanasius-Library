let book_information = document.querySelector(".book-info")
let edit_book = document.querySelector(".edit-book")
let edit = document.querySelector(".edit")
let book_name = sessionStorage.getItem("book_name")
let book_code = sessionStorage.getItem("book_code")
let book_number_in_shelf = sessionStorage.getItem("book_number_in_shelf")
let created_date = sessionStorage.getItem("created_date")
let name_of_series = sessionStorage.getItem("name_of_series")
let number_of_copies = sessionStorage.getItem("number_of_copies")
let number_of_pages = sessionStorage.getItem("number_of_pages")
let number_of_parts = sessionStorage.getItem("number_of_parts")
let publisher = sessionStorage.getItem("publisher")
let topic = sessionStorage.getItem("topic")
let conclusion = sessionStorage.getItem("conclusion")
let author = sessionStorage.getItem("author")

function book_info(){
    // Book Name
    let bookName = document.querySelector(".book-info .book-name span")
    bookName.textContent = book_name

    // Book Auther
    let Author = document.querySelector(".book-info .author span")
    Author.textContent = author

    // Book Publisher
    let Publisher = document.querySelector(".book-info .publisher span")
    Publisher.textContent = publisher

    // Book Topic
    let Topic = document.querySelector(".book-info .topic span")
    Topic.textContent = topic

    // Book Series
    let seriesName = document.querySelector(".book-info .name-of-series span")
    seriesName.textContent = name_of_series

    // Book Copies
    let numberOfCopies = document.querySelector(".book-info .number-of-copies span")
    numberOfCopies.textContent = number_of_copies

    // Book Parts
    let numberOfParts = document.querySelector(".book-info .number-of-parts span")
    numberOfParts.textContent = number_of_parts

    // Book Pages
    let numberOfPages = document.querySelector(".book-info .number-of-pages span")
    numberOfPages.textContent = number_of_pages

    // Book Shelf
    let bookNumberInShelf = document.querySelector(".book-info .book-number-in-shelf span")
    bookNumberInShelf.textContent = book_number_in_shelf

    // Book Code
    let bookCode = document.querySelector(".book-info .book-code span")
    bookCode.textContent = book_code

    // Book Create Date
    let createdDate = document.querySelector(".book-info .created-date span")
    createdDate.textContent = created_date

    // Book Conclusion
    let Conclusion = document.querySelector(".book-info .conclusion textarea")
    Conclusion.setAttribute("placeholder",conclusion)

    // Redirct To Edit Book From Book Information
    edit.addEventListener("click",()=>{
        book_information.style.display = "none"
        edit_book.style.display = "block"
    })
}
book_info()