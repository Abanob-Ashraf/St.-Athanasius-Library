let token = JSON.parse(sessionStorage.getItem("token"));
let my_book = document.querySelector(".browseBooks.my-books .my-book");
let my_books_Info = document.querySelector(".browseBooks.my-books .my-book-info");
let my_books_Info_back = document.querySelector(".browseBooks.my-books .my-book-info .back")
let book_name = document.querySelector(".browseBooks.my-books .my-book-info .book-name span")
let block_number = document.querySelector(".browseBooks.my-books .my-book-info .block-number span")
let shelf_number = document.querySelector(".browseBooks.my-books .my-book-info .shelf-number span")
let book_number = document.querySelector(".browseBooks.my-books .my-book-info .book-number span")
let book_created = document.querySelector(".browseBooks.my-books .my-book-info .book-created span")

// My Book Response
function response(data){
    for (let i = 0 ; i < 5; i++){
        // when Book Name Undefined Stop Proccess 
        if(data[i].book_name == undefined){
            return false
        }
        // Create Elements
        let book = document.createElement("div")
        let p = document.createElement("p")
        let span = document.createElement("span")

        // Create Elements Text
        let pText = document.createTextNode(data[i].book_name)
        let spanText = document.createTextNode(`${new Date(data[i].updated_date).getDate()}/${new Date(data[i].updated_date).getMonth()+1}/${new Date(data[i].updated_date).getFullYear()}`)

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
            block_number.textContent = data[i].block_number
            shelf_number.textContent = data[i].shelf_number
            book_number.textContent = data[i].book_number_in_shelf
            book_created.textContent = `${new Date(data[i].updated_date).getDate()}/${new Date(data[i].updated_date).getMonth()+1}/${new Date(data[i].updated_date).getFullYear()}`
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
    fetch('http://localhost:3000/library/books/user/myBooks',
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