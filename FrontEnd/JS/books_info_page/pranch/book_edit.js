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
export function editBook(){
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