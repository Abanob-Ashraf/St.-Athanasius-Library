let token = JSON.parse(sessionStorage.getItem("token"));
let form = document.forms[4];
let errorMsg = document.querySelector(".create-user small")

// Search Response
function response(data){
    if (data == "this email already existe"){
        errorMsg.textContent = "هذا البريد الالكتروني مسجل من قبل"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data == "user created correctly"){
        errorMsg.textContent = "تم انشاء الحساب الرجاء التاكد من بريدك"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data.errors[0].param == "email"){
        errorMsg.textContent = "يرجي كتابه البريد الالكتروني بشكل صحيح"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data.errors[0].param == "password"){
        errorMsg.textContent = "يرجي ان لا تقل كلمه المرور عن 8 احرف/ارقام"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }
}

// Create User Fetch Function (To Add Information)
function create_user(){
    let firstName = document.querySelector(".create-user-form .input-field .first-name")
    let lastName = document.querySelector(".create-user-form .input-field .last-name")
    let job = document.querySelector(".create-user-form .input-field .job")
    let email = document.querySelector(".create-user-form .input-field .email")
    let password = document.querySelector(".create-user-form .input-field .password")
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
    .then(res => response(res))
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    create_user()
})