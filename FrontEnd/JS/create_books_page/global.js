let admin = JSON.parse(sessionStorage.getItem("admin"));
let create_block = document.querySelector(".create-block")
let create_shelf = document.querySelector(".create-shelf")
let copy_right = document.querySelector(".copy-right")

// If User's Token Not Found Redirct User To Login Page
window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

// If User Not Admin Remove Following Patitions
if (admin == false){
    create_block.style.display = "none"
    create_shelf.style.display = "none"
}

// Put Copy Right Content
copy_right.textContent = `كل الحقوق ملكيه مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©`
