let form = document.forms[0]
let token = JSON.parse(sessionStorage.getItem("token"));
let book_id = sessionStorage.getItem("book_id")
let book_name = sessionStorage.getItem("book_name")
let book_number_in_shelf = sessionStorage.getItem("book_number_in_shelf")
let name_of_series = sessionStorage.getItem("name_of_series")
let number_of_copies = sessionStorage.getItem("number_of_copies")
let number_of_pages = sessionStorage.getItem("number_of_pages")
let number_of_parts = sessionStorage.getItem("number_of_parts")
let publisher = sessionStorage.getItem("publisher")
let topic = sessionStorage.getItem("topic")
let conclusion = sessionStorage.getItem("conclusion")
let author = sessionStorage.getItem("author")
let shelfID = document.getElementsByName("shelf-num")[0]
let book_name_value = document.getElementsByName("bookName")[0]
let book_topic_value = document.getElementsByName("topic")[0]
let auther_name_value = document.getElementsByName("authorName")[0]
let publisher_name_value = document.getElementsByName("publisherName")[0]
let name_of_series_value = document.getElementsByName("seriesName")[0]
let number_of_copies_value = document.getElementsByName("copiesNumber")[0]
let number_of_parts_value = document.getElementsByName("partsNumber")[0]
let number_of_pages_value = document.getElementsByName("pagesNumber")[0]
let bool_number_vlaue = document.getElementsByName("bookNumber")[0]
let conclusion_value = document.getElementsByName("conclusion")[0]
let errorMsg = document.querySelector(".bookinfo.edit-book small")

function response(data){
    if (data == "Error you have a book in this rank"){
        errorMsg.textContent = "يوجد كتاب هنا بالفعل"
        setTimeout(()=>{
            errorMsg.textContent = ""
        },4000)
    }else if (data == "Book updated correctly"){
        errorMsg.textContent = "تم تعديل هذا الكتاب"
        setTimeout(()=>{
            errorMsg.textContent = ""
            location.href = "/browseBooks.html"
        },4000)
    }
}


function edit_book(){
    fetch(`http://localhost:3000/library/books/${book_id}`,
    {
        method: 'PUT',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            book_name: book_name_value.value.trim() == "" ? book_name : book_name_value.value.trim(),
            topic: book_topic_value.value.trim() == "" ? topic : book_topic_value.value.trim(),
            author: auther_name_value.value.trim() == "" ? author : auther_name_value.value.trim(),
            publisher: publisher_name_value.value.trim() == "" ? publisher : publisher_name_value.value.trim(),
            name_of_series: name_of_series_value.value.trim() == "" ? name_of_series : name_of_series_value.value.trim(),
            number_of_copies: number_of_copies_value.value.trim() == "" ? number_of_copies : number_of_copies_value.value.trim(),
            number_of_parts: number_of_parts_value.value.trim() == "" ? number_of_parts : number_of_parts_value.value.trim(),
            number_of_pages: number_of_pages_value.value.trim() == "" ? number_of_pages : number_of_pages_value.value.trim(),
            book_number_in_shelf: bool_number_vlaue.value.trim() == "" ? book_number_in_shelf : bool_number_vlaue.value.trim(),
            shelf_id: shelfID.value,
            conclusion: conclusion_value.value.trim() == "" ? conclusion : conclusion_value.value.trim()
        })
    }).then(res => res.json())
    .then(res => response(res))
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    edit_book()
})