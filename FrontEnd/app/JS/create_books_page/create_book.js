let token = JSON.parse(sessionStorage.getItem("token"));
let shelfID = document.getElementsByName("shelf_id")[0]
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
let show_book = document.querySelector(".show-created-book")
let errorMsg = document.querySelector(".show-created-book .input-field .the-book")
let form = document.forms[2]

// Add Books Response
function response(data){
    if (data == "Error you have a book in this rank"){
        show_book.style.display = "block"
        errorMsg.textContent = "يوجد كتاب هنا بالفعل"
        setTimeout(()=>{
            show_book.style.display = "none"
        },4000)
    }else if (data == "book created correctly"){
        show_book.style.display = "block"
        errorMsg.textContent = "تم انشاء هذا الكتاب"
        setTimeout(()=>{
            show_book.style.display = "none"
        },4000)
    }
}
// add_book Fetch Function (To Add Information)
function add_book(){
    fetch('https://st-athanasius-library.com.up.railway.app/library/books',
    {
        method: 'POST',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
        body: JSON.stringify({
            book_name: book_name_value.value.trim(),
            topic: book_topic_value.value.trim(),
            author: auther_name_value.value.trim() == "" ? null : auther_name_value.value.trim(),
            publisher: publisher_name_value.value.trim() == "" ? null : publisher_name_value.value.trim(),
            name_of_series: name_of_series_value.value.trim() == "" ? null : name_of_series_value.value.trim(),
            number_of_copies: number_of_copies_value.value.trim(),
            number_of_parts: number_of_parts_value.value.trim(),
            number_of_pages: number_of_pages_value.value.trim(),
            book_number_in_shelf: bool_number_vlaue.value.trim(),
            shelf_id: shelfID.value,
            conclusion: conclusion_value.value.trim() == "" ? null : conclusion_value.value.trim()
        })
    }).then(res => res.json())
    .then(res => response(res))
    .catch(e => console.log(e))
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    add_book()
})