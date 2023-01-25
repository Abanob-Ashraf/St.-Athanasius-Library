let token = JSON.parse(sessionStorage.getItem("token"));
let my_book = document.querySelector(".browseBooks.my-books .my-book");
let my_books_Info = document.querySelector(".browseBooks.my-books .my-book-info");
let my_books_Info_back = document.querySelector(".browseBooks.my-books .my-book-info .back")
let book_name = document.querySelector(".browseBooks.my-books .my-book-info .book-name span")
let book_author = document.querySelector(".browseBooks.my-books .my-book-info .book-author span")
let book_publisher = document.querySelector(".browseBooks.my-books .my-book-info .publisher span")
let book_code = document.querySelector(".browseBooks.my-books .my-book-info .book-code span")
let book_copies = document.querySelector(".browseBooks.my-books .my-book-info .book-copies span")
let book_created = document.querySelector(".browseBooks.my-books .my-book-info .book-created span")

// My Book Response
function response(data){
    for (let i = 0 ; i <= 5; i++){
        // Create Elements
        let book = document.createElement("div")
        let p = document.createElement("p")
        let span = document.createElement("span")

        // Create Elements Text
        let pText = document.createTextNode(data[i].book_name)
        let spanText = document.createTextNode(data[i].created_date)

        // Create Elements Class
        book.className = "book"

        // Append Elements
        my_book.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        // Show Current Book Information On Click The Book
        book.addEventListener("click",()=>{
            my_book.style.display = "none"
            my_books_Info.style.display = "block"
            book_name.textContent = data[i].book_name
            book_author.textContent = data[i].author == null ? book_author.textContent = `لا يوجد` :  data[i].author
            book_publisher.textContent = data[i].publisher == null ? book_publisher.textContent = `لا يوجد` : data[i].publisher
            book_code.textContent = data[i].book_code
            book_copies.textContent = data[i].number_of_copies
            book_created.textContent = data[i].created_date
        })

        // Redirct From My Book Information To My Book
        my_books_Info_back.addEventListener("click",()=>{
            my_book.style.display = "block"
            my_books_Info.style.display = "none"
        })
    }
}

// my_books Fetch Function (To Get Information)
function my_books(){
    fetch('http://localhost:3000/library/books/latestBooks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        response(res)
    })
    .catch(e => console.log(e))
}
my_books()