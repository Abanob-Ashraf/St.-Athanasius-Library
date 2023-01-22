let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function myBook(data){
    for (let i = 0 ; i <= 10; i++){
        let book = document.createElement("div")
        let p = document.createElement("p")
        let pText = document.createTextNode(data[i].book_name)
        let span = document.createElement("span")
        let spanText = document.createTextNode(data[i].updated_date)
        let myBook = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book");
        let myBookInfo = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info");
        let userEditBack = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info .back")
        let bookName = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info .book-name span")
        let blockNum = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info .book-block span")
        let shelfNum = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info .book-shelf span")
        let bookNum = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info .book-number span")
        let bookCreated = document.querySelector(".browse-books-landing .container .browseBooks.my-books .my-book-info .book-created span")

        book.className = "book"

        myBook.appendChild(book)
        book.appendChild(p)
        p.appendChild(pText)
        book.appendChild(span)
        span.appendChild(spanText)

        book.addEventListener("click",()=>{
            myBook.style.display = "none"
            myBookInfo.style.display = "block"
            bookName.textContent = data[i].book_name
            blockNum.textContent = data[i].block_number
            shelfNum.textContent = data[i].shelf_number
            bookNum.textContent = data[i].book_number_in_shelf
            bookCreated.textContent = data[i].updated_date
        })

        userEditBack.addEventListener("click",()=>{
            myBook.style.display = "block"
            myBookInfo.style.display = "none"
        })
    }
}
// LatestBooks Fetch Function
export function myBooks(){
    fetch('http://localhost:3000/library/books/user/myBooks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        myBook(res)
    })
    .catch(e => console.log(e))
}
myBooks()