function userInfo(){
    let userInfo = document.querySelector(".profile-landing .container .profile.user .user-info");
    let userInfoEdit = document.querySelector(".profile-landing .container .profile.user .user-info .edit");
    let userEdit = document.querySelector(".profile-landing .container .profile.user .edit-info");
    let userEditBack = document.querySelector(".profile-landing .container .profile.user .edit-info .back")

    userEditBack.addEventListener("click",()=>{
        userInfo.style.display = "block"
        userEdit.style.display = "none"
    })

    userInfoEdit.addEventListener("click",()=>{
        userInfo.style.display = "none"
        userEdit.style.display = "block"
    })
}
userInfo()

function latestBook(){
    let latestBook = document.querySelector(".profile-landing .container .profile.latest-books .latest-book");
    let latestBookCLick = document.querySelectorAll(".profile-landing .container .profile.latest-books .latest-book div p");
    let latestBookInfo = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info");
    let userEditBack = document.querySelector(".profile-landing .container .profile.latest-books .latest-book-info .back")

    userEditBack.addEventListener("click",()=>{
        latestBook.style.display = "block"
        latestBookInfo.style.display = "none"
    })

    latestBookCLick.forEach((e)=>{
        e.addEventListener("click",()=>{
            latestBook.style.display = "none"
            latestBookInfo.style.display = "block"
        })
    })
}
latestBook()