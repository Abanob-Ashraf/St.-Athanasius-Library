let token = JSON.parse(sessionStorage.getItem("token"));
let shelfID = document.getElementsByName("shelf_num")[0]
let blockID = document.getElementsByName("block_num_two")[0]
let shelf_book = document.querySelector(".browseBooks.shelf-books .shelf-book")
let shelf_book_scroll = document.querySelector(".browseBooks.shelf-books .shelf-book .scroll")
let shelf_book_info = document.querySelector(".browseBooks.shelf-books .shelf-book-info");
let shelf_book_info_back = document.querySelector(".browseBooks.shelf-books .shelf-book-info .back")
let book_name = document.querySelector(".browseBooks.shelf-books .shelf-book-info .book-name span")
let book_author = document.querySelector(".browseBooks.shelf-books .shelf-book-info .book-author span")
let book_publisher = document.querySelector(".browseBooks.shelf-books .shelf-book-info .publisher span")
let book_code = document.querySelector(".browseBooks.shelf-books .shelf-book-info .book-code span")
let book_copies = document.querySelector(".browseBooks.shelf-books .shelf-book-info .book-copies span")
let book_created = document.querySelector(".browseBooks.shelf-books .shelf-book-info .book-created span")

// Books In Shelf In BLock Response
function response(data){
    for (let i = 0 ; i <= data.length ; i++){
        // when Book Name Undefined Stop Proccess 
        if(data[i].book_name == undefined || data == null){
            shelf_book_scroll.style.display = "none"
            return false
        }
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
        shelf_book_scroll.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        // Show Current Book Information On Click The Book
        book.addEventListener("click",()=>{
            shelf_book.style.display = "none"
            shelf_book_info.style.display = "block"
            book_name.textContent = data[i].book_name
            book_author.textContent = data[i].author == null ? book_author.textContent = `لا يوجد` :  data[i].author
            book_publisher.textContent = data[i].publisher == null ? book_publisher.textContent = `لا يوجد` : data[i].publisher
            book_code.textContent = data[i].book_code
            book_copies.textContent = data[i].number_of_copies
            book_created.textContent = data[i].created_date
        })

        // Redirct From Shelf Book Information To Shelf Book
        shelf_book_info_back.addEventListener("click",()=>{
            shelf_book.style.display = "block"
            shelf_book_info.style.display = "none"
        })
    }
}

// books_in_shelf_in_bLock Fetch Function (To Get Information)
function books_in_shelf_in_bLock(){
    // When Input Shelf Number Show Books In current Shelf
    shelfID.addEventListener("input",()=>{
        let shelf_book_scroll = document.querySelector(".browseBooks.shelf-books .shelf-book .scroll")
        let shelf_book_scroll_div = document.querySelectorAll(".browseBooks.shelf-books .shelf-book .scroll div")
        shelf_book_scroll.style.display = "block"
        if (shelfID.value == ""){
            shelf_book_scroll.style.display = "none"
        }
        // When Input Shelf Number Remove Books In Previous Shelf
        shelf_book_scroll_div.forEach((e)=>{
            e.remove()
        })
        fetch(`http://localhost:3000/library/books/getBooksInThisBlock?block_number=${blockID.value.toString()}&shelf_number=${shelfID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            response(res)
        })
        .catch(e => console.log(e))
    })
}
books_in_shelf_in_bLock()
