// ==================================================== Global ==================================================== //
let token = JSON.parse(sessionStorage.getItem("token"))
let admin = JSON.parse(sessionStorage.getItem("admin"));

window.onload = function(){
    if (window.sessionStorage.getItem("token") == undefined){
        location.replace("/login.html")
    }
}

let create_block_shelf = document.querySelector(".createBooks-landing .container .create-block-shelf")

if (admin == false){
    create_block_shelf.remove()
}
// ==================================================== End Global ==================================================== //





// ==================================================== Header ==================================================== //
// Header Function
function header(data){
    let logout = document.querySelector(".header .container .menu #logout")
    let userLogin = document.querySelector(".header .container .user-login")
    let hiddenMenu = document.querySelector(".header .container .menu")
    let welcome = document.querySelector(".header .container .menu .welcome")

    welcome.textContent = `${data.first_name} ${data.last_name}`

    userLogin.addEventListener("click",()=>{
        hiddenMenu.classList.toggle("clicked")
    })

    logout.addEventListener("click",()=>{
        sessionStorage.removeItem("token")
        location.href = "/login.html"
    })
}
// Me Fetch Function
function me(){
    fetch('http://localhost:3000/library/users/me',
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`}),
    }).then(res => res.json())
    .then(res => {
        header(res)
    })
    .catch(e => console.log(e))
}
me()
// ==================================================== End Header ==================================================== //





// ==================================================== All Block ==================================================== //
function allBlockData(data){
    let blockID_1 = document.getElementsByName("block_id")[0]
    let blockID_2 = document.getElementsByName("block_id")[1]

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].id)

        blockID_1.appendChild(option)
        option.appendChild(optionText)
    }

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].id)

        blockID_2.appendChild(option)
        option.appendChild(optionText)
    }
}
// AllBlock Fetch Function
function allBlock(){
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
// ==================================================== End All Block ==================================================== //





// ==================================================== All Shelfs In One BLock ==================================================== //
function allShelfsData(data){
    let shelfID = document.getElementsByName("shelf_id")[0]
    let blockID = document.getElementsByName("block_id")[1]

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
function allShelfsInOneBlock(){
    let blockID = document.getElementsByName("block_id")[1]
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
// ==================================================== End All Shelfs In One BLock ==================================================== //





// ==================================================== Add Block ==================================================== //
// Block Fetch Function
let block_form = document.querySelector(".createBooks-landing .container .create-block .add-block")
let block_submit = document.querySelector(".createBooks-landing .container .create-block .submit")

function addBlock(){
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
        if (blockNumberValue.value.trim() != "" && status == 400){
            errorMsg.style.display = "block"
            errorMsg.textContent = "هذه الوحده موجوده بالفعل"
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },2000)
        }else if (blockNumberValue.value.trim() != "" && status == 200){
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
// ==================================================== End Add Block ==================================================== //





// ==================================================== Add shelf ==================================================== //
let shelf_form = document.querySelector(".createBooks-landing .container .create-shelf .add-shelf")
let shelf_submit = document.querySelector(".createBooks-landing .container .create-shelf .submit")

// shelf Fetch Function
function addshelfs(){
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
        console.log(status)
        if (shelfNumberValue.value.trim() != "" && status == 404){
            errorMsg.style.display = "block"
            errorMsg.textContent = "هذه الوحده موجوده بالفعل"
            setTimeout(()=>{
                errorMsg.style.display = "none"
            },2000)
        }else if (shelfNumberValue.value.trim() != "" && status == 200){
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
// ==================================================== End Add shelf ==================================================== //





// ==================================================== Add book ==================================================== //
let book_form = document.querySelector(".createBooks-landing .container .create-book .add-book")
let book_submit = document.querySelector(".createBooks-landing .container .create-book .submit")

// book Fetch Function
function addbook(){
    let shelfID = document.getElementsByName("shelf_id")[0]
    let bookNameValue = document.getElementsByName("bookName")[0]
    let bookTopicValue = document.getElementsByName("topic")[0]
    let authorNameValue = document.getElementsByName("authorName")[0]
    let publisherNameValue = document.getElementsByName("publisherName")[0]
    let seriesNameValue = document.getElementsByName("seriesName")[0]
    let copiesNumberValue = document.getElementsByName("copiesNumber")[0]
    let partsNumberValue = document.getElementsByName("partsNumber")[0]
    let pagesNumberValue = document.getElementsByName("pagesNumber")[0]
    let bookNumberValue = document.getElementsByName("bookNumber")[0]
    let conclusionValue = document.getElementsByName("conclusion")[0]
    let bookCodeValue = document.getElementsByName("bookCode")[0]

    fetch('http://localhost:3000/library/books',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            book_name: bookNameValue.value.trim(),
            topic: bookTopicValue.value.trim(),
            author: authorNameValue.value.trim() == "" ? null : authorNameValue.value.trim(),
            publisher: publisherNameValue.value.trim() == "" ? null : publisherNameValue.value.trim(),
            name_of_series: seriesNameValue.value.trim() == "" ? null : seriesNameValue.value.trim(),
            number_of_copies: copiesNumberValue.value.trim(),
            number_of_parts: partsNumberValue.value.trim(),
            number_of_pages: pagesNumberValue.value.trim(),
            book_number_in_shelf: bookNumberValue.value.trim(),
            shelf_id: shelfID.value,
            book_code: bookCodeValue.value.trim(),
            conclusion: conclusionValue.value.trim() == "" ? null : conclusionValue.value.trim()
        })
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))
}
book_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    addbook()
})
// ==================================================== End Add book ==================================================== //





// ==================================================== Add book ==================================================== //
// book Fetch Function
function addbook(){
    fetch('http://localhost:3000/library/books',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => console.log(res))
    .catch(e => console.log(e))
}
// ==================================================== End Add book ==================================================== //