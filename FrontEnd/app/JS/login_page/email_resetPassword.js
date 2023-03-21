// Reset Password Fetch Function
function send(){
    let email = document.getElementsByName("email")[0]
    fetch('https://st-athanasius-library.com.up.railway.app/library/users/resetPassword',
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            email: email.value.trim(),
        })
    }).then(res => res.json())
    .then(res => {
        let msg = document.querySelector("small");
        if(res == "this email does not exiest here"){
            // IF response = "this email does not exiest here" Show =>
            msg.textContent = "هذا البريد الالكتروني غير مسجل"
            setTimeout(()=>{
                msg.textContent = ""
            },5000)
        }else{
            // Else Show =>
            msg.textContent = "تم الارسال الرجاء التاكد من بريدك"
            setTimeout(()=>{
                msg.textContent = ""
            },5000)
        }
    })
    .catch(e => console.log(e))
}

// Submit/Run=>(Code) Reset Password Fetch
let form = document.forms[0];
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    send()
})

