let token = JSON.parse(sessionStorage.getItem("token"));
let user_login = document.querySelector(".user-login")
let profile_pic = document.querySelector(".user-login .profile-pic img")
let menu = document.querySelector(".menu")
let welcome = document.querySelector(".menu .welcome")
let logout = document.querySelector(".menu .logout")
let browse_books_landing_side = document.querySelector(".browse-books-landing")

// Header Response Function
function response(data){
    // Profile Img
    profile_pic.src = `https://api.dicebear.com/5.x/initials/svg?seed=${data.first_name[0]}${data.last_name[0]}`

    // Show Header Menu 
    user_login.addEventListener("click",()=>{
        menu.classList.toggle("clicked")
    })

    // hide Header Menu 
    browse_books_landing_side.addEventListener("click",()=>{
        menu.classList.remove("clicked")
    })

    // Profile Welcoming
    welcome.textContent = `${data.first_name} ${data.last_name}`

    // User Logout
    logout.addEventListener("click",()=>{
        sessionStorage.clear()
        location.href = "/login.html"
    })
}

// Header Fetch Function (To Get Information)
function header(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        response(res)
    })
    .catch(e => console.log(e))
}
header()
