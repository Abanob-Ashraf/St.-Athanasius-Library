let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let shelf_form = document.querySelector(".createBooks-landing .container .create-shelf .add-shelf")
let shelf_submit = document.querySelector(".createBooks-landing .container .create-shelf .submit")
let errorMsg = document.querySelector(".createBooks-landing .container .create-shelf small")
// shelf Fetch Function
export function addshelfs(){
    let blockID = document.getElementsByName("block_id")[0]
    let shelfNumberValue = document.getElementsByName("shelf_number")[0]
    let shelfNameValue = document.getElementsByName("shelf_name")[0]
    let errorMsg = document.querySelector(".createBooks-landing .container .create-shelf small")

    fetch('http://localhost:3000/library/shelfs',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            shelf_number: shelfNumberValue.value,
            shelf_name: shelfNameValue.value.trim() == "" ? null : shelfNameValue.value.trim(),
            block_id: blockID.value
        })
    }).then(res => {
        res.json()
        let status =  res.status
        return status
    })
    .then((status) => {
        if (shelfNumberValue.value.trim() != "" && status == 409){
            errorMsg.style.display = "block"
            errorMsg.textContent = "هذه الوحده موجوده بالفعل"
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },2000)
        }else if (shelfNumberValue.value.trim() != "" && status == 201){
            errorMsg.style.display = "block"
            errorMsg.textContent = "تم انشا الوحده"
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },2000)
        }
    })
    .catch(e => console.log(e))
}
shelf_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addshelfs()
})