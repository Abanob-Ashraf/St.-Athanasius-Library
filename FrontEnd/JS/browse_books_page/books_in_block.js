let token = JSON.parse(sessionStorage.getItem("token"));
let blockID = document.getElementsByName("block_num_one")[0]
let block_book = document.querySelector(".browseBooks.block-books .block-book")
let block_book_scroll = document.querySelector(".browseBooks.block-books .block-book .scroll")
let block_book_info = document.querySelector(".browseBooks.block-books .block-book-info");
let block_book_info_back = document.querySelector(".browseBooks.block-books .block-book-info .back")
let book_name = document.querySelector(".browseBooks.block-books .block-book-info .book-name span")
let book_author = document.querySelector(".browseBooks.block-books .block-book-info .book-author span")
let book_publisher = document.querySelector(".browseBooks.block-books .block-book-info .publisher span")
let book_code = document.querySelector(".browseBooks.block-books .block-book-info .book-code span")
let book_copies = document.querySelector(".browseBooks.block-books .block-book-info .book-copies span")
let book_created = document.querySelector(".browseBooks.block-books .block-book-info .book-created span")

// Books In BLock Response
function response(data){
    for (let i = 0 ; i <= data.length ; i++){
        // when Book Name Undefined Stop Proccess 
        if(data[i].book_name == undefined || data == null){
            block_book_scroll.style.display = "none"
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
        block_book_scroll.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        // Show Current Book Information On Click The Book
        book.addEventListener("click",()=>{
            block_book.style.display = "none"
            block_book_info.style.display = "block"
            book_name.textContent = data[i].book_name
            book_author.textContent = data[i].author == null ? book_author.textContent = `لا يوجد` :  data[i].author
            book_publisher.textContent = data[i].publisher == null ? book_publisher.textContent = `لا يوجد` : data[i].publisher
            book_code.textContent = data[i].book_code
            book_copies.textContent = data[i].number_of_copies
            book_created.textContent = data[i].created_date
        })

        // Redirct From Block Book Information To Block Book
        block_book_info_back.addEventListener("click",()=>{
            block_book.style.display = "block"
            block_book_info.style.display = "none"
        })
    }
}

// books_in_bLock Fetch Function (To Get Information)
function books_in_bLock(){
    // When Input BLock Number Show Books In current BLock
    blockID.addEventListener("input",()=>{
        let block_book_scroll = document.querySelector(".browseBooks.block-books .block-book .scroll")
        let block_book_scroll_div = document.querySelectorAll(".browseBooks.block-books .block-book .scroll div")
        block_book_scroll.style.display = "block"
        if (blockID.value == ""){
            block_book_scroll.style.display = "none"
        }
        // When Input BLock Number Remove Books In Previous BLock
        block_book_scroll_div.forEach((e)=>{
            e.remove()
        })
        fetch(`http://localhost:3000/library/books/getBooksInThisBlock?block_id=${blockID.value}`,
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
books_in_bLock()
