window.onload = function(){
    if (sessionStorage.getItem("email") != undefined || sessionStorage.getItem("email") == ""){
        location.href = "/Password_resetPassword.html"
    }
}
let form = document.forms[0]
let email = document.getElementsByName("email")[0]

form.addEventListener("click",()=>{
    sessionStorage.setItem("email",email.value.trim())
})

