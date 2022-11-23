let form = document.forms[0];
let inputFiled = document.querySelectorAll(".input-field");
let content = document.querySelectorAll("small");
let firstName = document.getElementsByName("firstName")[0];
let lastName = document.getElementsByName("lastName")[0];
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
    if(isFormValid () == true){
        form.submit();
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
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    // firstName Validtion
    if(firstNameValue == ''){
        setError(firstName);
    }else if(firstNameValue.length < 3 || firstNameValue.length > 10){
        setError(firstName);
    }else {
        setSuccess(firstName);
    }
    // lastName Validtion
    if(lastNameValue == ''){
        setError(lastName);
    }else if(lastNameValue.length < 3 || lastNameValue.length > 10){
        setError(lastName);
    }else {
        setSuccess(lastName);
    }
    // email Validtion
    if(emailValue == ''){
        setError(email);
    }else if(isEmailValid(emailValue)){
        setSuccess(email);
    }else{
        setError(email);
    }
    // password Validtion
    if(passwordValue == ''){
        setError(password);
    }else if(passwordValue.length < 8 || passwordValue.length > 14){
        setError(password);
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

// Email Regular Expretion Test (Valdition)
function isEmailValid(e){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(e);
}
