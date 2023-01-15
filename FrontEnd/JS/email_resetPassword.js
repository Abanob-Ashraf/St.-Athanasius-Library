let msg = document.querySelector(".email-form small")
let form = document.forms[0]
let email = document.getElementsByName("email")[0]

function send(){
    fetch('http://localhost:3000/library/users/resetPassword',
    {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            email: email.value.trim(),
        })
    }).then(res => res.json())
    .then(res => {
        if(isEmailValid(email.value.trim()) == true){
            msg.textContent = "تم الارسال الرجاء التاكد من بريدك"
            setTimeout(()=>{
                msg.textContent = ""
            },5000)
        }
        function isEmailValid(email){
            const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return reg.test(email);
        }
    })
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    send()
})

