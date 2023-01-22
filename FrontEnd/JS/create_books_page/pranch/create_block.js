let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let block_form = document.querySelector(".createBooks-landing .container .create-block .add-block")
let block_submit = document.querySelector(".createBooks-landing .container .create-block .submit")
export function addBlock(){
    let blockNumberValue = document.getElementsByName("block_number")[0]
    let blockNameValue = document.getElementsByName("block_name")[0]
    let errorMsg = document.querySelector(".createBooks-landing .container .create-block small")

    fetch('http://localhost:3000/library/blocks',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            block_number: blockNumberValue.value,
            block_name: blockNameValue.value.trim() == "" ? null : blockNameValue.value.trim()
        })
    }).then(res => {
        res.json()
        let status =  res.status
        return status
    })
    .then((status)=>{
        if (blockNumberValue.value.trim() != "" && status == 409){
            errorMsg.style.display = "block"
            errorMsg.textContent = "هذه الوحده موجوده بالفعل"
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },2000)
        }else if (blockNumberValue.value.trim() != "" && status == 201){
            errorMsg.style.display = "block"
            errorMsg.textContent = "تم انشا الوحده"
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },2000)
        }
    })
    .catch(e => console.log(e))
}
block_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addBlock()
})