let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function allShelfsData(data){
    let shelfID = document.getElementsByName("shelf-num")[0]
    let blockID = document.getElementsByName("block-num")[0]

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`${data[i].shelf_number == undefined ? "لا يوجد" : `الرف ${data[i].shelf_number}`}`)

        option.setAttribute("value",data[i].id == undefined ? "" : data[i].id)

        shelfID.appendChild(option)
        option.appendChild(optionText)

        blockID.addEventListener("input",()=>{
            option.remove()
            option.previousElementSibling.remove()
        })
    }
}
// AllShelfsInOneBLock Fetch Function
export function allShelfsInOneBlock(){
    let blockID = document.getElementsByName("block-num")[0]
    blockID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library//shelfs/block/${blockID.value}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        }).then(res => res.json())
        .then(res => {
            allShelfsData(res)
        })
        .catch(e => console.log(e))
    })
}
allShelfsInOneBlock()