let token = JSON.parse(sessionStorage.getItem("token"));
let blockID_1 = document.getElementsByName("select_block")[0]
let blockID_2 = document.getElementsByName("select_block_sh")[0]

// All Blocks Response
function response(data){
    // Loop BLock Numbers & Data In Block Drop List One
    for (let i = 0 ; i < data.length ; i++){
        // Create Element (option)
        let  option = document.createElement("option")

        // Create Element Text
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        // Set Element Attribute
        option.setAttribute("value",data[i].id)

        // Append Elements
        blockID_1.appendChild(option)
        option.appendChild(optionText)
    }

    // Loop BLock Numbers & Data In Block Drop List Two
    for (let i = 0 ; i < data.length ; i++){
        // Create Element (option)
        let  option = document.createElement("option")
        
        // Create Element Text
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        // Set Element Attribute
        option.setAttribute("value",data[i].id)

        // Set Element Attribute
        option.setAttribute("data",data[i].block_number)

        // Append Elements
        blockID_2.appendChild(option)
        option.appendChild(optionText)
    }
}

// all_Blocks Fetch Function (To Get Information)
function all_Blocks(){
    fetch('http://localhost:3000/library/blocks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => response(res))
    .catch(e => console.log(e))
}
all_Blocks()