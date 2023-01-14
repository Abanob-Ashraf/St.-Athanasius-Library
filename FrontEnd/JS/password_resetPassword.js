window.onload = function(){
    if (sessionStorage.getItem("email") == undefined){
        location.replace("/email_resetPassword.html")
    }
}

let form = document.forms[0]
let resetPassword = document.getElementsByName("password")[0]

function resetPass(){
    fetch('http://localhost:3000/library/users/resetPassword',
    {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            email: sessionStorage.getItem("email"),
            new_password : resetPassword.value.trim()
        })
    }).then(res => res.json())
    .then(res => {
        let msg = document.querySelector(".password-form small")
        if(resetPassword.value.length < 8 || resetPassword.value.length > 14){
            msg.textContent = `يرجي ان لا تزيد الاحرف عن 14 او اقل من 8 احرف`
            setTimeout(()=>{
                msg.textContent = ``
            },2000)
        }
        else{
            location.href = "/login.html"
        }
    })
    .catch(e => console.log(e))
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    resetPass()
})
