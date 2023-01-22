let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function latestBook(data){
    for (let i = 0 ; i <= data.length; i++){
        let book = document.createElement("div")
        let p = document.createElement("p")
        let pText = document.createTextNode(data[i].book_name)
        let span = document.createElement("span")
        let spanText = document.createTextNode(data[i].created_date)
        let latestBook = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book");
        let latestBookInfo = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info");
        let userEditBack = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .back")
        let bookName = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .book-name span")
        let bookAuthor = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .book-author span")
        let bookApublisher = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .publisher span")
        let bookCode = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .book-code span")
        let bookCopies = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .book-copies span")
        let bookCreated = document.querySelector(".browse-books-landing .container .browseBooks.latest-books .latest-book-info .book-created span")

        book.className = "book"

        latestBook.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        book.addEventListener("click",()=>{
            latestBook.style.display = "none"
            latestBookInfo.style.display = "block"
            bookName.textContent = data[i].book_name
            bookAuthor.textContent = data[i].author
            bookApublisher.textContent = data[i].publisher
            bookCode.textContent = data[i].book_code
            bookCopies.textContent = data[i].number_of_copies
            bookCreated.textContent = data[i].created_date

            if (data[i].author == null){
                bookAuthor.textContent = `لا يوجد`
            }
            if (data[i].publisher == null){
                bookApublisher.textContent = `لا يوجد`
            }
        })

        userEditBack.addEventListener("click",()=>{
            latestBook.style.display = "block"
            latestBookInfo.style.display = "none"
        })
    }
}
// LatestBooks Fetch Function
export function latestBooks(){
    fetch('http://localhost:3000/library/books/latestBooks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        latestBook(res)
    })
    .catch(e => console.log(e))
}
latestBooks()