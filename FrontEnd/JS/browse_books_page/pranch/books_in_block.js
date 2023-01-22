let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function blockBook(data){
    for (let i = 0 ; i <= data.length ; i++){
        let book = document.createElement("div")
        let p = document.createElement("p")
        let pText = document.createTextNode(data[i].book_name)
        let span = document.createElement("span")
        let spanText = document.createTextNode(data[i].updated_date)
        let blockBook = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book")
        let blockBooks = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book .scroll")
        let blockBookInfo = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info");
        let userEditBack = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .back")
        let bookName = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .book-name span")
        let bookAuthor = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .book-author span")
        let bookApublisher = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .publisher span")
        let bookCode = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .book-code span")
        let bookCopies = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .book-copies span")
        let bookCreated = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book-info .book-created span")

        book.className = "book"

        blockBooks.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        book.addEventListener("click",()=>{
            blockBook.style.display = "none"
            blockBookInfo.style.display = "block"
            bookName.textContent = data[i].book_name
            bookAuthor.textContent = data[i].author
            bookApublisher.textContent = data[i].publisher
            bookCode.textContent = data[i].book_code
            bookCopies.textContent = data[i].number_of_copies
            bookCreated.textContent = data[i].created_date
        })

        userEditBack.addEventListener("click",()=>{
            blockBook.style.display = "block"
            blockBookInfo.style.display = "none"
        })
    }
}
// blockBooks & length Fetch Function
export function blockBooks(){
    let blockID = document.getElementsByName("block_num_one")[0]
    blockID.addEventListener("input",()=>{
        let blockBooks = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book .scroll")
        let blockBooksDivs = document.querySelectorAll(".browse-books-landing .container .browseBooks.block-books .block-book .scroll div")
        blockBooks.style.display = "block"
        blockBooksDivs.forEach((e)=>{
            e.remove()
        })
        fetch(`http://localhost:3000/library/books/getBooksInThisBlock?block_number=${blockID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            blockBook(res)
        })
        .catch(e => console.log(e))
    })
}
blockBooks()
