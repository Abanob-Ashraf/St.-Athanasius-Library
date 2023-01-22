let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function allBlockData(data){
    let blockID_1 = document.getElementsByName("block_num_one")[0]
    let blockID_2 = document.getElementsByName("block_num_two")[0]

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].block_number)

        blockID_1.appendChild(option)
        option.appendChild(optionText)
    }

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].block_number)

        blockID_2.appendChild(option)
        option.appendChild(optionText)
    }
}
// AllBlock Fetch Function
export function allBlock(){
    fetch('http://localhost:3000/library/blocks',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        allBlockData(res)
    })
    .catch(e => console.log(e))
}
allBlock()