let token = JSON.parse(sessionStorage.getItem("token"));
let shelfID = document.getElementsByName("select_shelf")[0]
let blockID = document.getElementsByName("select_block_sh")[0]

// books_in_shelf_in_bLock_length Fetch Function (To Get Information)
function books_in_shelf_in_bLock_length(){
    shelfID.addEventListener("input",()=>{
        fetch(`http://localhost:3000/library/books/countBooksInThisBlock?block_id=${blockID.value}&shelf_id=${shelfID.value}`,
        {
            method: 'GET',
            headers: new Headers({"Authorization": `Bearer ${token}`}),
        }).then(res => res.json())
        .then(res => {
            let shelf_books_Length = document.querySelector(".book-in-shelf .shelf-books .count")
            if (shelfID.value == ""){
                shelf_books_Length.style.display = "none"
                shelf_books_Length.textContent = ""
            }else if (res == "عدد الكتب undefined"){
                shelf_books_Length.style.display = "block"
                shelf_books_Length.textContent = "لا يوجد كتب"
            }else{
                shelf_books_Length.style.display = "block"
                shelf_books_Length.textContent = res
            }
        })
        .catch(e => console.log(e))
    })

}
books_in_shelf_in_bLock_length()