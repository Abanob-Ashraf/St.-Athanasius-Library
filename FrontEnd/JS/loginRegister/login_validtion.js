let form = document.forms[0];
let inputFiled = document.querySelectorAll(".input-field");
let content = document.querySelectorAll("small");
let userName = document.getElementsByName("userName")[0];
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
    if(isFormValid () == true){
        e.preventDefault()
        get({
            email:userName.value,
            password:password.value
        })
    }else {
        e.preventDefault();
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
    let userNameValue = userName.value.trim();
    let passwordValue = password.value.trim();

    // userName Validtion
    if(userNameValue === ''){
        setError(userName);
        content[0].innerHTML = "الرجاء ادخال اسم المستخدم"
    }else if(userNameValue.length < 3 || userNameValue.length > 25){
        setError(userName);
        content[0].innerHTML = "يرجي ان لا تزيد الاحرف عن 25 او اقل من 3 احرف"
    }else {
        setSuccess(userName);
    }
    // password Validtion
    if(passwordValue === ''){
        setError(password);
        content[1].innerHTML = "الرجاء ادخال كلمه المرور"
    }else if(passwordValue.length < 8 || passwordValue.length > 14){
        setError(password);
        content[1].innerHTML = "يرجي ان لا تزيد الاحرف عن 14 او اقل من 8 احرف"
    }else {
        setSuccess(password);
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

// get UserData To Login
function get(data) {
    fetch('http://localhost:3000/library/users/login',
        {
            method: 'GET',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(data)
        }).then(res => res.json())
        .catch(e => console.log(e))
}