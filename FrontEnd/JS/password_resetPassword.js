window.onload = function(){
    if (token == undefined || token == ""){
        location.href = "/login.html"
    }
}

let form = document.forms[0]
let resetPassword = document.getElementsByName("password")[0]
let msg = document.querySelector(".password-form small")

let token = location.href.slice(50)

function resetPass(){
    fetch('http://localhost:3000/library/users/NewPassword',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            new_password : resetPassword.value.trim()
        })
    }).then(res => res.json())
    .then(res => {
        console.log(res)
        if(resetPassword.value.length < 8){
            msg.textContent = `يرجي ان لا تقل كلمه المرور عن 8 احرف`
            setTimeout(()=>{
                msg.textContent = ``
            },2000)
        }else{
            msg.textContent = `تم تغير كلمه المرور سيتم ارجاعك لصفحه تسجيل الدخول`
            setTimeout(()=>{
                msg.textContent = ``
                location.href = "/login.html"
            },5000)
        }
    })
    .catch(e => console.log(e))
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    resetPass()
})
