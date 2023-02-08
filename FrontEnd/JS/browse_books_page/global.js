let copy_right = document.querySelector(".copy-right")

// If User's Token Not Found Redirct User To Login Page
window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

// Put Copy Right Content
copy_right.textContent = `كل الحقوق محفوظه - مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©` 