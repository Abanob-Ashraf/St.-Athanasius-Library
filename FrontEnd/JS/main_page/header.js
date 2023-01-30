let token = JSON.parse(sessionStorage.getItem("token"));
let user_login = document.querySelector(".user-login")
let Bars = document.querySelector(".bars")
let links = document.querySelector(".links")
let profile_pic = document.querySelector(".user-login .profile-pic img")
let menu = document.querySelector(".menu")
let welcome = document.querySelector(".menu .welcome")
let logout = document.querySelector(".menu .logout")
let Intro_landing_side = document.querySelector(".intro-landing")

/// Profile Img
profile_pic.src = `https://api.dicebear.com/5.x/initials/svg?seed=${JSON.parse(sessionStorage.getItem("first_name"))} ${JSON.parse(sessionStorage.getItem("last_name"))}`

// Show Header Menu 
user_login.addEventListener("click",()=>{
    menu.classList.toggle("clicked")
})

// hide Header Menu 
Intro_landing_side.addEventListener("click",()=>{
    menu.classList.remove("clicked")
})

// Profile Welcoming
welcome.textContent = `${JSON.parse(sessionStorage.getItem("first_name"))} ${JSON.parse(sessionStorage.getItem("last_name"))}`

// User Logout
logout.addEventListener("click",()=>{
    sessionStorage.clear()
    location.reload()
})

// Show Header Links 
Bars.addEventListener("click",()=>{
    links.classList.toggle("clicked")
})

// hide Header Links 
Intro_landing_side.addEventListener("click",()=>{
    links.classList.remove("clicked")
})
