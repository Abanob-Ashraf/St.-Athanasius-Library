let token = JSON.parse(sessionStorage.getItem("token"));
let form = document.forms[1]
let oldPassword = document.querySelector(".profile.user .change-password .old-password input")
let newpassword = document.querySelector(".profile.user .change-password .new-password input")
let errorMsg = document.querySelector(".profile.user .change-password small")

// change_Password Featch Function (To Edit Information)
function change_Password(){
    fetch(`http://localhost:3000/library/users/me/changePassword`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            old_password: oldPassword.value.trim(),
            new_password: newpassword.value.trim()
        })
    }).then(res => res.json())
    .then(res => {
        if(res == "the password do not match please try again"){
            // If Response = "the password do not match please try again" Show =>
            errorMsg.textContent = "كلمه المرور لا تتطابق"
            setTimeout(()=>{
                // Afer 4 milli Second Remove Error Message 
                errorMsg.textContent = ""
            },4000)
        }else if (res == "you used this password before try another password"){
            // Else Response = "you used this password before try another password" Show =>
            errorMsg.textContent = "كلمه المرور مستخدمه من قبل "
            setTimeout(()=>{
                // Afer 4 milli Second Remove Error Message 
                errorMsg.textContent = ""
            },4000)
        }else if (res == "password changed correctly"){
            // Else Response = "password changed correctly" Show => 
            errorMsg.textContent = "تم تغير كلمه المرور"
            setTimeout(()=>{
                // Afer 2 milli Second Clear Session And Reload Page 
                sessionStorage.clear()
                location.href = "/login.html"
            })
        }else if (res.errors[0].param == "new_password"){
            // Else Response = "password changed correctly" Show => 
            errorMsg.textContent = "يرجي ان لا تقل كلمه المرور عن 8 احرف/ارقام"
            setTimeout(()=>{
                // Afer 4 milli Second Remove Error Message 
                errorMsg.textContent = ""
            },4000)
        }
    })
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    change_Password()
})