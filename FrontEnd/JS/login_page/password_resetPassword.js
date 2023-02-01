// Redirect to Login page If Token = undefined OR Empty
window.onload = function(){
    if (token == undefined || token == ""){
        location.href = "/login.html"
    }
}

// Get Token From Send URL And Put It In Fetch
let token = location.href.slice(50)

// Set New Password Fetch Function
function resetPass(){
    let resetPassword = document.getElementsByName("password")[0]
    fetch('https://st-athanasius-library.com.up.railway.app/library/users/NewPassword',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            new_password : resetPassword.value.trim()
        })
    }).then(res => res.json())
    .then(res => {
        let msg = document.querySelector("small")
        if(res.errors){
            // IF response = Has Errors Show =>
            msg.textContent = `يرجي ان لا تقل كلمه المرور عن 8 احرف`
            setTimeout(()=>{
                msg.textContent = ``
            },5000)
        }else{
            // Else Go To Login Page =>
            location.href = "/login.html"
        }
    })
    .catch(e => console.log(e))
}

// Submit/Run=>(Code) Set New Password Fetch Function
let form = document.forms[0]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    resetPass()
})
