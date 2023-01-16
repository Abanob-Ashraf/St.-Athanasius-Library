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









// Latest Books Function
// function latestBook(data){
    // for (let i = 0 ; i <= data.length; i++){
    //     let booksName = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
    //     let booksCreatedTime = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div span");
    //     let latestBook = document.querySelector(".profile-landing .container .profile.latest-books .latest-book");
    //     let latestBookCLick = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
    //     let latestBookInfo = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info");
    //     let userEditBack = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .back")
    //     let bookName = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-name span")
    //     let bookAuthor = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-author span")
    //     let bookApublisher = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .publisher span")
    //     let bookCode = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-code span")
    //     let bookCopies = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-copies span")
    //     let bookCreated = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-created span")

    //     booksName[i].textContent = data[i].book_name
    //     booksCreatedTime[i].textContent = data[i].created_date

    //     userEditBack.addEventListener("click",()=>{
    //         latestBook.style.display = "block"
    //         latestBookInfo.style.display = "none"
    //     })

    //     latestBookCLick.forEach((e)=>{
    //         e.addEventListener("click",()=>{
    //             if (e.textContent == data[i].book_name){
    //                 latestBook.style.display = "none"
    //                 latestBookInfo.style.display = "block"
    //                 bookName.textContent = data[i].book_name
    //                 bookAuthor.textContent = data[i].author
    //                 bookApublisher.textContent = data[i].publisher
    //                 bookCode.textContent = data[i].book_code
    //                 bookCopies.textContent = data[i].number_of_copies
    //                 bookCreated.textContent = data[i].created_date

    //                 if (data[i].who_edited == null){
    //                     bookAuthor.textContent = `لا يوجد`
    //                 }
    //                 if (data[i].author == null){
    //                     bookAuthor.textContent = `لا يوجد`
    //                 }
    //                 if (data[i].publisher == null){
    //                     bookApublisher.textContent = `لا يوجد`
    //                 }
    //             }
    //         })
    //     })
    // }
// }


// // LatestBooks Fetch Function
// function latestBooks(){
//     fetch('http://localhost:3000/library/books/latestBooks',
//     {
//         method: 'GET',
//         headers: new Headers({"Authorization": `Bearer ${token}`}),
//     }).then(res => res.json())
//     .then(res => {
//         latestBook(res)
//     })
//     .catch(e => console.log(e))
// }
// latestBooks()