const copy_right = document.querySelector(".copy-right")
const visitor_nav = document.querySelector(".visitor-nav")
const member_nav = document.querySelector(".member-nav")

// If User's Token Not Found Remove Following Partions
window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        member_nav.remove()
    }else{
        visitor_nav.remove()
        member_nav.style.display = "block"
    }
}

// Put Copy Right Content
copy_right.textContent = `كل الحقوق محفوظه - مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©` 