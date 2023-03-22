let token = JSON.parse(sessionStorage.getItem("token"));
let avater = document.querySelector(".avater")
let visitor_nav_icon = document.querySelector(".visitor-nav i")
let visitor_nav_menu = document.querySelector(".visitor-nav .menu")
let member_avatar = document.querySelector(".member-avater")
let member_nav_menu = document.querySelector(".member-nav .menu")
let welcome = document.querySelector(".menu .welcome")
let logout = document.querySelector(".menu .logout")
let Intro_landing_side = document.querySelector(".intro-landing")

/// Profile Img
member_avatar.src = `https://api.dicebear.com/5.x/initials/svg?seed=${JSON.parse(sessionStorage.getItem("first_name"))} ${JSON.parse(sessionStorage.getItem("last_name"))}`

// Show Header Menu 
avater.addEventListener("click",()=>{
    menu.classList.toggle("click")
})

// hide Header Menu 
Intro_landing_side.addEventListener("click",()=>{
    menu.classList.remove("click")
})

// Profile Welcoming
welcome.textContent = `${JSON.parse(sessionStorage.getItem("first_name"))} ${JSON.parse(sessionStorage.getItem("last_name"))}`

// User Logout
logout.addEventListener("click",()=>{
    sessionStorage.clear()
    location.reload()
})

// Show Header Links 
visitor_nav_icon.addEventListener("click",()=>{
    visitor_nav_menu.classList.toggle("click")
})

// hide Header Links 
Intro_landing_side.addEventListener("click",()=>{
    visitor_nav_menu.classList.remove("click")
})
