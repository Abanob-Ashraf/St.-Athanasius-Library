let admin = JSON.parse(sessionStorage.getItem("admin"));
let search_user = document.querySelector(".search-user")
let deleted_users = document.querySelector(".deleted-users")
let create_user = document.querySelector(".create-user")
let backup_data = document.querySelector(".backup-data")
let copy_right = document.querySelector(".copy-right")

function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            location.replace("/login.html")
        }
    }
    
    if (admin == false){
        search_user.remove()
        deleted_users.remove()
        create_user.remove()
        backup_data.remove()
    }

    copy_right.textContent = `كل الحقوق ملكيه مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©`
    
}
global()