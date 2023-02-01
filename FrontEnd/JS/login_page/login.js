// Redirect to profile page If Token Exiset
window.onload = ()=>{
    if (sessionStorage.getItem("token")){
        location.href = "/profile.html"
    }
}

// Rander The Validtion On Page
let inputFiled = document.querySelectorAll(".input-field");
document.addEventListener("click",() => {
    inputFiled.forEach((e) => {
        e.classList.remove("success","error");
    });
});

// Validate Oprators From Data Base
function validateFromDataBase(data){
    // Declare Email Variables
    let email = document.getElementsByName("email")[0];

    // Declare Password Variables
    let password = document.getElementsByName("password")[0];
    let passwordMsg = document.querySelectorAll("small")[0]


    if(data == "the username and password do not match please try again" || data.errors){
        // IF response = "the username and password do not match please try again" OR Has Errors Show =>
        setError(email);
        setError(password);
        passwordMsg.textContent = "البريد الالكتروني غير صحيح او كلمه المرور غير صحيحه"
    }else{
        // Else Set Sessions Storage And Put And Go To Profile Page =>
        sessionStorage.setItem("full_name" , JSON.stringify(data.full_name))
        sessionStorage.setItem("first_name" , JSON.stringify(data.first_name))
        sessionStorage.setItem("last_name" , JSON.stringify(data.last_name))
        sessionStorage.setItem("token" , JSON.stringify(data.token))
        sessionStorage.setItem("id" , JSON.stringify(data.id))
        sessionStorage.setItem("admin" , JSON.stringify(data.admin_flag))
        sessionStorage.setItem("job" , JSON.stringify(data.job))
        sessionStorage.setItem("email" , JSON.stringify(data.email))
        sessionStorage.setItem("phone_number" , JSON.stringify(data.phone_number))
        sessionStorage.setItem("created_date" , JSON.stringify(data.created_date))
        location.href = "/profile.html"
    }

    // Set Error Validate
    function setError(eValue) {
        let parentOfElement = eValue.parentElement;
        if(parentOfElement.classList.contains('success')){
            parentOfElement.classList.remove('success');
        }
        parentOfElement.classList.add('error'); 
    }
}

// Login Fetch Function
function login() {
    let email = document.getElementsByName("email")[0];
    let password = document.getElementsByName("password")[0];

    if (sessionStorage.getItem("token")){
        token = JSON.parse(sessionStorage.getItem("token"))
    } else {
        fetch('https://st-athanasius-library.com.up.railway.app/library/users/login',
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

// Submit/Run=>(Code) Login Fetch
let form = document.forms[0];
form.addEventListener('submit', (e) => {
    e.preventDefault()
    login()
});