let form = document.forms[0];
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let paassword = document.getElementById("password");
let inputField = document.querySelectorAll(".sign-up-form .input-field");
console.log(inputField)

document.addEventListener("click",()=>{
    inputField.forEach((e)=>{
        e.classList.remove("success","error")
    })
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let firstNameValue = firstName.value.trim()
    let lastNameValue = lastName.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = paassword.value.trim()
    inputField.forEach((e)=>{
    })
})
