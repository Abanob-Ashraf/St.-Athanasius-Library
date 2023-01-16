let icon = document.querySelector(".header i")
icon.addEventListener("click",()=>{
    sessionStorage.removeItem("book_id")
    sessionStorage.removeItem("book_name")
    sessionStorage.removeItem("book_number_in_shelf")
    sessionStorage.removeItem("created_date")
    sessionStorage.removeItem("name_of_series")
    sessionStorage.removeItem("number_of_copies")
    sessionStorage.removeItem("number_of_pages")
    sessionStorage.removeItem("number_of_parts")
    sessionStorage.removeItem("publisher")
    sessionStorage.removeItem("topic")
    sessionStorage.removeItem("conclusion")
    sessionStorage.removeItem("author")
    sessionStorage.removeItem("book_code")
})

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
let book_code = sessionStorage.getItem("book_code")

let conclusion_div = document.querySelector(".conclusion .text")
let bookName = document.querySelector(".book-name span")
let Author = document.querySelector(".author span")
let Publisher = document.querySelector(".publisher span")
let Topic = document.querySelector(".topic span")
let seriesName = document.querySelector(".name-of-series span")
let numberOfCopies = document.querySelector(".number-of-copies span")
let numberOfParts = document.querySelector(".number-of-parts span")
let numberOfPages = document.querySelector(".number-of-pages span")
let bookNumberInShelf = document.querySelector(".book-number-in-shelf span")
let bookCode = document.querySelector(".book-code span")
let createdDate = document.querySelector(".created-date span")

if (conclusion.textContent == null){
    conclusion_div.textContent = "لا يوجد"
}else{
    conclusion_div.textContent = conclusion
}

bookName.textContent = book_name

if (author.textContent == null){
    Author.textContent = "لا يوجد"
}else{
    Author.textContent = author
}

if (publisher.textContent == null){
    Publisher.textContent = "لا يوجد"
}else{
    Publisher.textContent = publisher
}

Topic.textContent = topic

if (name_of_series.textContent == null){
    seriesName.textContent = "لا يوجد"
}else{
    seriesName.textContent = name_of_series
}

numberOfCopies.textContent = number_of_copies

numberOfParts.textContent = number_of_parts

numberOfPages.textContent = number_of_pages

bookNumberInShelf.textContent = book_number_in_shelf

bookCode.textContent = book_code

createdDate.textContent = created_date