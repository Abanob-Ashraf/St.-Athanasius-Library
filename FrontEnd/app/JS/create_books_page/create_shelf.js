let token = JSON.parse(sessionStorage.getItem("token"));
let form = document.forms[1]
let blockID = document.getElementsByName("block_id")[0]
let shelf_number_value = document.getElementsByName("shelf_number")[0]
let shelf_name_value = document.getElementsByName("shelf_name")[0]
let errorMsg = document.querySelector(".create-shelf small")

// Add Shelfs Response
function response(data){
    if (data == "this shelf in this block already existe"){
        errorMsg.textContent = "هذه الرف موجوده بالفعل في هذه الوحده"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data == "shelf created correctly"){
        errorMsg.textContent = "تم انشاء الرف"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }
}

// add_shelf Fetch Function (To Add Information)
function add_shelf(){
    fetch('https://st-athanasius-library.com.up.railway.app/library/shelfs',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            shelf_number: shelf_number_value.value,
            shelf_name: shelf_name_value.value.trim() == "" ? null : shelf_name_value.value.trim(),
            block_id: blockID.value
        })
    }).then(res => res.json())
    .then(res => response(res))
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    add_shelf()
})