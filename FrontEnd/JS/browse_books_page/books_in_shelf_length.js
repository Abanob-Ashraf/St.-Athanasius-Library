let token = JSON.parse(sessionStorage.getItem("token"));
let shelfID = document.getElementsByName("shelf_num")[0]
let blockID = document.getElementsByName("block_num_two")[0]

// books_in_shelf_in_bLock_length Fetch Function (To Get Information)
function books_in_shelf_in_bLock_length(){
    shelfID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_number=${blockID.value.toString()}&shelf_number=${shelfID.value.toString()}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let shelf_books_Length = document.querySelector(".browseBooks.shelf-books .shelf-book .count")
            if (res == "عدد الكتب undefined"){
                shelf_books_Length.textContent = ""
            }else{
                shelf_books_Length.textContent = res
            }
        })
        .catch(e => console.log(e))
    })

}
books_in_shelf_in_bLock_length()