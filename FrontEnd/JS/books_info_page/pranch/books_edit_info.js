let token = JSON.parse(sessionStorage.getItem("token"));
let book_id = sessionStorage.getItem("book_id")
let book_name = sessionStorage.getItem("book_name")
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
export function bookEditInfo(){
    // Book Name
    let bookName_e = document.querySelector(".edit-book .book-name .input")
    bookName_e.setAttribute("placeholder",book_name)

    // Book Auther
    let Author_e = document.querySelector(".edit-book .author .input")
    Author_e.setAttribute("placeholder",author)

    // Book Publisher
    let Publisher_e = document.querySelector(".edit-book .publisher .input")
    Publisher_e.setAttribute("placeholder",publisher)

    // Book Topic
    let Topic_e = document.querySelector(".edit-book .topic .input")
    Topic_e.setAttribute("placeholder",topic)

    // Book Series
    let seriesName_e = document.querySelector(".edit-book .name-of-series .input")
    seriesName_e.setAttribute("placeholder",name_of_series)

    // Book Copies
    let numberOfCopies_e = document.querySelector(".edit-book .number-of-copies .input")
    numberOfCopies_e.setAttribute("placeholder",number_of_copies)

    // Book Parts
    let numberOfParts_e = document.querySelector(".edit-book .number-of-parts .input")
    numberOfParts_e.setAttribute("placeholder",number_of_parts)

    // Book Pages
    let numberOfPages_e = document.querySelector(".edit-book .number-of-pages .input")
    numberOfPages_e.setAttribute("placeholder",number_of_pages)

    // Book Shelf
    let bookNumberInShelf_e = document.querySelector(".edit-book .book-number-in-shelf .input")
    bookNumberInShelf_e.setAttribute("placeholder",book_number_in_shelf)

    // Book Conclusion
    let Conclusion_e = document.querySelector(".edit-book .conclusion textarea")
    Conclusion_e.setAttribute("placeholder",conclusion)
    
    let book_info = document.querySelector(".book-info")
    let edit_book = document.querySelector(".edit-book")
    let back = document.querySelector(".back")
    back.addEventListener("click",()=>{
        book_info.style.display = "block"
        edit_book.style.display = "none"
    })
}
bookEditInfo()