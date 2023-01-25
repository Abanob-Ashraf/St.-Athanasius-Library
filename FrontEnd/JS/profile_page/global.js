let admin = JSON.parse(sessionStorage.getItem("admin"));
let search_user = document.querySelector(".search-user")
let deleted_users = document.querySelector(".deleted-users")
let create_user = document.querySelector(".create-user")
let copy_right = document.querySelector(".copy-right")

function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            location.replace("/login.html")
        }
    }
    
    if (admin == false){
        search_user.style.display = "none"
        deleted_users.style.display = "none"
        create_user.style.display = "none"
    }

    copy_right.textContent = `كل الحقوق ملكيه مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©`
    
}
global()