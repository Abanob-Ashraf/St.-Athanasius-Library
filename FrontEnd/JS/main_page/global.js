let admin = JSON.parse(sessionStorage.getItem("admin"));
let copy_right = document.querySelector(".copy-right")
let user_not_login = document.querySelector(".user-not-login")
let user_login = document.querySelector(".user-login")

// If User's Token Not Found Remove Following Partions
window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        user_login.remove()
    }else{
        user_not_login.remove()
    }
}

// Put Copy Right Content
copy_right.textContent = `كل الحقوق محفوظه - مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©` 