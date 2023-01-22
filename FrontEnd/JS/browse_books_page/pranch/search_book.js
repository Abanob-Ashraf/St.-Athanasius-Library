let token = JSON.parse(sessionStorage.getItem("token"));
let admin = JSON.parse(sessionStorage.getItem("admin"));
function search(data){
    let msg = document.querySelector(".search-books small")
    for (let i = 0 ; i < data.length; i++){
        let books = document.querySelector(".books")
        let form = document.querySelector(".browse-books-landing .container .browseBooks.search-books form")

        books.style.display = "block"
        let table = document.querySelector(".the-books")    
        let raw =  document.createElement("tr")
        let discription_1 =  document.createElement("td")
        let discription_2 =  document.createElement("td")
        let discription_3 =  document.createElement("td")
        let discription_4 =  document.createElement("td")

        let discriptionText_1 = document.createTextNode(data[i].book_name)
        let discriptionText_2 = document.createTextNode(data[i].author == null ? "لا يوجد" : data[i].author)
        let discriptionText_3 = document.createTextNode(data[i].publisher == null ? "لا يوجد" : data[i].publisher)
        let discriptionText_4 = document.createTextNode(data[i].book_code)

        table.appendChild(raw)
        raw.appendChild(discription_1)
        raw.appendChild(discription_2)
        raw.appendChild(discription_3)
        raw.appendChild(discription_4)
        discription_1.appendChild(discriptionText_1)
        discription_2.appendChild(discriptionText_2)
        discription_3.appendChild(discriptionText_3)
        discription_4.appendChild(discriptionText_4)

        form.addEventListener("submit",()=>{
            raw.remove()
            raw.previousElementSibling.remove()
        })

        if(data == "book was not found"){
            books.style.display = "none"
            msg.textContent = "هذا الكتاب غير موجود"
            setTimeout(()=>{
                msg.textContent = ""
            },2000)
        }

        raw.addEventListener("click",()=>{
            sessionStorage.setItem("book_id",data[i].id)
            sessionStorage.setItem("book_name",data[i].book_name)
            sessionStorage.setItem("book_number_in_shelf",data[i].book_number_in_shelf)
            sessionStorage.setItem("created_date",data[i].created_date)
            sessionStorage.setItem("name_of_series",data[i].name_of_series)
            sessionStorage.setItem("number_of_copies",data[i].number_of_copies)
            sessionStorage.setItem("number_of_pages",data[i].number_of_pages)
            sessionStorage.setItem("number_of_parts",data[i].number_of_parts)
            sessionStorage.setItem("publisher",data[i].publisher)
            sessionStorage.setItem("topic",data[i].topic)
            sessionStorage.setItem("conclusion",data[i].conclusion)
            sessionStorage.setItem("author",data[i].author)
            sessionStorage.setItem("book_code",data[i].book_code)
            location.href = "/bookInfo.html"
        })
    }
}
// Browse Books Fetch Function
export function browseBooks(){
    let keyOfSearch = document.querySelector(".browse-books-landing .container .browseBooks.search-books .search-container #subject").value
    let valueOfSearch = document.querySelector(".browse-books-landing .container .browseBooks.search-books .search-container input").value
    fetch(`http://localhost:3000/library/books/search?${keyOfSearch}=${valueOfSearch}`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        search(res)
    })
    .catch(e => console.log(e))
}
let form = document.querySelector(".browse-books-landing .container .browseBooks.search-books form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    browseBooks()
})
