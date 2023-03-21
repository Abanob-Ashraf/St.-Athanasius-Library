let token = JSON.parse(sessionStorage.getItem("token"));
let form = document.forms[0]
let block_number_value = document.getElementsByName("block_number")[0]
let block_name_value = document.getElementsByName("block_name")[0]
let errorMsg = document.querySelector(".create-block small")

// Add Blocks Response
function response(data){
    if (data == "this block already existe"){
        errorMsg.textContent = "هذه الوحده موجوده بالفعل"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data == "block created correctly"){
        errorMsg.textContent = "تم انشاء الوحده"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }
}

// add_block Fetch Function (To Add Information)
function add_block(){
    fetch('https://st-athanasius-library.com.up.railway.app/library/blocks',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            block_number: block_number_value.value,
            block_name: block_name_value.value.trim() == "" ? null : block_name_value.value.trim()
        })
    }).then(res => res.json())
    .then(res => response(res))
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    add_block()
})