let token = JSON.parse(sessionStorage.getItem("token"));
let shelfID = document.getElementsByName("select_shelf")[0]
let blockID = document.getElementsByName("select_block_sh")[0]
let shelf_book = document.querySelector(".book-in-shelf .shelf-books")
let shelf_book_scroll = document.querySelector(".book-in-shelf .shelf-books .scroll")
let shelf_book_info = document.querySelector(".book-in-shelf .shelf-books-info");
let shelf_book_info_back = document.querySelector(".book-in-shelf .shelf-books-info .back")
let book_name = document.querySelector(".book-in-shelf .shelf-books-info .book-name span")
let book_author = document.querySelector(".book-in-shelf .shelf-books-info .book-author span")
let book_publisher = document.querySelector(".book-in-shelf .shelf-books-info .publisher span")
let book_code = document.querySelector(".book-in-shelf .shelf-books-info .book-code span")
let book_copies = document.querySelector(".book-in-shelf .shelf-books-info .book-copies span")
let book_created = document.querySelector(".book-in-shelf .shelf-books-info .book-created span")

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
        let spanText = document.createTextNode(`${new Date(data[i].created_date).getDate()}/${new Date(data[i].created_date).getMonth()+1}/${new Date(data[i].created_date).getFullYear()}`)

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
            book_created.textContent = `${new Date(data[i].created_date).getDate()}/${new Date(data[i].created_date).getMonth()+1}/${new Date(data[i].created_date).getFullYear()}`
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
        let shelf_book_scroll = document.querySelector(".book-in-shelf .shelf-books .scroll")
        let shelf_book_scroll_div = document.querySelectorAll(".book-in-shelf .shelf-books .scroll div")
        shelf_book_scroll.style.display = "block"
        if (shelfID.value == ""){
            shelf_book_scroll.style.display = "none"
        }
        // When Input Shelf Number Remove Books In Previous Shelf
        shelf_book_scroll_div.forEach((e)=>{
            e.remove()
        })
        fetch(`http://localhost:3000/library/books/getBooksInThisBlock?block_id=${blockID.value}&shelf_id=${shelfID.value}`,
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
