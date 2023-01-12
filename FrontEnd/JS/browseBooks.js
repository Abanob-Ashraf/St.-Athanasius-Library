let token = JSON.parse(sessionStorage.getItem("token"));

window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

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
        location.href = "/login.html"
    })
}


// Browse Books
function browseBooks(){
    let keyOfSearch = document.querySelector(".browse-books-landing .container .profile.search-books .search-container #subject").value
    let valueOfSearch = document.querySelector(".browse-books-landing .container .profile.search-books .search-container input").value
    fetch(`http://localhost:3000/library/books/search?${keyOfSearch}=${valueOfSearch}`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))
}
let form = document.querySelector(".browse-books-landing .container .profile.search-books form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    browseBooks()
})











// Latest Books Function
// function latestBook(data){
//     for (let i = 0 ; i <= data.length; i++){
//         let booksName = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
//         let booksCreatedTime = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div span");
//         let latestBook = document.querySelector(".profile-landing .container .profile.latest-books .latest-book");
//         let latestBookCLick = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
//         let latestBookInfo = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info");
//         let userEditBack = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .back")
//         let bookName = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-name span")
//         let bookAuthor = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-author span")
//         let bookApublisher = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .publisher span")
//         let bookCode = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-code span")
//         let bookCopies = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-copies span")
//         let bookCreated = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .book-created span")

//         booksName[i].textContent = data[i].book_name
//         booksCreatedTime[i].textContent = data[i].created_date

//         userEditBack.addEventListener("click",()=>{
//             latestBook.style.display = "block"
//             latestBookInfo.style.display = "none"
//         })

//         latestBookCLick.forEach((e)=>{
//             e.addEventListener("click",()=>{
//                 if (e.textContent == data[i].book_name){
//                     latestBook.style.display = "none"
//                     latestBookInfo.style.display = "block"
//                     bookName.textContent = data[i].book_name
//                     bookAuthor.textContent = data[i].author
//                     bookApublisher.textContent = data[i].publisher
//                     bookCode.textContent = data[i].book_code
//                     bookCopies.textContent = data[i].number_of_copies
//                     bookCreated.textContent = data[i].created_date

//                     if (data[i].who_edited == null){
//                         bookAuthor.textContent = `لا يوجد`
//                     }
//                     if (data[i].author == null){
//                         bookAuthor.textContent = `لا يوجد`
//                     }
//                     if (data[i].publisher == null){
//                         bookApublisher.textContent = `لا يوجد`
//                     }
//                 }
//             })
//         })
//     }
// }

// // Me Fetch Function
// function me(){
//     fetch('http://localhost:3000/library/users/me',
//     {
//         method: 'GET',
//         headers: new Headers({"Authorization": `Bearer ${token}`}),
//     }).then(res => res.json())
//     .then(res => {
//         header(res)
//     })
//     .catch(e => console.log(e))
// }
// me()

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