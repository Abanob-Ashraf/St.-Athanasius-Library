let form = document.forms[0];
let inputFiled = document.querySelectorAll(".input-field");
let content = document.querySelectorAll("small");
let email = document.getElementsByName("email")[0];
let password = document.getElementsByName("password")[0];

// Rander The Validtion On Page
document.addEventListener("click",() => {
    inputFiled.forEach((e) => {
        e.classList.remove("success","error");
    });
});

// Submit Form
form.addEventListener('submit', (e) => {
    validateForm();
    console.log(isFormValid());
    if(isFormValid() == true){
        e.preventDefault()
        get()
    } else {
        e.preventDefault()
    }

});

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

// Validate Oprators
function validateForm() {
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    // email Validtion
    if(emailValue == ''){
        setError(email);
        content[0].innerHTML = "الرجاء ادخال البريد الالكتروني"
    }else if(isEmailValid(emailValue)){
        setSuccess(email);
    }
    else{
        setError(email);
        content[0].innerHTML = "الرجاء ادخال البريد الالكتروني بالطريقه الصحيحه"
    }
    // password Validtion
    if(passwordValue == ''){
        setError(password);
        content[1].innerHTML = "الرجاء ادخال كلمه المرور"
    }else {
        setSuccess(password);
    }
}

// Validate Oprators From Data Base
function validateFromDataBase(data){
    if(email.value != data.email){
        setError(email);
        setError(password);
        content[0].innerHTML = "البريد الالكتروني غير موجود"
        content[1].innerHTML = "او كلمه المرور غير صحيحه"
    }else{
        sessionStorage.setItem("name",`${data.first_name} ${data.last_name}`)
        sessionStorage.setItem("email",data.email)
        sessionStorage.setItem("token",data.token)
        location.href = "/index.html"
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

// Email Regular Expretion Test (Valdition)
function isEmailValid(e){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(e);
}

// Get UserData
function get() {
    fetch('http://localhost:3000/library/users/login',
        {
            method: 'POST',
            // mode: "cors",
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