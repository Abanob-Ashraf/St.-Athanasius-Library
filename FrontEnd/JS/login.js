let inputFiled = document.querySelectorAll(".input-field");

// Rander The Validtion On Page
document.addEventListener("click",() => {
    inputFiled.forEach((e) => {
        e.classList.remove("success","error");
    });
});

// Validate Oprators From Data Base
function validateFromDataBase(data){
    // Declare Email Variables
    let email = document.getElementsByName("email")[0];
    let emailMsg = document.querySelectorAll("small")[0];
    let emailValue = email.value.trim();

    // Declare Password Variables
    let password = document.getElementsByName("password")[0];
    let passwordMsg = document.querySelectorAll("small")[1]
    let passwordValue = password.value.trim()

    // Email Validation Function
    function emailF(){
        if (emailValue ==  ""){
            emailMsg.textContent = 'لا تترك الحقل فارغ'
            setError(email)
        }else if(emailValue != data.email){
            setError(email);
            setError(password);
            emailMsg.textContent = "البريد الالكتروني غير موجود"
            passwordMsg.textContent = "او كلمه المرور غير صحيحه"
        }else{
            setSuccess(email) 
            sessionStorage.setItem("first_name" , JSON.stringify(data.first_name))
            sessionStorage.setItem("last_name" , JSON.stringify(data.last_name))
            sessionStorage.setItem("token" , JSON.stringify(data.token))
            sessionStorage.setItem("id" , JSON.stringify(data.id))
            sessionStorage.setItem("admin" , JSON.stringify(data.admin_flag))
            sessionStorage.setItem("job" , JSON.stringify(data.job))
            location.href = "/profile.html"
        }
    }

    // password Validation Function
    function passwordF(){
        if (passwordValue ==  ""){
            passwordMsg.textContent = 'لا تترك الحقل فارغ'
            setError(password)
        }else if(passwordValue.length < 8 || passwordValue.length > 14){
            passwordMsg.textContent = `يرجي ان لا تزيد الاحرف عن 14 او اقل من 8 احرف`
            setError(password)
        }else {
            setSuccess(password)   
        }
    }

    // Set Error Validate
    function setError(eValue) {
        let parentOfElement = eValue.parentElement;
        if(parentOfElement.classList.contains('success')){
            parentOfElement.classList.remove('success');
        }
        parentOfElement.classList.add('error');
    }

    // Set Success Validate
    function setSuccess(eValue){
        let parentOfElement = eValue.parentElement;
        if(parentOfElement.classList.contains('error')){
            parentOfElement.classList.remove('error');
        }
        parentOfElement.classList.add('success');
    }

    passwordF()
    emailF()
}

// Login Fetch Function
function login() {
    let email = document.getElementsByName("email")[0];
    let password = document.getElementsByName("password")[0];

    if (sessionStorage.getItem("token")){
        console.log("token exiset");
        token = JSON.parse(sessionStorage.getItem("token"))
    } else {
        fetch('http://localhost:3000/library/users/login',
        {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        }).then(res => res.json())
        .then(res => {
            validateFromDataBase(res)
        })
        .catch(e => console.log(e))
    }
}
// Test Validton
function isFormValid(){
    let inputFiled = document.querySelectorAll(".input-field");
    let result = true;
    inputFiled.forEach((e)=>{
        if(e.classList.contains('error')){
            result = false;
        }
    });
    return result;
}
// Submit Form
let form = document.forms[0];
form.addEventListener('submit', (e) => {
    console.log(isFormValid());
    if(isFormValid() == true){
        e.preventDefault()
        login()
    } else {
        e.preventDefault()
    }
});