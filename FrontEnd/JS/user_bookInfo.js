// ==================================================== Global ==================================================== //
let form = document.forms[0]
let token = JSON.parse(sessionStorage.getItem("token"));
let book_id = sessionStorage.getItem("book_id")
let book_name = sessionStorage.getItem("book_name")
let book_number_in_shelf = sessionStorage.getItem("book_number_in_shelf")
let created_date = sessionStorage.getItem("created_date")
let name_of_series = sessionStorage.getItem("name_of_series")
let number_of_copies = sessionStorage.getItem("number_of_copies")
let number_of_pages = sessionStorage.getItem("number_of_pages")
let number_of_parts = sessionStorage.getItem("number_of_parts")
let publisher = sessionStorage.getItem("publisher")
let topic = sessionStorage.getItem("topic")
let conclusion = sessionStorage.getItem("conclusion")
let author = sessionStorage.getItem("author")
let book_code = sessionStorage.getItem("book_code")
let icon = document.querySelector(".header i")
icon.addEventListener("click",()=>{
    sessionStorage.removeItem("book_id")
    sessionStorage.removeItem("book_name")
    sessionStorage.removeItem("book_number_in_shelf")
    sessionStorage.removeItem("created_date")
    sessionStorage.removeItem("name_of_series")
    sessionStorage.removeItem("number_of_copies")
    sessionStorage.removeItem("number_of_pages")
    sessionStorage.removeItem("number_of_parts")
    sessionStorage.removeItem("publisher")
    sessionStorage.removeItem("topic")
    sessionStorage.removeItem("conclusion")
    sessionStorage.removeItem("author")
    sessionStorage.removeItem("book_code")
})
// ==================================================== End Global ==================================================== //





// ====================================================  Book Information ==================================================== //
// Book Name
let bookName = document.querySelector(".book-info .book-name span")
bookName.textContent = book_name

// Book Auther
let Author = document.querySelector(".book-info .author span")
Author.textContent = author == null ? "لا يوجد" : author

// Book Publisher
let Publisher = document.querySelector(".book-info .publisher span")
Publisher.textContent = publisher == null ? "لا يوجد" : publisher

// Book Topic
let Topic = document.querySelector(".book-info .topic span")
Topic.textContent = topic

// Book Series
let seriesName = document.querySelector(".book-info .name-of-series span")
seriesName.textContent = name_of_series == null ? "لا يوجد" : name_of_series

// Book Copies
let numberOfCopies = document.querySelector(".book-info .number-of-copies span")
numberOfCopies.textContent = number_of_copies

// Book Parts
let numberOfParts = document.querySelector(".book-info .number-of-parts span")
numberOfParts.textContent = number_of_parts

// Book Pages
let numberOfPages = document.querySelector(".book-info .number-of-pages span")
numberOfPages.textContent = number_of_pages

// Book Shelf
let bookNumberInShelf = document.querySelector(".book-info .book-number-in-shelf span")
bookNumberInShelf.textContent = book_number_in_shelf

// Book Code
let bookCode = document.querySelector(".book-info .book-code span")
bookCode.textContent = book_code

// Book Create Date
let createdDate = document.querySelector(".book-info .created-date span")
createdDate.textContent = created_date

// Book Conclusion
let Conclusion = document.querySelector(".book-info .conclusion textarea")
Conclusion.setAttribute("placeholder",conclusion)

let book_info = document.querySelector(".book-info")
let edit_book = document.querySelector(".edit-book")
let edit = document.querySelector(".edit")
edit.addEventListener("click",()=>{
    book_info.style.display = "none"
    edit_book.style.display = "block"
})
// ==================================================== End Book Information ==================================================== //



// ==================================================== Book Information Edit ==================================================== //
// ==================================================== All Block ==================================================== //
function allBlockData(data){
    let blockID = document.getElementsByName("block-num")[0]

    for (let i = 0 ; i < data.length ; i++){
        let  option = document.createElement("option")
        let optionText = document.createTextNode(`الوحده ${data[i].block_number}`)

        option.setAttribute("value",data[i].id)

        blockID.appendChild(option)
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
function allShelfsInOneBlock(){
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
// ==================================================== End All Shelfs In One BLock ==================================================== //
// Book Name
let bookName_e = document.querySelector(".edit-book .book-name .input")
bookName_e.setAttribute("placeholder",book_name)

// Book Auther
let Author_e = document.querySelector(".edit-book .author .input")
Author_e.setAttribute("placeholder",author)

// Book Publisher
let Publisher_e = document.querySelector(".edit-book .publisher .input")
Publisher_e.setAttribute("placeholder",publisher)

// Book Topic
let Topic_e = document.querySelector(".edit-book .topic .input")
Topic_e.setAttribute("placeholder",topic)

// Book Series
let seriesName_e = document.querySelector(".edit-book .name-of-series .input")
seriesName_e.setAttribute("placeholder",name_of_series)

// Book Copies
let numberOfCopies_e = document.querySelector(".edit-book .number-of-copies .input")
numberOfCopies_e.setAttribute("placeholder",number_of_copies)

// Book Parts
let numberOfParts_e = document.querySelector(".edit-book .number-of-parts .input")
numberOfParts_e.setAttribute("placeholder",number_of_parts)

// Book Pages
let numberOfPages_e = document.querySelector(".edit-book .number-of-pages .input")
numberOfPages_e.setAttribute("placeholder",number_of_pages)

// Book Shelf
let bookNumberInShelf_e = document.querySelector(".edit-book .book-number-in-shelf .input")
bookNumberInShelf_e.setAttribute("placeholder",book_number_in_shelf)

// Book Conclusion
let Conclusion_e = document.querySelector(".edit-book .conclusion textarea")
Conclusion_e.setAttribute("placeholder",conclusion)

let back = document.querySelector(".back")
back.addEventListener("click",()=>{
    book_info.style.display = "block"
    edit_book.style.display = "none"
})
// ==================================================== Edit Book ==================================================== //
let shelfID = document.getElementsByName("shelf-num")[0]
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
function editBook(){
    fetch(`http://localhost:3000/library/books/${book_id}`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            book_name: bookNameValue.value.trim() == "" ? book_name : bookNameValue.value.trim(),
            topic: bookTopicValue.value.trim() == "" ? topic : bookTopicValue.value.trim(),
            author: authorNameValue.value.trim() == "" ? author : authorNameValue.value.trim(),
            publisher: publisherNameValue.value.trim() == "" ? publisher : publisherNameValue.value.trim(),
            name_of_series: seriesNameValue.value.trim() == "" ? name_of_series : seriesNameValue.value.trim(),
            number_of_copies: copiesNumberValue.value.trim() == "" ? number_of_copies : copiesNumberValue.value.trim(),
            number_of_parts: partsNumberValue.value.trim() == "" ? number_of_parts : partsNumberValue.value.trim(),
            number_of_pages: pagesNumberValue.value.trim() == "" ? number_of_pages : pagesNumberValue.value.trim(),
            book_number_in_shelf: bookNumberValue.value.trim() == "" ? book_number_in_shelf : bookNumberValue.value.trim(),
            shelf_id: shelfID.value,
            conclusion: conclusionValue.value.trim() == "" ? conclusion : conclusionValue.value.trim()
        })
    }).then(res => {
        res.json()
        let status =  res.status
        return status
    })
    .then((status) => {
        console.log(status)
        if (status == 202){
            location.href = "/browseBooks.html"
        }
    })
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    editBook()
})
// ==================================================== End Edit Book ==================================================== //
// ==================================================== End Book Information Edit ==================================================== //
