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