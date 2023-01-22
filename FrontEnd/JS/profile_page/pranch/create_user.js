let first_name = JSON.parse(sessionStorage.getItem("first_name"));
let last_name = JSON.parse(sessionStorage.getItem("last_name"));
let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let job = JSON.parse(sessionStorage.getItem("job"));
let email = JSON.parse(sessionStorage.getItem("email"));
let phone_number = JSON.parse(sessionStorage.getItem("phone_number"))
function create(data){
    let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
    let smallOne = document.querySelector(".profile-landing .container .create-user .one")
    let smallTwo = document.querySelector(".profile-landing .container .create-user .two")
    let smallThee = document.querySelector(".profile-landing .container .create-user .tree")
    let smallFour = document.querySelector(".profile-landing .container .create-user .four")

    if (isEmailValid(email.value.trim()) == false){
        smallOne.style.display = "block"
        smallOne.textContent = "يوجد خطاء في طريقه كتابه البريد الالكتروني"
        setTimeout(()=>{
            smallOne.style.display = "none"
        },5000)
    }else{
        smallOne.style.color = "#2ecc71"
        smallOne.style.display = "block"
        smallOne.textContent = "تم انشاء الحساب الرجاء التاكد من بريدك"
        setTimeout(()=>{
            smallOne.style.display = "none"
        },5000)
    }
    function isEmailValid(email){
        const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return reg.test(email);
    }
}
// Create User Fetch Function
export function createUser(){
    let firstName = document.querySelector(".profile-landing .container .create-user-form .input-field .first-name")
    let lastName = document.querySelector(".profile-landing .container .create-user-form .input-field .last-name")
    let job = document.querySelector(".profile-landing .container .create-user-form .input-field .job")
    let email = document.querySelector(".profile-landing .container .create-user-form .input-field .email")
    let password = document.querySelector(".profile-landing .container .create-user-form .input-field .password")
    let admin = document.getElementById("flag-admin")

    fetch('http://localhost:3000/library/users/createNewUser',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json' }),
        body: JSON.stringify({
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
            job: job.value.trim(),
            admin_flag: admin.checked
        })
    }).then(res => res.json())
    .then(res => create(res))
    .catch(e => console.log(e))
}
let createUserForm = document.querySelector(".profile-landing .container .create-user-form");
createUserForm.onsubmit = function(e){
    e.preventDefault()
    createUser()
}