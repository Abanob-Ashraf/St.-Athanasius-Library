let token = JSON.parse(sessionStorage.getItem("token"))
let form = document.forms[0]
let errorMsg = document.querySelector(".search-books small")
let books = document.querySelector(".books")

// Search Response
function response(data){
    for (let i = 0 ; i < data.length; i++){
        books.style.display = "block"
        // Call Tabel From Html & Create Tabel Raw
        let table = document.querySelector(".the-books")    
        let raw =  document.createElement("tr")

        // Create Tabel Discription
        let discription_1 =  document.createElement("td")
        let discription_2 =  document.createElement("td")
        let discription_3 =  document.createElement("td")
        let discription_4 =  document.createElement("td")

        // Create Tabel Discription Text
        let discriptionText_1 = document.createTextNode(data[i].book_name)
        let discriptionText_2 = document.createTextNode(data[i].author == null ? "لا يوجد" : data[i].author)
        let discriptionText_3 = document.createTextNode(data[i].publisher == null ? "لا يوجد" : data[i].publisher)
        let discriptionText_4 = document.createTextNode(data[i].book_code)

        // Append Elements
        table.appendChild(raw)

        raw.appendChild(discription_1)
        discription_1.appendChild(discriptionText_1)

        raw.appendChild(discription_2)
        discription_2.appendChild(discriptionText_2)

        raw.appendChild(discription_3)
        discription_3.appendChild(discriptionText_3)

        raw.appendChild(discription_4)
        discription_4.appendChild(discriptionText_4)

        if(data == "book was not found"){
            // If data == "book was not found" Show =>
            books.style.display = "none"
            errorMsg.textContent = "هذا الكتاب غير موجود"
            setTimeout(()=>{
                // After 4 Milli Second Do =>
                errorMsg.textContent = ""
            },4000)
        }

        // When Click On Current Tabel Raw Put All Current Book Data In Session And Redirect To Book Information PageTransitionEvent
        raw.addEventListener("click",()=>{
            sessionStorage.setItem("book_id",data[i].id)
            sessionStorage.setItem("book_name",data[i].book_name)
            sessionStorage.setItem("book_number_in_shelf",data[i].book_number_in_shelf)
            sessionStorage.setItem("created_date",data[i].created_date)
            sessionStorage.setItem("name_of_series",data[i].name_of_series == null ? "لا يوجد" : data[i].name_of_series)
            sessionStorage.setItem("number_of_copies",data[i].number_of_copies)
            sessionStorage.setItem("number_of_pages",data[i].number_of_pages)
            sessionStorage.setItem("number_of_parts",data[i].number_of_parts)
            sessionStorage.setItem("publisher",data[i].publisher == null ? "لا يوجد" : data[i].publisher)
            sessionStorage.setItem("topic",data[i].topic)
            sessionStorage.setItem("conclusion",data[i].conclusion == null ? "لا يوجد" : data[i].conclusion)
            sessionStorage.setItem("author",data[i].author == null ? "لا يوجد" : data[i].author)
            sessionStorage.setItem("book_code",data[i].book_code)
            location.href = "/userBookInfo.html"
        })

        // When Submit Remove Right & Previous Elements To But New Elements
        form.addEventListener("submit",()=>{
            raw.remove()
            raw.previousElementSibling.remove()
        })
    }
}

// search Fetch Function (To Get Information)
function search(){
    let keyOfSearch = document.querySelector(".browseBooks.search-books .search-container .subject").value
    let valueOfSearch = document.querySelector(".browseBooks.search-books .search-container input").value
    fetch(`http://localhost:3000/library/books/search?${keyOfSearch}=${valueOfSearch}`,
    {
        method: 'GET',
        headers: new Headers({"Authorization": `Bearer ${token}`,'Content-Type': 'application/json'}),
    }).then(res => res.json())
    .then(res => {
        response(res)
    })
    .catch(e => console.log(e))
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    search()
})
