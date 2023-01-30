let first_name = JSON.parse(sessionStorage.getItem("first_name"));
let last_name = JSON.parse(sessionStorage.getItem("last_name"));
let token = JSON.parse(sessionStorage.getItem("token"));
let id = JSON.parse(sessionStorage.getItem("id"));
let job = JSON.parse(sessionStorage.getItem("job"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let email = JSON.parse(sessionStorage.getItem("email"));
let phone_number = JSON.parse(sessionStorage.getItem("phone_number"))
let form = document.forms[0]
let firstNameEI = document.querySelector(".profile.user .edit-info .first-name input");
let lastNameEI = document.querySelector(".profile.user .edit-info .last-name input");
let emailEI = document.querySelector(".profile.user .edit-info .email input");
let phoneEI = document.querySelector(".profile.user .edit-info .phone input");
let errorMsg = document.querySelector(".profile.user .edit-info .errorMsg")

// Edit_user Response
function response(data){
    if (data == "this email already existe"){
        errorMsg.textContent = "هذا البريد الالكتروني او رقم الهاتف مسجل من قبل"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data == "updated user correctly"){
        sessionStorage.setItem("first_name" , firstNameEI.value.trim() == "" ? JSON.stringify(first_name) : JSON.stringify(firstNameEI.value.trim()))
        sessionStorage.setItem("last_name" , lastNameEI.value.trim() == "" ? JSON.stringify(last_name) : JSON.stringify(lastNameEI.value.trim()))
        sessionStorage.setItem("email" , emailEI.value.trim() == "" ? JSON.stringify(email) : JSON.stringify(emailEI.value.trim()))
        sessionStorage.setItem("phone_number" , phoneEI.value.trim() == "" ? JSON.stringify(phone_number) : JSON.stringify(phoneEI.value.trim()))
        setTimeout(()=>{
            location.reload()
        })
    }else if (data.errors[0].param == "email"){
        errorMsg.textContent = "يرجي كتابه البريد الالكتروني بشكل صحيح"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }
}


// Edit_user Fetch Function (To Edit Information)
function edit_user(){
    fetch(`http://localhost:3000/library/users/${id}`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            first_name: firstNameEI.value.trim() == "" ? first_name : firstNameEI.value.trim(),
            last_name: lastNameEI.value.trim() == "" ? last_name : lastNameEI.value.trim(),
            email: emailEI.value.trim() == "" ? email : emailEI.value.trim(),
            phone_number: phoneEI.value.trim() == "" ? phone_number : phoneEI.value.trim(),
            job: job,
            admin_flag: admin
        })
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        response(res)
    })
    .catch(e => console.log(e))    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    edit_user()
})
