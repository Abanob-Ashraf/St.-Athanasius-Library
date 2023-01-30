let token = JSON.parse(sessionStorage.getItem("token"));
let shelfID = document.getElementsByName("select_shelf")[0]
let blockID = document.getElementsByName("select_block_sh")[0]

// All Shelfs Response
function response(data){
    // Loop Shelf Numbers & Data In Shelf Drop List
    for (let i = 0 ; i < data.length ; i++){
        // when Shelf Undefined Stop Proccess 
        if(data[i].shelf_number == undefined){
            return false
        }
        // Create Element (option)
        let  option = document.createElement("option")

        // Create Element Text
        let optionText = document.createTextNode(`الرف ${data[i].shelf_number}`)

        // Set Element Attribute
        option.setAttribute("value",data[i].id == undefined ? "" : data[i].id)

        // Append Elements
        shelfID.appendChild(option)
        option.appendChild(optionText)

        // Remove Shelf Numbers & Data In Shelf Drop List When Change BLock Number
        blockID.addEventListener("input",()=>{
            option.remove()
            option.previousElementSibling.remove()
        })
    }
}

// all_shelfs Fetch Function (To Get Information)
function all_shelfs(){
    blockID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/shelfs/block/${blockID.value}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => response(res))
        .catch(e => console.log(e))
    })
}
all_shelfs()