let copy_right = document.querySelector(".copy-right")
function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            location.replace("/login.html")
        }
    }

    copy_right.textContent = `كل الحقوق ملكيه مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©`
}
global()