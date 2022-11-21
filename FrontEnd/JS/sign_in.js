let form = document.forms[0];
let user = document.getElementById("user");
let paassword = document.getElementById("password");
let inputField = document.querySelectorAll(".sign-in-form .input-field");

document.addEventListener("click",()=>{
    inputField.forEach((e)=>{
        e.classList.remove("success","error")
    })
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userValue = user.value.trim()
    let passwordValue = paassword.value.trim()
    inputField.forEach((e)=>{
    })
})
