let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
let book_form = document.querySelector(".createBooks-landing .container .create-book .add-book")
let book_submit = document.querySelector(".createBooks-landing .container .create-book .submit")
// book Fetch Function
export function addbook(){
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
            conclusion: conclusionValue.value.trim() == "" ? null : conclusionValue.value.trim()
        })
    }).then(res => {
        res.json()
        let status =  res.status
        return status
    })
    .then((status) => {
        let show_book = document.querySelector(".show-created-book")
        let the_book = document.querySelector(".show-created-book .input-field .the-book")
        if (status == 201){
            show_book.style.display = "block"
            the_book.textContent = "تم انشاء هذا الكتاب"
            setTimeout(()=>{
                show_book.style.display = "none"
            },2000)
        }else if (status == 409){
            show_book.style.display = "block"
            the_book.textContent = "هذا الكتاب يوجد بالفعل"
            setTimeout(()=>{
                show_book.style.display = "none"
            },2000)
        }
        })
    .catch(e => console.log(e))
}
book_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    addbook()
})