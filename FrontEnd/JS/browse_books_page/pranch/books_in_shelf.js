let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function shelfBook(data){
    for (let i = 0 ; i <= data.length ; i++){
        let book = document.createElement("div")
        let p = document.createElement("p")
        let pText = document.createTextNode(data[i].book_name)
        let span = document.createElement("span")
        let spanText = document.createTextNode(data[i].updated_date)
        let shelfBook = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book")
        let shelfBooks = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book .scroll")
        let shelfBookInfo = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info");
        let userEditBack = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info .back")
        let bookName = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info .book-name span")
        let bookAuthor = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info .book-author span")
        let bookApublisher = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info .publisher span")
        let bookCode = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info .book-code span")
        let bookCopies = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book-info .book-copies span")
        let bookCreated = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .block-book-info .book-created span")

        book.className = "book"

        shelfBooks.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        book.addEventListener("click",()=>{
            shelfBook.style.display = "none"
            shelfBookInfo.style.display = "block"
            bookName.textContent = data[i].book_name
            bookAuthor.textContent = data[i].author
            bookApublisher.textContent = data[i].publisher
            bookCode.textContent = data[i].book_code
            bookCopies.textContent = data[i].number_of_copies
            bookCreated.textContent = data[i].created_date
        })

        userEditBack.addEventListener("click",()=>{
            shelfBook.style.display = "block"
            shelfBookInfo.style.display = "none"
        })
    }
}
// shelfBooks & length Fetch Function
export function shelfBooks(){
    let shelfID = document.getElementsByName("shelf_num")[0]
    let blockID = document.getElementsByName("block_num_two")[0]
    shelfID.addEventListener("input",()=>{
        let shelfBooks = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book .scroll")
        let shelfBooksDivs = document.querySelectorAll(".browse-books-landing .container .browseBooks.shelf-books .shelf-book .scroll div")
        shelfBooks.style.display = "block"
        shelfBooksDivs.forEach((e)=>{
            e.remove()
        })
        fetch(`http://localhost:3000/library/books/getBooksInThisBlock?block_number=${blockID.value.toString()}&shelf_number=${shelfID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            shelfBook(res)
        })
        .catch(e => console.log(e))
    })
}
shelfBooks()
