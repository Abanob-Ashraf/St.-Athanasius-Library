let admin = JSON.parse(sessionStorage.getItem("admin"));
let copy_right = document.querySelector(".copy-right")
let user_not_login = document.querySelector(".user-not-login")
let user_login = document.querySelector(".user-login")

function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            user_login.remove()
        }else{
            user_not_login.remove()
        }
    }

    copy_right.textContent = `كل الحقوق ملكيه مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©`
    
}
global()