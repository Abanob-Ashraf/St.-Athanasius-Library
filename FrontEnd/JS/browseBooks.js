// ==================================================== Global ==================================================== //
let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));

// let search_user = document.querySelector(".search-user")
// let deleted_users = document.querySelector(".deleted-users")
// let create_user = document.querySelector(".create-user")

// if (admin == false){
//     search_user.style.display = "none"
//     deleted_users.style.display = "none"
//     create_user.style.display = "none"
// }
// ==================================================== End Global ==================================================== //





// ==================================================== Header ==================================================== //
// Header Function
function header(data){
    let logout = document.querySelector(".header .container .menu #logout")
    let userLogin = document.querySelector(".header .container .user-login")
    let hiddenMenu = document.querySelector(".header .container .menu")
    let welcome = document.querySelector(".header .container .menu .welcome")

    welcome.textContent = `${data.first_name} ${data.last_name}`

    userLogin.addEventListener("click",()=>{
        hiddenMenu.classList.toggle("clicked")
    })

    logout.addEventListener("click",()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("email")
        location.href = "/login.html"
    })
}
// Me Fetch Function
function me(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        header(res)
    })
    .catch(e => console.log(e))
}
me()
// ==================================================== End Header ==================================================== //





// ==================================================== Browse Books ==================================================== //
// Search Function
function search(data){
    console.log(data)
    let msg = document.querySelector(".search-books small")
    for (let i = 0 ; i < data.length; i++){
        let books = document.querySelector(".books")
        let form = document.querySelector(".browse-books-landing .container .browseBooks.search-books form")

        books.style.display = "block"
        let table = document.querySelector(".the-books")    
        let raw =  document.createElement("tr")
        let discription_1 =  document.createElement("td")
        let discription_2 =  document.createElement("td")
        let discription_3 =  document.createElement("td")
        let discription_4 =  document.createElement("td")

        let discriptionText_1 = document.createTextNode(data[i].book_name)
        let discriptionText_2 = document.createTextNode(data[i].author == null ? "لا يوجد" : data[i].author)
        let discriptionText_3 = document.createTextNode(data[i].publisher == null ? "لا يوجد" : data[i].publisher)
        let discriptionText_4 = document.createTextNode(data[i].book_code)

        table.appendChild(raw)
        raw.appendChild(discription_1)
        raw.appendChild(discription_2)
        raw.appendChild(discription_3)
        raw.appendChild(discription_4)
        discription_1.appendChild(discriptionText_1)
        discription_2.appendChild(discriptionText_2)
        discription_3.appendChild(discriptionText_3)
        discription_4.appendChild(discriptionText_4)

        form.addEventListener("submit",()=>{
            raw.remove()
            raw.previousElementSibling.remove()
        })

        if(data == "book was not found"){
            books.style.display = "none"
            msg.textContent = "هذا الكتاب غير موجود"
            setTimeout(()=>{
                msg.textContent = ""
            },2000)
        }

        raw.addEventListener("click",()=>{
            sessionStorage.setItem("book_id",data[i].id)
            sessionStorage.setItem("book_name",data[i].book_name)
            sessionStorage.setItem("book_number_in_shelf",data[i].book_number_in_shelf)
            sessionStorage.setItem("created_date",data[i].created_date)
            sessionStorage.setItem("name_of_series",data[i].name_of_series)
            sessionStorage.setItem("number_of_copies",data[i].number_of_copies)
            sessionStorage.setItem("number_of_pages",data[i].number_of_pages)
            sessionStorage.setItem("number_of_parts",data[i].number_of_parts)
            sessionStorage.setItem("publisher",data[i].publisher)
            sessionStorage.setItem("topic",data[i].topic)
            sessionStorage.setItem("conclusion",data[i].conclusion)
            sessionStorage.setItem("author",data[i].author)
            sessionStorage.setItem("book_code",data[i].book_code)
            location.href = "/user_bookInfo.html"
        })
    }
}
// Browse Books Fetch Function
function browseBooks(){
    let keyOfSearch = document.querySelector(".browse-books-landing .container .browseBooks.search-books .search-container #subject").value
    let valueOfSearch = document.querySelector(".browse-books-landing .container .browseBooks.search-books .search-container input").value
    fetch(`http://localhost:3000/library/books/search?${keyOfSearch}=${valueOfSearch}`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        search(res)
    })
    .catch(e => console.log(e))
}
let form = document.querySelector(".browse-books-landing .container .browseBooks.search-books form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    browseBooks()
})

// ==================================================== End Browse Books ==================================================== //





// ==================================================== Latest Books ==================================================== //
// Latest Books Function
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
function latestBooks(){
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
// ==================================================== End Latest Books ==================================================== //





// ==================================================== My Books ==================================================== //
// Latest Books Function
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
function myBooks(){
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
// ==================================================== End My Books ==================================================== //





// ==================================================== All BLock ==================================================== //
function allBlockData(data){
    let blockID_1 = document.getElementsByName("block_num_one")[0]
    let blockID_2 = document.getElementsByName("block_num_two")[0]

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].block_number)

        blockID_1.appendChild(option)
        option.appendChild(optionText)
    }

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].block_number)

        blockID_2.appendChild(option)
        option.appendChild(optionText)
    }
}
// AllBlock Fetch Function
function allBlock(){
    fetch('http://localhost:3000/library/blocks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        allBlockData(res)
    })
    .catch(e => console.log(e))
}
allBlock()
// ==================================================== End All BLock ==================================================== //




// ==================================================== All Shelfs In One BLock ==================================================== //
function allShelfsData(data){
    let shelfID = document.getElementsByName("shelf_num")[0]
    let blockID = document.getElementsByName("block_num_two")[0]

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`${data[i].shelf_number == undefined ? "لا يوجد" : `الرف ${data[i].shelf_number}`}`)

        option.setAttribute("value",data[i].shelf_number == undefined ? "" : data[i].shelf_number)

        shelfID.appendChild(option)
        option.appendChild(optionText)

        blockID.addEventListener("input",()=>{
            option.remove()
            option.previousElementSibling.remove()
        })
    }
}
// AllShelfsInOneBLock Fetch Function
function allShelfsInOneBlock(){
    let blockID = document.getElementsByName("block_num_two")[0]
    blockID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library//shelfs/block/${blockID.value}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => {
            allShelfsData(res)
        })
        .catch(e => console.log(e))
    })
}
allShelfsInOneBlock()
// ==================================================== End All Shelfs In One BLock ==================================================== //






// ==================================================== BLock Books ==================================================== //
// Block Books Function
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
function blockBooks(){
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
function blockBooksLength(){
    let blockID = document.getElementsByName("block_num_one")[0]
    blockID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_number=${blockID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let blockBooksLength = document.querySelector(".browse-books-landing .container .browseBooks.block-books .block-book .count")
            blockBooksLength.textContent = res
        })
        .catch(e => console.log(e))
    })

}
blockBooks()
blockBooksLength()
// ==================================================== End BLock Books ==================================================== //






// ==================================================== shelf Books ==================================================== //
// shelf Books Function
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
function shelfBooks(){
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
function shelfkBooksLength(){
    let shelfID = document.getElementsByName("block_num_one")[0]
    let blockID = document.getElementsByName("block_num_two")[0]
    shelfID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_number=${blockID.value.toString()}&shelf_number=${shelfID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let shelfBooksLength = document.querySelector(".browse-books-landing .container .browseBooks.shelf-books .shelf-book .count span")
            shelfBooksLength.textContent = res
        })
        .catch(e => console.log(e))
    })

}
shelfBooks()
shelfkBooksLength()
// ==================================================== End BLock Books ==================================================== //
