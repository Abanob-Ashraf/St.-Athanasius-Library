let admin = JSON.parse(sessionStorage.getItem("admin"));
export function global(){
    window.onload = function(){
        if (window.sessionStorage.getItem("token") == undefined){
            location.replace("/login.html")
        }
    }
    
    let create_block = document.querySelector(".createBooks-landing .container .create-block")
    let create_shelf = document.querySelector(".createBooks-landing .container .create-shelf")
    
    if (admin == false){
        create_block.style.display = "none"
        create_shelf.style.display = "none"
    }
}
global()