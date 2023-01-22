export function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            location.replace("/login.html")
        }
    }
}
global()