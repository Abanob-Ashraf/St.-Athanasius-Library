let admin = JSON.parse(sessionStorage.getItem("admin"));
let search_user = document.querySelector(".search-user")
let deleted_users = document.querySelector(".deleted-users")
let create_user = document.querySelector(".create-user")
let backup_data = document.querySelector(".backup-data")
let copy_right = document.querySelector(".copy-right")

// If User's Token Not Found Redirct User To Login Page
window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

// If User Not Admin Remove Following Patitions
if (admin == false){
    search_user.remove()
    deleted_users.remove()
    create_user.remove()
    backup_data.remove()
}

// Put Copy Right Content
copy_right.textContent = `كل الحقوق محفوظه - مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©` 