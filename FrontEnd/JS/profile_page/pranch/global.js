let admin = JSON.parse(sessionStorage.getItem("admin"));
export function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            location.replace("/login.html")
        }
    }
    
    let search_user = document.querySelector(".search-user")
    let deleted_users = document.querySelector(".deleted-users")
    let create_user = document.querySelector(".create-user")
    
    if (admin == false){
        search_user.style.display = "none"
        deleted_users.style.display = "none"
        create_user.style.display = "none"
    }
}
global()