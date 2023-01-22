let token = JSON.parse(sessionStorage.getItem("token"));
function header(data){
    let logout = document.querySelector(".header .container .menu .logout")
    let userLogin = document.querySelector(".header .container .user-login")
    let menu = document.querySelector(".header .container .menu")
    let welcome = document.querySelector(".header .container .menu .welcome")

    welcome.textContent = `${data.first_name} ${data.last_name}`

    userLogin.addEventListener("click",()=>{
        menu.classList.toggle("clicked")
    })

    logout.addEventListener("click",()=>{
        sessionStorage.clear()
        location.href = "/login.html"
    })
}
export function me(){
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
