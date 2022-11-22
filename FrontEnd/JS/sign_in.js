let form = document.forms[0];
let user = document.getElementById("user");
let paassword = document.getElementById("password");
let inputField = document.querySelectorAll(".sign-in-form .input-field");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let go = document.querySelector(".create");

document.addEventListener("click",()=>{
    inputField.forEach((e)=>{
        e.classList.remove("success","error")
    })
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userValue = user.value.trim()
    let passwordValue = paassword.value.trim()
    inputField.forEach((e)=>{
        if (userValue.length >= 3 && userValue.length <= 10 && passwordValue.length >= 8 && passwordValue.length <= 14){
            e.classList.add("success")
        }else{
            e.classList.add("error")
            one.textContent = `يرجي كتابه الاسم بدون ارقام او علامات ترمزيه و ان لاتزيد عدد الاحرف عن 10 او اقل من 3`
            two.textContent = `يرجي كتابه كلمه المرور بدون علامات ترمزيه و ان لاتزيد عدد (الاحرف - الارقام) عن 14 او اقل من 8`
        }
    })
})